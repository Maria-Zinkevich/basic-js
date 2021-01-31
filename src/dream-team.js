const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false
  } else {
		return members.filter(str => typeof str === typeof '').map(i => i.trim().toUpperCase().charAt(0)).sort().join('')
  }
};
