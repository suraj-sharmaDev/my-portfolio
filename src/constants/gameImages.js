export const allGameImages = {
  SITTING: ["images/models/run/rr_011.png"],
  RUNNING: [
    "images/models/run/rr_000.png",
    "images/models/run/rr_001.png",
    "images/models/run/rr_002.png",
    "images/models/run/rr_003.png",
    "images/models/run/rr_004.png",
    "images/models/run/rr_005.png",
    "images/models/run/rr_006.png",
    "images/models/run/rr_007.png",
    "images/models/run/rr_008.png",
    "images/models/run/rr_009.png",
    "images/models/run/rr_010.png",
    "images/models/run/rr_011.png",
    "images/models/run/rr_012.png",
    "images/models/run/rr_013.png",
    "images/models/run/rr_014.png",
    "images/models/run/rr_015.png",
    "images/models/run/rr_016.png",
    "images/models/run/rr_017.png",
    "images/models/run/rr_018.png",
    "images/models/run/rr_019.png",
    "images/models/run/rr_020.png",
  ],
  JUMPING: [
    "images/models/jump/l_000.png",
    "images/models/jump/l_001.png",
    "images/models/jump/l_002.png",
    "images/models/jump/l_003.png",
    "images/models/jump/l_004.png",
    "images/models/jump/l_005.png",
    "images/models/jump/l_006.png",
    "images/models/jump/l_007.png",
    "images/models/jump/l_008.png",
  ],
  FALLING: [
    "images/models/jump/l_009.png",
    "images/models/jump/l_010.png",
    "images/models/jump/l_011.png",
    "images/models/jump/l_012.png",
    "images/models/jump/l_013.png",
    "images/models/jump/l_014.png",
    "images/models/jump/l_015.png",
    "images/models/jump/l_016.png",
    "images/models/jump/l_017.png",
  ],
  background: [
    "images/background/_01_ground.png",
    "images/background/_02_trees and bushes.png",
    "images/background/_03_distant_trees.png",
    "images/background/_04_bushes.png",
    "images/background/_05_hill1.png",
    "images/background/_06_hill2.png",
    "images/background/_07_huge_clouds.png",
    "images/background/_08_clouds.png",
    "images/background/_09_distant_clouds1.png",
    "images/background/_10_distant_clouds.png",
    "images/background/_11_background.png",
  ],
};

export class PlayerImages {
  constructor() {
    this.playerImages = {
      SITTING: allGameImages.SITTING,
      RUNNING: allGameImages.RUNNING,
      JUMPING: allGameImages.JUMPING,
      FALLING: allGameImages.FALLING,
    };
  }

  getAllImages() {
    return [
      ...this.playerImages.RUNNING,
      ...this.playerImages.JUMPING,
      ...this.playerImages.FALLING,
    ];
  }

  getPlayerStateImage(state, index = null) {
    // console.log(state, index);
    if (index == null) return this.playerImages[state];
    return document.getElementById(this.playerImages[state][index]);
  }
}

export const playerImage = new PlayerImages();
