import { combineReducers } from "redux";
import weather from "./weatherReducer";
import city from "./cityReducer";
import status from "./statusReducer";

const reducer = combineReducers({ weather, city, status });

export default reducer;

export type RootState = ReturnType<typeof reducer>;
