const Test = require("../models/Test");
const Question = require("../models/Question");

exports.createTest = async (req, res) => {
  try {
    const { title, description, subject, questions, duration } = req.body;

    if (!title || !subject || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({
        message: "Title, subject and questions are required",
      });
    }

    const questionDocs = await Question.find({
      _id: { $in: questions },
    });

    if (questionDocs.length !== new Set(questions).size) {
      return res.status(400).json({
        message: "One or more questions are invalid",
      });
    }

    const totalMarks = questionDocs.reduce(
      (total, question) => total + question.marks,
      0
    );

    const test = await Test.create({
      title,
      description,
      subject,
      questions,
      duration: duration || 30,
      totalMarks,
    });

    res.status(201).json({
      message: "Test created successfully",
      test,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find({ isActive: true })
      .select("-questions");

    res.status(200).json({
      count: tests.length,
      tests,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findOne({
      _id: req.params.id,
      isActive: true,
    }).populate({
      path: "questions",
      select: "-correctAnswer",
    });

    if (!test) {
      return res.status(404).json({
        message: "Test not found",
      });
    }

    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTest = async (req, res) => {
  try {
    const test = await Test.findByIdAndDelete(req.params.id);

    if (!test) {
      return res.status(404).json({
        message: "Test not found",
      });
    }

    res.status(200).json({
      message: "Test deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};