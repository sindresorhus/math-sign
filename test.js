'use strict';
var test = require('ava');
var mathSign = require('./');

test(function (t) {
	t.assert(mathSign(0) === 0);
	t.assert(mathSign(-0) === -0);
	t.assert(mathSign(5) === 1);
	t.assert(mathSign(-5) === -1);
	t.assert(mathSign('-5') === -1);
	t.assert(String(mathSign(NaN)) === 'NaN');
	t.assert(String(mathSign('foo')) === 'NaN');
	t.assert(String(mathSign()) === 'NaN');
	t.end();
});
