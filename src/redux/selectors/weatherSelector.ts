import { RootState } from "redux/reducers/rootReducer";

export const weatherListSelector = (state: RootState) => state.weather;

export default weatherListSelector;
