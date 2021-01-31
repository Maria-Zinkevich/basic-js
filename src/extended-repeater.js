const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	str = String(str);
	
	let additionArr = [],
		additionStr= '',
		additionRepeatTimes = 1,
		separator = '+',
		additionSeparator = '',
		repeatTimes = 1;

	if (options !== undefined && options.addition !== undefined) {
		additionStr = String(options.addition);
	}

	if (options !== undefined && options.additionRepeatTimes !== undefined) {
		additionRepeatTimes = options.additionRepeatTimes;
	}

	if (options !== undefined && options.separator !== undefined) {
		separator = options.separator;
	}

	if (options !== undefined && options.additionSeparator !== undefined) {
		additionSeparator = options.additionSeparator;
	}

	if (options !== undefined && options.repeatTimes !== undefined) {
		repeatTimes = options.repeatTimes;
	}

	for (let i = 0; i < additionRepeatTimes; i++) {
		additionArr.push(additionStr);
	}

	additionStr = additionArr.join(additionSeparator);

	str = str + additionStr;

	strArray = [];

	for (let i = 0; i < repeatTimes; i++) {
		strArray.push(str);
	}

	return strArray.join(separator)
};
	