const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsOfDisks = (2 ** disksNumber) - 1;
    let turnsSpeedInSec = Math.floor((3600 * turnsOfDisks) / turnsSpeed);
    return {turns: turnsOfDisks, seconds: turnsSpeedInSec}
};
