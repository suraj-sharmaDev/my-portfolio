import { useEffect, useRef, useState } from "react";
import Game from "../lib/Game";

export default function useGameCanvas(ref) {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasInitialized = useRef(false);
  //   let gameObj = useRef(null).current;
  //   let ctx = useRef(null).current;

  useEffect(() => {
    if (ref.current == null || hasInitialized.current) return;
    hasInitialized.current = true;
    setIsLoaded(true);
    initializeCanvas();
  }, [ref]);

  const initializeCanvas = () => {
    fixDpi();
    const gameObj = new Game(ref.current.width, ref.current.height);
    const ctx = ref.current.getContext("2d");
    animate(gameObj, ctx);
  };

  const fixDpi = () => {
    const dpi = window.devicePixelRatio;
    const styles = window.getComputedStyle(ref.current);
    // create a style object that returns width and height
    const style = {
      height() {
        return +styles.height.slice(0, -2);
      },
      width() {
        return +styles.width.slice(0, -2);
      },
    };
    // set the correct canvas attributes for device dpi
    ref.current.setAttribute("width", (style.width() * dpi).toString());
    ref.current.setAttribute("height", (style.height() * dpi).toString());
  };

  function animate(gameObj, ctx) {
    ctx.clearRect(0, 0, ref.current.width, ref.current.height);
    gameObj.draw(ctx);
    gameObj.update();
    requestAnimationFrame(() => animate(gameObj, ctx));
  }

  return isLoaded;
}
