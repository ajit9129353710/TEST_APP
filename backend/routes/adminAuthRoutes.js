const express = require("express");
const router = express.Router();

const {
  createAdmin,
} = require("../controllers/adminAuthController");

router.post("/create", createAdmin);

module.exports = router;