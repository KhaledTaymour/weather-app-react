import {
  prepareTimeObject,
  preparedTimeObjectInterface,
} from "./timeObjectCreator";

describe("dateTimeConverter", () => {
  test("prepareTimeObject to return object of hours, dayName, date, and month", () => {
    const preparedTimeObject: preparedTimeObjectInterface = {
      hours: 14,
      dayName: "Thursday",
      date: 16,
      month: "February",
    };

    expect(prepareTimeObject(1487246400)).toMatchObject(preparedTimeObject);
  });
});
