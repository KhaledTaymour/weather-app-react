import { statusEnum, fillDataEnum } from "enums";
import cityInterface from "interfaces/cityInterface";
import { weatherDictionaryInterface } from "interfaces/weatherInterface";

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
  payload: {
    weatherDictionary: weatherDictionaryInterface;
    selectedCardDt: number;
  };
}

interface fillCityActionType {
  type: fillDataEnum.FILL_CITY;
  payload: cityInterface;
}

interface changeSelectedCardType {
  type: fillDataEnum.CHANGE_SELECTED_CARD;
  payload: { dt: number; isSelected: boolean };
}

export type actionDispatchTypes =
  | statusLoadingActionType
  | statusFailActionType
  | statusSuccessActionType
  | fillWeatherActionType
  | fillCityActionType
  | changeSelectedCardType;
