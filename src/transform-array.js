const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error ()
    }

    let resultArray = [...arr];
    let ind = 0;

    for (let item = 0; item < arr.length; item++) {
        if (arr[item] === '--double-next') {
            ind = item;
            resultArray.splice(ind, 1, arr[ind+1]);
        } else if (arr[item] === '--double-prev') {
            ind = item;
            resultArray.splice(ind, 1, resultArray[ind-1]);
        } else if (arr[item] === '--discard-next') {
            if (item < arr.length) {
                ind = item+1;
                resultArray.splice(ind, 1, null);
            }
		
        } else if (arr[item] === '--discard-prev') {
            if (item > 0) {
                ind = item-1;
                resultArray.splice(ind, 1, null);
            }
		
        } 
    }
	
    return resultArray.filter(item => item !== null && item !== undefined  && item !== '--discard-prev' && item !== '--discard-next' && item !== '--double-next' && item !== '--double-prev')
};
