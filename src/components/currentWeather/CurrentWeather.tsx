import "./CurrentWeather.scss";
import { ReactComponent as SunnyWeather } from "assets/images/weather-sun.svg";
import { ReactComponent as CloudyWeather } from "assets/images/weather-cloud.svg";
import { ReactComponent as RainyWeather } from "assets/images/weather-rain.svg";
import { useSelector } from "react-redux";
// store
import {
  weatherDictionarySelector,
  selectedCardDtSelector,
} from "redux/selectors/weatherSelector";
import { cityListSelector } from "redux/selectors/citySelector";
// enums, interfaces & types
import { weatherCondition } from "enums";

const CurrentWeather: React.FC = () => {
  const weatherDictionary = useSelector(weatherDictionarySelector);
  const selectedCardDt = useSelector(selectedCardDtSelector);
  const city = useSelector(cityListSelector);

  const selectedWeather = weatherDictionary?.[selectedCardDt];

  return (
    <div className="current-weather-container">
      <div className="current-weather-container__gap"></div>
      <div className="current-weather-container__icon-container">
        {selectedWeather.condition === weatherCondition.CLEAR ? (
          <SunnyWeather className="current-weather-container__icon" />
        ) : selectedWeather.condition === weatherCondition.RAIN ? (
          <RainyWeather className="current-weather-container__icon" />
        ) : (
          <CloudyWeather className="current-weather-container__icon" />
        )}
      </div>
      <div className="current-weather-container__gap"></div>
      <div className="current-weather-container__temperature">
        <h3 className="current-weather-container__condition">
          {selectedWeather?.condition}
        </h3>
        <h3 className="current-weather-container__max-min">{`${selectedWeather?.tempMax}° /${selectedWeather?.tempMin}°`}</h3>
        <h3 className="current-weather-container__current">{`${selectedWeather?.temp}°`}</h3>
      </div>
      <div className="current-weather-container__gap"></div>
      <div className="current-weather-container__info">
        <h3 className="current-weather-container__city">{city.name}</h3>
        <div className="current-weather-container__date">
          <h3 className="current-weather-container__info__date__day-name">
            {selectedWeather?.dayName}
          </h3>
          <h3 className="current-weather-container__info__date__day">{`${selectedWeather?.date}. ${selectedWeather?.month}`}</h3>
        </div>
      </div>
      <div className="current-weather-container__gap"></div>
    </div>
  );
};

export default CurrentWeather;
