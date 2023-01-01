import { generateToken, generateTokenPromise } from "./async-example";
import { describe, it, test, expect } from "vitest";

test("should generate a token value", () =>
  new Promise((resolve, reject) => {
    const testUserEmail = "test@test.com";
    generateToken(testUserEmail, (err, token) => {
      try {
        //expect(token).toBe(2);
        expect(token).toBeDefined();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }));
it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});
it("should generate a token value", async () => {
  const testUserEmail = "test@test.com";
  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
  //expect(token).toBe(2);
});
// try {
//   expect(token).toBe(2);
//   done();
// } catch (err) {
//   done(err);
// }
