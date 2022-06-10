const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "employees_db",
});

const query = util.promisify(connection.query).bind(connection);

const exampleQuery = async () => {
  const response = await query("SELECT * FROM department");
  console.table(response);
};

function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View all Employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
      ],
      name: "startSelect",
    },
  ]);
}

start();
