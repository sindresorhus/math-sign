'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Math.sign || function (x) {
	x = Number(x);

	if (x === 0 || numberIsNan(x)) {
		return x;
	}

	return x > 0 ? 1 : -1;
};
