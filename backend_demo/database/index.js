const {Sequelize} = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql"
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./User")(sequelize, Sequelize);

module.exports = db;