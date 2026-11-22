const express = require("express");
const router = express.Router();

const {
  submitTest,
  getMyResults,
  getResultById,
} = require("../controllers/resultController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/submit", authMiddleware, submitTest);
router.get("/history", authMiddleware, getMyResults);
router.get("/:id", authMiddleware, getResultById);

module.exports = router;