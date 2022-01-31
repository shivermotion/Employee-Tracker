//import tools/components/functions
const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const { db } = require("./config/connection");

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

async function showAllDepartments() {
	console.table("test response");
	promptUser();
}
async function showAllRoles() {
	console.table("test response");
	promptUser();
}
async function showAllEmployees() {
	console.table("test response");
	promptUser();
}
async function addDepartment() {
	console.table("test response");
	promptUser();
}
async function updateEmployeeRole() {
	console.table("test response");
	promptUser();
}
