const inquirer = require("inquirer");
const fs = require("fs");

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
	return inquirer.prompt([
		{
			type: "list",
			message: "What would you like to do?",
			name: "choices",
			choices: [
				"view all departments",
				"view all roles",
				"view all employees",
				"add a department",
				"add a role",
				"add an employee",
				"update employee role",
			],
		},
	]);
};

promptUser();
