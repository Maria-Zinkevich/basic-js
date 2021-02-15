const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let catArr = matrix.flat().filter(cat => cat === '^^');
    return catArr.length
};
