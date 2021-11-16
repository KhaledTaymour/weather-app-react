import { useEffect, useState } from "react";
import { acceptableKeyCodesEnum } from "enums";
import { setIsCardSelected } from "redux/actions/weatherActions";
import { weatherDictionaryInterface } from "interfaces/weatherInterface";
import { useDispatch } from "react-redux";
import weatherHourInterface from "interfaces/weatherHourInterface";

/**
 * Used to Navigate through the cards using the keyboard
 * @param keyCode
 * @param setkeyCode
 * @param keys
 * @param selectedCardDt
 * @param weatherDictionary
 */
export default function useNextPreviousCard(
  keyCode: string,
  setkeyCode: (code: string) => void,
  keys: string[],
  selectedCardDt: number,
  weatherDictionary: weatherDictionaryInterface,
  goToNextKeys: string[],
  goToPreviousKeys: string[]
) {
  const dispatch = useDispatch();

  const [newSelectedItem, setNewSelectedItem] =
    useState<weatherHourInterface>();

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

          if (goToNextKeys.concat(goToPreviousKeys).includes(e.code)) {
            setkeyCode(e.code);
          }
        }
      },
      false
    );
  }, []);

  // To set New Selected Item
  useEffect(() => {
    if (keyCode !== "") {
      if (goToNextKeys.includes(keyCode)) {
        let nextIndex = keys.indexOf(selectedCardDt.toString()) + 1;
        let nextKey = keys[nextIndex];
        let nextItem = weatherDictionary[nextKey];
        setNewSelectedItem(nextItem);
      } else if (goToPreviousKeys.includes(keyCode)) {
        let previousIndex = keys.indexOf(selectedCardDt.toString()) - 1;
        let previousKey = keys[previousIndex];
        let previousItem = weatherDictionary[previousKey];
        setNewSelectedItem(previousItem);
      }

      setkeyCode("");
    }
  }, [keyCode]);

  useEffect(() => {
    if (newSelectedItem) {
      dispatch(setIsCardSelected(newSelectedItem.dt));
    }
  }, [newSelectedItem]);
}
