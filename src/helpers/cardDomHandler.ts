export const flickerOtherCards = (
  card: HTMLDivElement,
  allOtherCards: NodeListOf<Element>
): void => {
  if (card.classList.contains("active")) {
    allOtherCards.forEach((card: Element) => {
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
  }
};

export const setActiveCard = (
  card: HTMLDivElement,
  allCards: NodeListOf<Element>
): void => {
  allCards.forEach((card: Element) => {
    card.classList.remove("active");
  });
  (card as HTMLDivElement).classList.add("active");
};
