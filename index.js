'use strict';
module.exports = Math.sign || function (val) {
	val = Number(val);

	if (val === 0 || /* Number.isNaN() polyfill */ val !== val) {
		return val;
	}

	return val > 0 ? 1 : -1;
};
