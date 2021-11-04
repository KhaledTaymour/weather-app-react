import { fillDataEnum } from "enums";
import weatherHourInterface from "interfaces/weatherHourInterface";
import { actionDispactchTypes } from "redux/actionTypes";

const initialState: weatherHourInterface[] = [];

const weatherReducer = (
  state: weatherHourInterface[] = initialState,
  action: actionDispactchTypes
): weatherHourInterface[] => {
  switch (action.type) {
    case fillDataEnum.FILL_TEMP:
      return action.payload;

    default:
      return state;
  }
};

export default weatherReducer;
