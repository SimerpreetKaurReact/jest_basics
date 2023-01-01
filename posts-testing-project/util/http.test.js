import { describe, it, expect, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponeData = { testKey: "testData" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testRespone = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponeData);
        });
      },
    };
    resolve(testRespone);
  });
});
vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = { key: "text" };
  expect(sendDataRequest(testData)).resolves.toEqual(testResponeData);
});

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = { key: "test" };
  //return expect(sendDataRequest(testData)).not.rejects.toBe("Not a string");

  let errorMessage;
  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }
  expect(errorMessage).not.toBe("Not a string");
});

it("should throw an HttpError in case of a non ok response", async () => {
  const testData = { key: "test" };

  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testRespone = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponeData);
          });
        },
      };
      resolve(testRespone);
    });
  });

  expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
