import { describe, it, expect, vi } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError()", () => {
  it("should contain the provided status code, message,data", () => {
    const statusCode = 200;
    const message = "successful";
    const data = [1, 2, 3];
    const testError = new HttpError(statusCode, message, data);
    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBe(data);
  });
  it("should contain undefined as data, if no data is provided", () => {
    const statusCode = 404;
    const message = "error";

    const testError = new HttpError(statusCode, message);
    expect(testError.statusCode).toBe(statusCode);
    expect(testError.message).toBe(message);
    expect(testError.data).toBeUndefined();
  });
});
describe("class ValidationError()", () => {
  it("should contain the provided  message", () => {
    const message = "teset";

    const testError = new ValidationError(message);
    expect(testError.message).toBe(message);
  });
});
