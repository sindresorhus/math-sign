'use strict';
var test = require('ava');
Math.sign = undefined;
var mathSign = require('./');

test(function (t) {
	t.assert(mathSign(0) === 0);
	t.assert(mathSign(100.1) === 1);
	t.assert(mathSign(-0) === -0);
	t.assert(mathSign(5) === 1);
	t.assert(mathSign(-5) === -1);
	t.assert(mathSign('-5') === -1);
	t.assert(isNaN(mathSign(NaN)));
	t.assert(isNaN(mathSign('foo')));
	t.assert(isNaN(mathSign()));
	t.assert(isNaN([1, 1]));
	t.assert(String(1/mathSign(0)) === 'Infinity');
	t.assert(String(1/mathSign(-0)) === '-Infinity');
	t.assert(mathSign([-100.1]) === -1);
	t.assert(mathSign({toString: function () { return '100'; }}) === 1);
	t.assert(mathSign({toString: function () { return 100; }}) === 1);
	t.assert(mathSign({valueOf: function () { return -1.1; }}) === -1);
	t.assert(mathSign({valueOf: function () { return '-1.1'; }}) === -1);
	t.assert(mathSign(Infinity) === 1);
	t.assert(mathSign(-Infinity) === -1);
	t.assert(mathSign('Infinity') === 1);
	t.assert(mathSign('-Infinity') === -1);
	t.end();
});
