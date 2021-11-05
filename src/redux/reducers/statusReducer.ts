import { statusEnum } from "enums";
import { actionDispatchTypes } from "redux/actionTypes";

type statusType = statusEnum.LOADING | statusEnum.FAIL | statusEnum.SUCCESS;

const initialState: statusType = statusEnum.LOADING;

const statusReducer = (
  state: statusType = initialState,
  action: actionDispatchTypes
): statusType => {
  switch (action.type) {
    case statusEnum.LOADING:
      return statusEnum.LOADING;
    case statusEnum.FAIL:
      return statusEnum.FAIL;
    case statusEnum.SUCCESS:
      return statusEnum.SUCCESS;
    default:
      return state;
  }
};

export default statusReducer;
