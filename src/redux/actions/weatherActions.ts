import { Dispatch } from "redux";
import { actionDispatchTypes } from "redux/actionTypes";
import { fillDataEnum, statusEnum } from "enums";
import cityInterface from "interfaces/cityInterface";
import { prepareTimeObject } from "helpers/timeObjectCreator";
import { prepareTemperatureObject } from "utils/temperatureUnitConverter";
import { getTemperatureFromOpenWeatherMap } from "handlers/apiHandler";
import {
  HourTempInterface,
  weatherDictionaryInterface,
} from "interfaces/weatherInterface";

const prepareHourTempObject = (
  hourTemp: HourTempInterface,
  isSelected: boolean
) => {
  const tempObject = prepareTemperatureObject(hourTemp.main);
  const timeObject = prepareTimeObject(hourTemp.dt);

  return {
    dt: hourTemp.dt,
    ...timeObject,
    ...tempObject,
    condition: hourTemp.weather[0].main,
    isSelected,
  };
};

export const getTemperature =
  () => async (dispatch: Dispatch<actionDispatchTypes>) => {
    try {
      // status - LOADING
      dispatch({
        type: statusEnum.LOADING,
      });

      try {
        const { data } = await getTemperatureFromOpenWeatherMap();

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
        let selectedCardDt: number = 0;
        const weatherDictionary: weatherDictionaryInterface = data.list.reduce(
          (
            acc: weatherDictionaryInterface,
            hourTemp: HourTempInterface,
            i: number
          ) => {
            const formattedTemperatureObject = prepareHourTempObject(
              hourTemp,
              i === 0 ? true : false
            );
            if (i === 0) selectedCardDt = hourTemp.dt;
            return (acc[hourTemp.dt] = formattedTemperatureObject), acc;
          },
          {}
        );
        if (selectedCardDt) {
          dispatch({
            type: fillDataEnum.FILL_TEMP,
            payload: {
              weatherDictionary,
              selectedCardDt,
            },
          });
        }

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
    } catch (e) {
      console.log(e);
    }
  };

export const setIsCardSelected = (dt: number) => {
  return {
    type: fillDataEnum.CHANGE_SELECTED_CARD,
    payload: { dt },
  };
};
