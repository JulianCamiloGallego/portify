"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PortfolioPage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PortfolioPage.associate = (models) => {
        PortfolioPage.belongsTo(models.Resume, { foreignKey: "resumeId" });
      };
    }
  }
  PortfolioPage.init(
    {
      title: DataTypes.STRING,
      htmlContent: DataTypes.TEXT,
      cssContent: DataTypes.TEXT,
      resumeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PortfolioPage",
    }
  );
  return PortfolioPage;
};
