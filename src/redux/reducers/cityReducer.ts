import { fillDataEnum } from "enums";
import cityInterface from "interfaces/cityInterface";
import { actionDispactchTypes } from "redux/actionTypes";

const initialState: cityInterface = {
  name: "",
  coord: {
    lat: 52.52,
    lon: 13.4,
  },
};

const cityReducer = (
  state: cityInterface = initialState,
  action: actionDispactchTypes
): cityInterface => {
  switch (action.type) {
    case fillDataEnum.FILL_CITY:
      return action.payload;

    default:
      return state;
  }
};

export default cityReducer;
