import { RootState } from "redux/reducers/rootReducer";

export const weatherDictionarySelector = (state: RootState) =>
  state.weather.weatherDictionary;

export const selectedCardDtSelector = (state: RootState) =>
  state.weather.selectedCardDt;
