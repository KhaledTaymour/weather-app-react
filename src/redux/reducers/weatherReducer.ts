import { fillDataEnum } from "enums";
import weatherHourInterface from "interfaces/weatherHourInterface";
import { actionDispatchTypes } from "redux/actionTypes";

const initialState: weatherHourInterface[] = [];

const weatherReducer = (
  state: weatherHourInterface[] = initialState,
  action: actionDispatchTypes
): weatherHourInterface[] => {
  switch (action.type) {
    case fillDataEnum.FILL_TEMP:
      return action.payload;

    default:
      return state;
  }
};

export default weatherReducer;
