const Result = require("../models/Result");
const Test = require("../models/Test");
const Question = require("../models/Question");

exports.submitTest = async (req, res) => {
  try {
    const { testId, answers } = req.body;

    if (!testId || !Array.isArray(answers)) {
      return res.status(400).json({
        message: "Test ID and answers are required",
      });
    }

    const test = await Test.findOne({
      _id: testId,
      isActive: true,
    });

    if (!test) {
      return res.status(404).json({
        message: "Test not found",
      });
    }

    const existingResult = await Result.findOne({
      user: req.user.id,
      test: testId,
    });

    if (existingResult) {
      return res.status(400).json({
        message: "Test already submitted",
      });
    }

    const questions = await Question.find({
      _id: { $in: test.questions },
    });

    const answerMap = new Map();

    for (const answer of answers) {
      const id = String(answer.questionId);

      if (answerMap.has(id)) {
        return res.status(400).json({
          message: "Duplicate answers are not allowed",
        });
      }

      if (
        answer.selectedAnswer !== null &&
        (!Number.isInteger(answer.selectedAnswer) ||
          answer.selectedAnswer < 0 ||
          answer.selectedAnswer > 3)
      ) {
        return res.status(400).json({
          message: "Invalid selected answer",
        });
      }

      answerMap.set(id, answer.selectedAnswer);
    }

    const questionIds = new Set(
      questions.map((question) => String(question._id))
    );

    for (const id of answerMap.keys()) {
      if (!questionIds.has(id)) {
        return res.status(400).json({
          message: "Answer contains an invalid question",
        });
      }
    }

    let score = 0;
    let totalMarks = 0;

    const evaluatedAnswers = questions.map((question) => {
      const selectedAnswer = answerMap.has(String(question._id))
        ? answerMap.get(String(question._id))
        : null;

      const isCorrect = selectedAnswer === question.correctAnswer;

      totalMarks += question.marks;

      if (isCorrect) {
        score += question.marks;
      }

      return {
        question: question._id,
        selectedAnswer,
        isCorrect,
      };
    });

    const percentage =
      totalMarks > 0
        ? Number(((score / totalMarks) * 100).toFixed(2))
        : 0;

    const result = await Result.create({
      user: req.user.id,
      test: testId,
      answers: evaluatedAnswers,
      score,
      totalMarks,
      percentage,
      status: percentage >= 40 ? "Pass" : "Fail",
    });

    res.status(201).json({
      message: "Test submitted successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({
      user: req.user.id,
    })
      .populate("test", "title subject duration")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: results.length,
      results,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};exports.getResultById = async (req, res) => {
  try {
    const result = await Result.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate("test", "title subject duration");

    if (!result) {
      return res.status(404).json({
        message: "Result not found",
      });
    }

    const populatedAnswers = await Promise.all(
      result.answers.map(async (answer) => {
        const questionId = answer.question?._id || answer.question;

        const question = await Question.findById(questionId)
          .select("question options correctAnswer marks")
          .lean();

        console.log("QUESTION FROM DATABASE:", question);

        return {
          _id: answer._id,
          selectedAnswer: answer.selectedAnswer,
          isCorrect: answer.isCorrect,
          question,
        };
      })
    );

    const resultData = result.toObject();

    resultData.answers = populatedAnswers;

    res.status(200).json(resultData);
  } catch (error) {
    console.error("Get Result Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};