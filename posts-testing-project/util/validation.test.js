import { describe, it, expect, vi } from "vitest";
import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";
  const validationFunc = () => {
    validateNotEmpty(testInput);
  };
  expect(validationFunc).toThrow();
});
it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";
  const validationFunc = () => {
    validateNotEmpty(testInput);
  };
  expect(validationFunc).toThrow();
});
it("should throw an error with provided error message", () => {
  const testInput = "";
  const testErrorMessage = "Test";
  const validationFunc = () => {
    validateNotEmpty(testInput, testErrorMessage);
  };
  expect(validationFunc).toThrow(testErrorMessage);
});
