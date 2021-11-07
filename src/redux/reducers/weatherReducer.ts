import { fillDataEnum } from "enums";
import { weatherReducerInterface } from "interfaces/weatherInterface";
import { actionDispatchTypes } from "redux/actionTypes";

const initialState: weatherReducerInterface = {
  weatherDictionary: {},
  selectedCardDt: 0,
};

const weatherReducer = (
  state: weatherReducerInterface = initialState,
  action: actionDispatchTypes
): weatherReducerInterface => {
  switch (action.type) {
    case fillDataEnum.FILL_TEMP:
      return {
        weatherDictionary: action.payload.weatherDictionary,
        selectedCardDt: action.payload.selectedCardDt,
      };
    case fillDataEnum.CHANGE_SELECTED_CARD:
      return {
        ...state,
        selectedCardDt: action.payload.dt,
        weatherDictionary: {
          ...state.weatherDictionary,
          [state.selectedCardDt]: {
            ...state.weatherDictionary[state.selectedCardDt],
            isSelected: false,
          },
          [action.payload.dt]: {
            ...state.weatherDictionary[action.payload.dt],
            isSelected: true,
          },
        },
      };
    default:
      return state;
  }
};

export default weatherReducer;
