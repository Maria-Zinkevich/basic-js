const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        let temporaryDepth = this.calculateDepth(item);
        if (temporaryDepth >= depth) {
          depth = temporaryDepth + 1;
        }
      }
    }
  
    return depth
  }
}