const express = require("express");
const router = express.Router();

const {
  createTest,
  getAllTests,
  getTestById,
  deleteTest,
} = require("../controllers/testController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.get("/", authMiddleware, getAllTests);
router.get("/:id", authMiddleware, getTestById);

router.post("/", authMiddleware, adminMiddleware, createTest);
router.delete("/:id", authMiddleware, adminMiddleware, deleteTest);

module.exports = router;