import config from "configs/app.config.json";
import axios, { AxiosResponse } from "axios";

export const getTemperatureFromOpenWeatherMap: () => Promise<
  AxiosResponse<any, any>
> = async () => {
  try {
    return (await axios.get(
      config.services.openWeatherMapUrl
    )) as AxiosResponse<any, any>;
  } catch (error) {
    return error as AxiosResponse<any, any>;
  }
};
