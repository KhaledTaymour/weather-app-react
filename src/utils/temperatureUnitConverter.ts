export const convertTemperatureFromKelvinToCelsius = (k: number): string => {
  return Math.round(k - 273.15) + "";
};

export interface preparedTemperatureObjectInterface {
  temp: string;
  tempMax: string;
  tempMin: string;
}

export const prepareTemperatureObject = (
  hourTempMain: any
): preparedTemperatureObjectInterface => {
  return {
    temp: convertTemperatureFromKelvinToCelsius(hourTempMain?.temp),
    tempMax: convertTemperatureFromKelvinToCelsius(hourTempMain?.temp_max),
    tempMin: convertTemperatureFromKelvinToCelsius(hourTempMain?.temp_min),
  };
};
