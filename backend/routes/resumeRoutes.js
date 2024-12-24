const express = require("express");
const router = express.Router();
const {
  createResume,
  createPortfolioPage,
  getAllResumes,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

router.post("/resume", createResume);
router.get("/resume", getAllResumes);
router.put("/resume", updateResume);
router.delete("/resume", deleteResume);

router.post("/portfolio", createPortfolioPage);

module.exports = router;
