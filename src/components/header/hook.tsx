import { useState, useRef, useEffect } from "react";

export const useHideOnScroll = () => {
    const [isHidden, setIsHidden] = useState(false);
    const prevScrollY = useRef<number>();
  
    useEffect(() => {
      const onScroll = () => {
        const scrolledDown = window.scrollY > prevScrollY.current!;
        const scrolledUp = !scrolledDown;
  
        if (scrolledDown && !isHidden) {
          setIsHidden(true);
        } else if (scrolledUp && isHidden) {
          setIsHidden(false);
        }
  
        prevScrollY.current = window.scrollY;
      };
  
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, [isHidden]);
    return isHidden;
  };