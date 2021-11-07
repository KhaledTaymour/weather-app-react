import { RootState } from "redux/reducers/rootReducer";

export const cityListSelector = (state: RootState) => state.city;

export default cityListSelector;
