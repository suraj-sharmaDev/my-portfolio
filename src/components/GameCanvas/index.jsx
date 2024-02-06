import { useRef } from "react";
import PopupInfo from "../PopupInfo";
import useGameCanvas from "../../hooks/useGameCanvas";
import "./styles.css";
import { playerImage } from "../../constants/gameImages";

export default function GameCanvas() {
  const canvasRef = useRef(null);
  const isCanvasLoaded = useGameCanvas(canvasRef);

  return (
    <section className="w-full h-full relative" id="home">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <PopupInfo />
      </div>
      <canvas ref={canvasRef} className="gameCanvas" />
      {playerImage.getAllImages().map((img) => (
        <img
          src={img}
          key={img}
          id={img}
          className="hiddenImage"
          loading="lazy"
        />
      ))}
    </section>
  );
}
