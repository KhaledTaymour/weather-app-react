const convertTemperatureFromKelvinToCelsius = (k: number): number => {
  return +(k - 273.15).toFixed(0);
};

export const prepareTemperatureObject = (hourTempMain: any) => {
  return {
    temp: convertTemperatureFromKelvinToCelsius(hourTempMain.temp),
    tempMax: convertTemperatureFromKelvinToCelsius(hourTempMain.temp_max),
    tempMin: convertTemperatureFromKelvinToCelsius(hourTempMain.temp_min),
  };
};
