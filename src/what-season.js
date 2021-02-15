const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!'
    }
 
    if (typeof date !== typeof new Date()) {
        throw Error ('Incorrect date')
    } 

    let numMonth = Date.prototype.getMonth.call(date);
    let strMonth = '';
  
    switch(String(numMonth)) {
        case '0': 
        case '1':  
        case '11': 
            strMonth = 'winter';
            break;
        case '2': 
        case '3':  
        case '4': 
            strMonth = 'spring';
            break;
        case '5': 
        case '6':  
        case '7': 
            strMonth = 'summer';
            break;
        case '8': 
        case '9':  
        case '10': 
            strMonth = 'autumn';
            break;
        default:
            strMonth = 'Unable to determine the time of year!';
            break;
    }
    return strMonth
};
