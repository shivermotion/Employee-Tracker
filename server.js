//import tools/components/functions
const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const { db } = require("./config/connection");
//function components
const showAllDepartments = require("./functions/showDepts");
const showAllRoles = require("./functions/showAllRoles");
const showAllEmployees = require("./functions/showAllEmployees");
const addDepartment = require("./functions/addDepartment");
const addRole = require("./functions/addRole");
const addEmployee = require("./functions/addEmployee");
const updateEmployeeRole = require("./functions/updateEmployeeRole");

// Call Prompt
const promptUser = () => {
	return inquirer
		.prompt([
			{
				name: "menuChoices",
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
			switch (response.menuChoices) {
				case "View all departments":
					showAllDepartments();
					break;
				case "View all roles":
					//showAllRoles()
					break;
				case "View all employees":
					//showAllEmployees()
					break;
				case "Add a department":
					//addDepartment()
					break;
				case "Add a role":
					//addRole()
					break;
				case "Add an employee":
					//addEmployee()
					break;
				case "Update employee role":
					//updateEmployeeRole()
					break;
				case "EXIT":
					process.exit();
			}
		});
};

promptUser();
