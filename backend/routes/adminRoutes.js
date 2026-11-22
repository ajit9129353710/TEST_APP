const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAllResults,
  getAllStudents,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.use(authMiddleware, adminMiddleware);

router.get("/stats", getDashboardStats);
router.get("/results", getAllResults);
router.get("/students", getAllStudents);

module.exports = router;