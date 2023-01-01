import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
  test("should convert string to number", () => {
    // Arrange
    const stringInput = "1";
    // Act
    const result = transformToNumber(stringInput);
    // Assert
    expect(result).toEqual(expect.any(Number));
  });
  test("should convert string to number", () => {
    // Arrange
    const stringInput = "1";
    // Act
    const result = transformToNumber(stringInput);
    // Assert
    expect(result).toBe(+stringInput);
  });
  test("should yield NaN for non transformable values", () => {
    // Arrange
    const input1 = "invlaid";
    const input2 = {};
    // Act
    const result = transformToNumber(input1);
    const result2 = transformToNumber(input2);

    // Assert
    expect(result).toBeNaN();
  });
});
describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string numbwe values is provided", () => {
    const numberValues = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toEqual(expect.any(Number));
  });
  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", "2"];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
