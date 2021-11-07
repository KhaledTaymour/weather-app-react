import {
  convertTemperatureFromKelvinToCelsius,
  preparedTemperatureObjectInterface,
  prepareTemperatureObject,
} from "./temperatureUnitConverter";

describe("temperatureUnitConverter", () => {
  test("convertTemperatureFromKelvinToCelsius should convert to celsius correctly", () => {
    expect(convertTemperatureFromKelvinToCelsius(284)).toEqual("11");
  });

  test("convertTemperatureFromKelvinToCelsius should not return -0", () => {
    expect(convertTemperatureFromKelvinToCelsius(273)).not.toEqual("-0");
    expect(convertTemperatureFromKelvinToCelsius(273)).toEqual("0");
  });

  test("prepareTemperatureObject should return object of temp, tempMax, and tempMin", () => {
    const input = {
      temp: 280,
      temp_max: 284,
      temp_min: 274,
    };

    const preparedTemperatureObject: preparedTemperatureObjectInterface = {
      temp: 7,
      tempMax: 11,
      tempMin: 1,
    };
    expect(prepareTemperatureObject(input)).toMatchObject(
      preparedTemperatureObject
    );
  });
});
