import { fillDataEnum } from "enums";
import cityInterface from "interfaces/cityInterface";
import { actionDispatchTypes } from "redux/actionTypes";

const initialState: cityInterface = {
  name: "",
  coord: {
    lat: 52.52,
    lon: 13.4,
  },
};

const cityReducer = (
  state: cityInterface = initialState,
  action: actionDispatchTypes
): cityInterface => {
  switch (action.type) {
    case fillDataEnum.FILL_CITY:
      return action.payload;

    default:
      return state;
  }
};

export default cityReducer;
