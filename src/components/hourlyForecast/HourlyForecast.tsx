import "./HourlyForecast.scss";
import React, { useEffect, useRef, useState } from "react";
// error boundary
// components
import WeatherCard from "components/weatherCard/WeatherCard";
// utils, helpers & handlers
import { flickerOtherCards } from "helpers/cardDomHandler";
// enums, interfaces & types
// store
import { useSelector } from "react-redux";
import {
  selectedCardDtSelector,
  weatherDictionarySelector,
} from "redux/selectors/weatherSelector";
import useNextPreviousCard from "hooks/useNextPreviousCard";
import useMouseDragScroll from "hooks/useMouseDragScroll";
import { acceptableKeyCodesEnum } from "enums";

const HourlyForecast: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const selectedCardDt = useSelector(selectedCardDtSelector);
  const [keyCode, setkeyCode] = useState<string>("");
  const weatherDictionary = useSelector(weatherDictionarySelector);
  const keys = Object.keys(weatherDictionary);

  const { handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove } =
    useMouseDragScroll(scrollContainerRef);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      0,
      Object.keys(weatherDictionary).length
    );
  }, [weatherDictionary]);

  useNextPreviousCard(
    keyCode,
    setkeyCode,
    keys,
    selectedCardDt,
    weatherDictionary,
    [acceptableKeyCodesEnum.SPACE, acceptableKeyCodesEnum.ARROWRIGHT],
    [acceptableKeyCodesEnum.ARROWLEFT]
  );

  const handleFlickerOtherCards = () => {
    const nonActiveCards: HTMLDivElement[] = itemsRef.current.filter(
      (c) => !c.classList.contains("active")
    );
    if (nonActiveCards?.length) {
      flickerOtherCards(nonActiveCards);
    }
  };

  return (
    <div
      className="scroll-container"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {weatherDictionary &&
        Object.keys(weatherDictionary).map((dt, i) => {
          const weatherHour = weatherDictionary[dt];

          return (
            <div className="item" key={i}>
              <WeatherCard
                id={weatherHour.dt?.toString()}
                weatherHour={weatherHour}
                isActive={
                  selectedCardDt.toString() === dt.toString() ? true : false
                }
                ref={(wC: HTMLDivElement) => (itemsRef.current[i] = wC)}
                handleFlickerOtherCards={handleFlickerOtherCards}
              />
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(HourlyForecast);
