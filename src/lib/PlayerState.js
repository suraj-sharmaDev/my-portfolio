import { playerImage } from "../constants/gameImages";

const states = {
  SITTING: 0,
  RUNNING: 1,
  JUMPING: 2,
  FALLING: 3,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Sitting extends State {
  constructor(player) {
    super("SITTING");
    this.player = player;
  }
  enter() {
    // when player enters this state
    // handle updates
    this.player.maxImages =
      playerImage.getPlayerStateImage(this.getStateName()).length - 1;
  }
  handleInput(inputs) {
    if (inputs.includes("ArrowRight") || inputs.includes("ArrowLeft")) {
      this.player.setState(states.RUNNING);
    }
  }
  getStateName() {
    return "SITTING";
  }
}

export class Running extends State {
  constructor(player) {
    super("RUNNING");
    this.player = player;
  }
  enter() {
    // when player enters this state
    // handle updates
    this.player.maxImages =
      playerImage.getPlayerStateImage(this.getStateName()).length - 1;
  }
  handleInput(inputs) {
    if (inputs.includes("ArrowDown")) {
      this.player.setState(states.SITTING);
    } else if (inputs.includes("ArrowUp")) {
      this.player.setState(states.JUMPING);
    }
  }
  getStateName() {
    return "RUNNING";
  }
}

export class Jumping extends State {
  constructor(player) {
    super("JUMPING");
    this.player = player;
  }
  enter() {
    // when player enters this state
    // handle updates
    this.player.maxImages =
      playerImage.getPlayerStateImage(this.getStateName()).length - 1;
  }
  handleInput(inputs) {
    if (this.player.vy > this.player.playerWeight) {
      this.player.setState(states.FALLING);
    }
  }
  getStateName() {
    return "JUMPING";
  }
}

export class Falling extends State {
  constructor(player) {
    super("FALLING");
    this.player = player;
  }
  enter() {
    // when player enters this state
    // handle updates
    this.player.maxImages =
      playerImage.getPlayerStateImage(this.getStateName()).length - 1;
  }
  handleInput(inputs) {
    if (this.player.isPlayerOnGround()) {
      this.player.setState(states.RUNNING);
    }
  }
  getStateName() {
    return "FALLING";
  }
}
