const { Resume, PortfolioPage } = require("../models");

const createResume = async (req, res) => {
  const { title, content, format } = req.body;
  const resume = await Resume.create({ title, content, format });
  res.json(resume);
};

const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.findAll();
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resumes", error });
  }
};

const deleteResume = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Resume.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "Resume deleted successfully" });
    } else {
      res.status(404).json({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting resume", error });
  }
};

const updateResume = async (req, res) => {
  const { id } = req.params;
  const { title, content, format } = req.body;

  try {
    const resume = await Resume.findByPk(id);
    if (resume) {
      await resume.update({ title, content, format });
      res.status(200).json(resume);
    } else {
      res.status(404).json({ message: "Resume not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating resume", error });
  }
};

// TODO: Move this to own file.
const createPortfolioPage = async (req, res) => {
  const { title, htmlContent, cssContent, resumeId } = req.body;
  const portfolioPage = await PortfolioPage.create({
    title,
    htmlContent,
    cssContent,
    resumeId,
  });
  res.json(portfolioPage);
};

module.exports = {
  createResume,
  createPortfolioPage,
  getAllResumes,
  deleteResume,
  updateResume,
};
