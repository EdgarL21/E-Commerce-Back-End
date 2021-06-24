const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // Link to database connection
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false, // creates two new columns
    freezeTableName: true, // Prevent sequelize from renaming the table
    underscored: true, // gives underscores to some of the names in columns
    modelName: "category", // makes name of table in mysql
  }
);

module.exports = Category;
