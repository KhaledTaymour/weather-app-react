import { RootState } from "redux/reducers/rootReducer";

export const statusListSelector = (state: RootState) => state.status;

export default statusListSelector;
