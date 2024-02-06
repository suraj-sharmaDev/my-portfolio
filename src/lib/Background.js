import { playerImage } from "../constants/gameImages";

class Layer {
  constructor(game, width, height, speedModifier, image) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    // console.log(this.x, this.width);
    if (this.x < -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 2048;
    this.height = game.height;
    this.backgroundLayers = [];
    const allBackgroundImages = playerImage.getPlayerStateImage("BACKGROUND");
    allBackgroundImages.forEach((img, idx) => {
      console.log(idx);
      this.backgroundLayers.push(
        new Layer(
          this.game,
          this.width,
          this.height,
          idx * 0.2,
          document.getElementById(img)
        )
      );
    });
  }

  update() {
    this.backgroundLayers.forEach((layer) => layer.update());
  }

  draw(context) {
    this.backgroundLayers.forEach((layer) => layer.draw(context));
  }
}
