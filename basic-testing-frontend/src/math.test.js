const { add } = require("./math");

test("sum up all numbers ", () => {
  // Arrange
  const numbers = [1, 2];

  //Act
  const res = add(numbers);
  //Assert
  const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);
  expect(res).toBe(expectedResult);
});
it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 2];
  const result = add(inputs);
  expect(result).toBeNaN();
});
it("should yield correct sum if an arraty of numeric string values is provided", () => {
  const numbers = ["2", "3"];
  //Act
  const res = add(numbers);
  //Assert
  const expectedResult = numbers.reduce((prev, cur) => prev + Number(cur), 0);
  expect(res).toBe(expectedResult);
});
it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  //Act
  const res = add(numbers);
  //Assert
  expect(res).toBe(0);
});
it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});
it("should throw an error if provided with multiple arguments instead of an array", () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(TypeError);
  expect(resultFn).toThrow(/is not iterable/);
  //   expect(resultFn).toThrow();
});
