import { getCurrentHour } from "./time";

describe("test get time utils", () => {
  test("should return a type number", () => {
    expect(typeof getCurrentHour()).toBe("number");
  });

  test("should return a number between 0 and 24", () => {
    expect(getCurrentHour()).toBeGreaterThanOrEqual(0);
    expect(getCurrentHour()).toBeLessThanOrEqual(24);
  });
});
