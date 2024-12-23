const { Resume, PortfolioPage } = require("../models");

const createResume = async (req, res) => {
  const { title, content, format } = req.body;
  const resume = await Resume.create({ title, content, format });
  res.json(resume);
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

module.exports = { createResume, createPortfolioPage };
