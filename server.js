//import tools
const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 	Connect to database
////

const db = mysql.createConnection(
	{
		host: "localhost",
		// MySQL username,
		user: "root",
		// MySQL password
		password: "",
		database: "employee_db",
	},
	console.log(`Connected to the employee_db database.`)
);
// Default response for any other request (Not Found)
app.use((req, res) => {
	res.status(404).end();
});
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////
//	Call Prompt
/////

const promptUser = () => {
	return inquirer
		.prompt([
			{
				name: "menu",
				type: "list",
				message: "Welcome to Employee-Tracker",
				choices: [
					"View all departments",
					"View all roles",
					"View all employees",
					"Add a department",
					"Add a role",
					"Add an employee",
					"Update employee role",
					"EXIT",
				],
			},
		])
		.then((response) => {
			switch (response.menu) {
				case "View all departments":
					showAllDepartments();
					break;
				case "View all roles":
					showAllRoles();
					break;
				case "View all employees":
					showAllEmployees();
					break;
				case "Add a department":
					addDepartment();
					break;
				case "Add a role":
					addRole();
					break;
				case "Add an employee":
					addEmployee();
					break;
				case "Update employee role":
					updateEmployeeRole();
					break;
				case "EXIT":
					console.log(
						"exiting Employee-Tracker..."
					);
					process.exit();
			}
		});
};

promptUser();

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//	Node Query Connections
///////

//view all
async function showAllDepartments() {
	db.query("SELECT * FROM departments", function (err, results) {
		console.table(results);
	});

	promptUser();
}
async function showAllRoles() {
	db.query("SELECT * FROM roles", function (err, results) {
		console.table(results);
	});
	promptUser();
}
async function showAllEmployees() {
	db.query("SELECT * FROM employees", function (err, results) {
		console.table(results);
	});
	promptUser();
}

/////////
//add
async function addDepartment() {
	console.table("test response");
	promptUser();
}

//////////
//update
async function updateEmployeeRole() {
	console.table("test response");
	promptUser();
}
