const inquirer = require("inquirer");

const showAllDepartments = () => {
	return inquirer
		.prompt([
			{
				name: "return",
				type: "list",
				message: "now what?",
				choices: ["Return to Menu"],
			},
		])
		.then((response) => {
			switch (response.return) {
				case "Return to Menu":
					break;
			}
		});
};

module.exports = showAllDepartments;
