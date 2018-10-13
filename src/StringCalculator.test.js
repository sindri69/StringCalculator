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

test("Testing unknown number of args", () => {

	expect(StringCalculator.Add("10,10,10,10,10")).toBe(50);
});

test("Testing new lines between numbers", () => {

	expect(StringCalculator.Add("1\n2,3")).toBe(6);
});

it("should throw exception for negative inputs", () => {
	expect(StringCalculator.Add("2,-4,3,-5")).toBe("Negatives not allowed: -4,-5");
});

test("Testing numbers larger than 1000", () => {

	expect(StringCalculator.Add("3,1001")).toBe(3);
});

it("Testing custom delimiter", () => {
	expect(StringCalculator.Add("//;\n1;2")).toBe(3);
});