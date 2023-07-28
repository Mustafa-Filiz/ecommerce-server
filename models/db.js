const Sequelize = require("sequelize");

// creating the auth url
const url = process.env.DB_URL;

// creating the db instance
const ecommercedb = new Sequelize(url, {
  logging: (f) => console.log("------\n", f, "\n\n"),
  dialect: "postgres",
  define: {
    underscored: true,
    freezeTableName: true,
    timestamps: true,
  },
});

module.exports = { ecommercedb };
require("./index.js");
