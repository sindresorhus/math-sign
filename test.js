const test = require("ava");
const numberIsNan = require("number-is-nan");

Math.sign = undefined;
const fn = require("./");

test("Testing Math Sign", t => {
	t.is(fn(0), 0);
	t.is(fn(100.1), 1);
	t.is(fn(-0), -0);
	t.is(fn(5), 1);
	t.is(fn(-5), -1);
	t.is(fn("-5"), -1);
	t.true(numberIsNan(fn(NaN)));
	t.true(numberIsNan(fn("foo")));
	t.true(numberIsNan(fn()));
	t.true(numberIsNan(fn([1, 1])));
	t.is(String(1 / fn(0)), "Infinity");
	t.is(String(1 / fn(-0)), "-Infinity");
	t.is(fn([-100.1]), -1);
	t.is(fn({ toString: () => "100" }), 1);
	t.is(fn({ toString: () => 100 }), 1);
	t.is(fn({ valueOf: () => -1.1 }), -1);
	t.is(fn({ valueOf: () => "-1.1" }), -1);
	t.is(fn(Infinity), 1);
	t.is(fn(-Infinity), -1);
	t.is(fn("Infinity"), 1);
	t.is(fn("-Infinity"), -1);
});
