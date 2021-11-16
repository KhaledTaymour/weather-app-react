import React, { MutableRefObject, useRef } from "react";
import "./WeatherCard.scss";
import { ReactComponent as SunnyWeather } from "assets/images/weather-sun.svg";
import { ReactComponent as CloudyWeather } from "assets/images/weather-cloud.svg";
import { ReactComponent as RainyWeather } from "assets/images/weather-rain.svg";
// enums, interfaces & types
import weatherHourInterface from "interfaces/weatherInterface";
import { weatherCondition } from "enums";
// utils, helpers & handlers
import { useErrorHandler } from "react-error-boundary";
// store
import { useDispatch } from "react-redux";
import { setIsCardSelected } from "redux/actions/weatherActions";

export interface Props {
  id: string;
  weatherHour: weatherHourInterface;
  isActive: boolean;
  handleFlickerOtherCards: () => void;
  ref: any;
}

const WeatherCard: React.FC<Props> = React.forwardRef<HTMLDivElement, Props>(
  ({ id, weatherHour, isActive, handleFlickerOtherCards }, ref) => {
    const dispatch = useDispatch();
    const handleError = useErrorHandler();

    const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!weatherHour.isSelected) {
        dispatch(setIsCardSelected(weatherHour.dt));
      } else {
        try {
          handleFlickerOtherCards();
        } catch (error) {
          handleError(error);
        }
      }
    };

    return (
      <div
        id={id}
        className={`card${isActive ? ` active` : ""}`}
        onClick={handleOnClick}
        aria-label="button"
        role="button"
        data-testid="card"
        ref={ref}
      >
        <div className="card__cover"></div>
        <h2 className="card__hour">{`${weatherHour.hours}:00`}</h2>
        <div className="card__condition">
          {weatherHour.condition === weatherCondition.CLEAR ? (
            <SunnyWeather className="card__svg" />
          ) : weatherHour.condition === weatherCondition.RAIN ? (
            <RainyWeather className="card__svg" />
          ) : (
            <CloudyWeather className="card__svg" />
          )}
        </div>
        <h2 className="card__temperature">{`${weatherHour.temp}°`}</h2>
      </div>
    );
  }
);

export default WeatherCard;
