const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3303,

  user: "root",

  password: "",
  database: employees_db,
});

function start() {}
