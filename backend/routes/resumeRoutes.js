const express = require("express");
const router = express.Router();
const {
  createResume,
  createPortfolioPage,
} = require("../controllers/resumeController");

router.post("/resume", createResume);
router.post("/portfolio", createPortfolioPage);

module.exports = router;
