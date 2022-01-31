const showAllRoles = () => {
	db.query("SELECT * FROM role_title", function (err, results) {
		console.table({
			results,
		});
	});
};

module.exports = showAllRoles;
