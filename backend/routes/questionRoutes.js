const express = require("express");
const router = express.Router();

const {
  addQuestion,
  getQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", authMiddleware, getQuestions);
router.get("/:id", authMiddleware, getQuestionById);

router.post("/", authMiddleware, adminMiddleware, addQuestion);
router.put("/:id", authMiddleware, adminMiddleware, updateQuestion);
router.delete("/:id", authMiddleware, adminMiddleware, deleteQuestion);

module.exports = router;