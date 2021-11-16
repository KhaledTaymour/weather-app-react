import { useRef } from "react";

/**
 * Giving the ability to scroll through the cards by click and drag with the mouse
 * @param scrollContainerRef The cards container
 * @returns functions handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove
 */
export default function useMouseScroll(
  scrollContainerRef: React.RefObject<HTMLElement>
) {
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);
  const isDown = useRef<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      isDown.current = true;

      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    }
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    isDown.current = false;
  };
  const handleMouseLeave = (e: React.MouseEvent) => {
    isDown.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDown.current) {
      e.preventDefault();
      if (scrollContainerRef.current) {
        // Move Left
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        // const walkX = (x - startX) * 5;
        const walkX = x - startX.current;
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walkX;
      }
    }
  };

  return { handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseMove };
}
