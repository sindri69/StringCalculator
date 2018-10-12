// StringCalculator.test.js

const StringCalculator = require('./StringCalculator');

test("Testing empty string", () => {
	
  expect(StringCalculator.Add("")).toBe(0);
});

test("Testing one number", () => {

	expect(StringCalculator.Add("5")).toBe(5);
});

test("Testing two numbers", () => {
	
	expect(StringCalculator.Add("10,10")).toBe(20);
});