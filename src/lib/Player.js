import { playerImage } from "../constants/gameImages";
import { Sitting, Running, Jumping, Falling } from "./PlayerState";

export default class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.vy = 0;
    this.playerWeight = 1;
    this.speed = 0;
    this.maxSpeed = 10;
    this.imgIndex = 0;
    this.maxImages;
    this.states = [
      new Sitting(this),
      new Running(this),
      new Jumping(this),
      new Falling(this),
    ]; // player state such as sitting, running, jumping
    this.currentState = this.states[0]; // takes the first value from states
    this.currentState.enter();
    this.image = playerImage.getPlayerStateImage(
      this.currentState.getStateName(),
      0
    );
  }

  update(inputs) {
    try {
      this.currentState.handleInput(inputs);
      // horizontal movement
      this.x += this.speed;
      if (inputs.includes("ArrowRight")) this.speed = this.maxSpeed;
      else if (inputs.includes("ArrowLeft")) this.speed = -this.maxSpeed;
      else this.speed = 0;

      // bound player to left side
      if (this.x < 0) this.x = 0;
      // bound player to right side
      if (this.x > this.game.width - this.width) {
        this.x = this.game.width - this.width;
      }

      // vertical movement
      if (inputs.includes("ArrowUp") && this.isPlayerOnGround()) this.vy -= 20;
      this.y += this.vy;
      // if player is not on the ground then we will execute following code
      if (!this.isPlayerOnGround()) this.vy += this.playerWeight;
      // if player is already on ground then set velocity y to 0
      else this.vy = 0;
    } catch (error) {
      console.log(error);
    }

    // sprite animation
    if (this.imgIndex < this.maxImages) this.imgIndex++;
    else this.imgIndex = 0;
  }

  isPlayerOnGround() {
    return this.y >= this.game.height - this.height - this.game.groundMargin;
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  getImageToDraw() {
    return playerImage.getPlayerStateImage(
      this.currentState.getStateName(),
      this.imgIndex
    );
  }

  draw(context) {
    // this.getImageToDraw();
    // console.log(this.getImageToDraw());
    // get image to be drawn
    context.drawImage(
      this.getImageToDraw(),
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
