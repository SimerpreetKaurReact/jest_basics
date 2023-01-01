import { describe, it, expect, beforeEach, vi } from "vitest";
import { extractPostData } from "./posts";
// we only want if we are able to extract form data inside of our function
// with the help of that get method
const testTitle = "Test title";
const testContent = "Test content";

let testFormData;
describe("extractPostData()", () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });
  it("should extract title and content from the provided form data", () => {
    const data = extractPostData(testFormData);
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
