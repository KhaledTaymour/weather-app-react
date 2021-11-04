import { Dispatch } from "redux";
import { actionDispactchTypes } from "redux/actionTypes";
import axios from "axios";
import config from "configs/app.config.json";
import { fillDataEnum, statusEnum } from "enums";
import cityInterface from "interfaces/cityInterface";
import { prepareTimeObject } from "utils/dateTimeConverter";
import { prepareTemperatureObject } from "utils/temperatureUnitConverter";
import weatherHourInterface from "interfaces/weatherHourInterface";

const prepareHourTempObject = (hourTemp: any) => {
  const tempObject = prepareTemperatureObject(hourTemp.main);
  const timeObject = prepareTimeObject(hourTemp.dt);

  return {
    dt: hourTemp.dt,
    ...timeObject,
    ...tempObject,
    condition: hourTemp.weather[0].main,
  };
};

export const getTemperature =
  () => async (dispatch: Dispatch<actionDispactchTypes>) => {
    try {
      // status - LOADING
      dispatch({
        type: statusEnum.LOADING,
      });

      try {
        const { data } = await axios.get(config.services.openWeatherMapUrl);

        // city
        const city: cityInterface = {
          name: data.city.name,
          coord: {
            lat: data.city.coord.lat,
            lon: data.city.coord.lon,
          },
        };
        dispatch({
          type: fillDataEnum.FILL_CITY,
          payload: city,
        });

        // weather list
        const tempList: weatherHourInterface[] = data.list.map(
          (hourTemp: weatherHourInterface) => prepareHourTempObject(hourTemp)
        );
        dispatch({
          type: fillDataEnum.FILL_TEMP,
          payload: tempList,
        });

        // status - SUCCESS
        dispatch({
          type: statusEnum.SUCCESS,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: statusEnum.FAIL,
        });
      }
    } catch (e) {}
  };
