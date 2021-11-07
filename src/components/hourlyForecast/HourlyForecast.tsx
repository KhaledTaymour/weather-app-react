import "./HourlyForecast.scss";
import React, { useEffect, useRef, useState } from "react";
// error boundary
import { useErrorHandler } from "react-error-boundary";
// components
import WeatherCard from "components/weatherCard/WeatherCard";
// utils, helpers & handlers
import { flickerOtherCards, setActiveCard } from "helpers/cardDomHandler";
// enums, interfaces & types
import { acceptableKeyCodesEnum } from "enums";
// store
import { useDispatch, useSelector } from "react-redux";
import {
  selectedCardDtSelector,
  weatherDictionarySelector,
} from "redux/selectors/weatherSelector";
import { setIsCardSelected } from "redux/actions/weatherActions";

const HourlyForecast: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const handleError = useErrorHandler();
  const selectedCardDt = useSelector(selectedCardDtSelector);
  const [keyCode, setkeyCode] = useState<string>("");
  const weatherDictionary = useSelector(weatherDictionarySelector);
  const keys = Object.keys(weatherDictionary);

  let startX: number;
  let scrollLeft: number;
  let isDown: boolean;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      isDown = true;

      startX = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft = scrollContainerRef.current.scrollLeft;
    }
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    isDown = false;
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    isDown = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDown) {
      e.preventDefault();
      if (scrollContainerRef.current) {
        // Move Left
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        // const walkX = (x - startX) * 5;
        const walkX = x - startX;
        scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
      }
    }
  };

  useEffect(() => {
    // Disable arrow key scrolling
    window.addEventListener(
      "keydown",
      (e) => {
        if (
          [
            acceptableKeyCodesEnum.SPACE,
            acceptableKeyCodesEnum.ARROWUP,
            acceptableKeyCodesEnum.ARROWDOWN,
            acceptableKeyCodesEnum.ARROWLEFT,
            acceptableKeyCodesEnum.ARROWRIGHT,
          ].indexOf(e.code as acceptableKeyCodesEnum) > -1
        ) {
          e.preventDefault();

          if (
            e.code === acceptableKeyCodesEnum.SPACE ||
            e.code === acceptableKeyCodesEnum.ARROWLEFT ||
            e.code === acceptableKeyCodesEnum.ARROWRIGHT
          ) {
            setkeyCode(e.code);
          }
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    if (keyCode !== "") {
      let newSelectedItem;
      if (
        keyCode === acceptableKeyCodesEnum.SPACE ||
        keyCode === acceptableKeyCodesEnum.ARROWRIGHT
      ) {
        let nextIndex = keys.indexOf(`${selectedCardDt}`) + 1;
        let nextKey = keys[nextIndex];
        let nextItem = weatherDictionary[nextKey];
        newSelectedItem = nextItem;
      } else {
        let previousIndex = keys.indexOf(`${selectedCardDt}`) - 1;
        let previousKey = keys[previousIndex];
        let previousItem = weatherDictionary[previousKey];
        newSelectedItem = previousItem;
      }

      if (newSelectedItem) {
        const card = document.querySelector(
          `[id='${newSelectedItem.dt}']`
        ) as HTMLDivElement;
        const allOtherCards = document.querySelectorAll(".card:not(.active)");
        const allCards: NodeListOf<Element> =
          document.querySelectorAll(".card");

        try {
          flickerOtherCards(card, allOtherCards);
          setActiveCard(card, allCards);
        } catch (error) {
          handleError(error);
        }

        if (!newSelectedItem.isSelected) {
          dispatch(setIsCardSelected(newSelectedItem.dt));
        }
      }
      setkeyCode("");
    }
  }, [keyCode]);

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
              />
            </div>
          );
        })}
    </div>
  );
};

export default HourlyForecast;
