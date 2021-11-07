import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemperature } from "redux/actions/weatherActions";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
// components
import CurrentWeather from "components/currentWeather/CurrentWeather";
import HourlyForecast from "components/hourlyForecast/HourlyForecast";
import LoadingHero from "components/loadingHero/LoadingHero";
import LoadingFail from "components/loadingFail/LoadingFail";
import FallbackImage from "components/fallback/Fallback";
// store
import { useSelector } from "react-redux";
import { statusListSelector } from "redux/selectors/statusSelector";
import { getTemperature } from "redux/actions/weatherActions";
// utils, helpers & handlers
// enums, interfaces & types
import { statusEnum } from "enums";

function App() {
  const dispatch = useDispatch();

  const status = useSelector(statusListSelector);

  useEffect(() => {
    dispatch(getTemperature());
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <ErrorBoundary FallbackComponent={FallbackImage}>
        {status === statusEnum.LOADING ? (
          <LoadingHero />
        ) : status === statusEnum.SUCCESS ? (
          <main>
            <CurrentWeather />
            <HourlyForecast />
          </main>
        ) : (
          <LoadingFail />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
