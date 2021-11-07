import React from "react";
import "./WeatherCard.scss";
import { ReactComponent as SunnyWeather } from "assets/images/weather-sun.svg";
import { ReactComponent as CloudyWeather } from "assets/images/weather-cloud.svg";
import { ReactComponent as RainyWeather } from "assets/images/weather-rain.svg";
// enums, interfaces & types
import weatherHourInterface from "interfaces/weatherInterface";
import { weatherCondition } from "enums";
// utils, helpers & handlers
import { flickerOtherCards, setActiveCard } from "helpers/cardDomHandler";
import { useErrorHandler } from "react-error-boundary";
// store
import { useDispatch } from "react-redux";
import { setIsCardSelected } from "redux/actions/weatherActions";

interface Props {
  id: string;
  weatherHour: weatherHourInterface;
}

const WeatherCard: React.FC<Props> = ({ id, weatherHour }) => {
  const dispatch = useDispatch();
  const handleError = useErrorHandler();

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const card = event.currentTarget as HTMLDivElement;
    const allOtherCards = document.querySelectorAll(".card:not(.active)");
    const allCards: NodeListOf<Element> = document.querySelectorAll(".card");

    try {
      flickerOtherCards(card, allOtherCards);
      setActiveCard(card, allCards);
    } catch (error) {
      handleError(error);
    }

    if (!weatherHour.isSelected) {
      dispatch(setIsCardSelected(weatherHour.dt));
    }
  };

  return (
    <div
      id={id}
      className={`card${weatherHour.isSelected ? ` active` : ""}`}
      onClick={handleOnClick}
      data-testid="card"
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
};

export default WeatherCard;
