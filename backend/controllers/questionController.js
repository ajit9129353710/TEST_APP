const Question = require("../models/Question");

exports.addQuestion = async (req, res) => {
  try {
    const { question, options, correctAnswer, subject, marks } = req.body;

    if (!question || !options || !subject || correctAnswer === undefined) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!Array.isArray(options) || options.length !== 4) {
      return res.status(400).json({
        message: "Exactly 4 options are required",
      });
    }

    const newQuestion = await Question.create({
      question,
      options,
      correctAnswer,
      subject,
      marks,
    });

    res.status(201).json({
      message: "Question added successfully",
      question: newQuestion,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().select("-correctAnswer");

    res.status(200).json({
      count: questions.length,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).select("-correctAnswer");

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      message: "Question updated successfully",
      question,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      message: "Question deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};