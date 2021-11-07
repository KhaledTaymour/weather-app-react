import { HourTempMainInterface } from "interfaces/weatherInterface";

export const convertTemperatureFromKelvinToCelsius = (k: number): string => {
  return Math.round(k - 273.15) + "";
};

export interface preparedTemperatureObjectInterface {
  temp: number;
  tempMax: number;
  tempMin: number;
}

export const prepareTemperatureObject = (
  hourTempMain: HourTempMainInterface
): preparedTemperatureObjectInterface => {
  return {
    temp: +convertTemperatureFromKelvinToCelsius(hourTempMain?.temp),
    tempMax: +convertTemperatureFromKelvinToCelsius(hourTempMain?.temp_max),
    tempMin: +convertTemperatureFromKelvinToCelsius(hourTempMain?.temp_min),
  };
};
