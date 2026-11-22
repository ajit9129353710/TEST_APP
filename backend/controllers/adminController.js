const User = require("../models/User");
const Test = require("../models/Test");
const Result = require("../models/Result");
const Question = require("../models/Question");

exports.getDashboardStats = async (req, res) => {
  try {
    const [students, tests, questions, results] = await Promise.all([
      User.countDocuments({ role: "student" }),
      Test.countDocuments(),
      Question.countDocuments(),
      Result.countDocuments(),
    ]);

    res.status(200).json({
      students,
      tests,
      questions,
      results,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find()
      .populate("user", "name email")
      .populate("test", "title subject")
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
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      count: students.length,
      students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};