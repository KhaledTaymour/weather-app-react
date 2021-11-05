import { statusEnum, fillDataEnum } from "enums";
import weatherHourInterface from "interfaces/weatherHourInterface";
import cityInterface from "interfaces/cityInterface";

interface statusLoadingActionType {
  type: statusEnum.LOADING;
}

interface statusFailActionType {
  type: statusEnum.FAIL;
}

interface statusSuccessActionType {
  type: statusEnum.SUCCESS;
}

interface fillWeatherActionType {
  type: fillDataEnum.FILL_TEMP;
  payload: weatherHourInterface[];
}

interface fillCityActionType {
  type: fillDataEnum.FILL_CITY;
  payload: cityInterface;
}

export type actionDispatchTypes =
  | statusLoadingActionType
  | statusFailActionType
  | statusSuccessActionType
  | fillWeatherActionType
  | fillCityActionType;
