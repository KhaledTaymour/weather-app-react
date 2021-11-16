/**
 * Used to flicker cards other than the selected one; this happens only when you click on the currently selected card
 * @param nonActiveCards Other cards
 */
export const flickerOtherCards = (nonActiveCards: HTMLDivElement[]): void => {
  nonActiveCards.forEach((card: Element) => {
    if (card) {
      const cardCover = card.querySelector(".card__cover");
      if (cardCover) {
        cardCover.classList.add("show");

        setTimeout(() => {
          cardCover.classList.remove("show");
        }, 300);
      }
    }
  });
};
