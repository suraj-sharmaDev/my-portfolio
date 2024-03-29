import { Background } from "./Background";
import InputHandler from "./InputHandler";
import Player from "./Player";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.groundMargin = 50;
    this.speed = 3;
    this.background = new Background(this);
    this.player = new Player(this);
    this.input = new InputHandler();
  }
  update() {
    this.background.update();
    this.player.update(this.input.keys);
  }
  draw(context) {
    this.background.draw(context);
    this.player.draw(context);
  }
}
