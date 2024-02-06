export const allGameImages = {
  SITTING: ["images/models/run/rr_011.png"],
  RUNNING: [
    "images/models/run/rr_000-min.png",
    "images/models/run/rr_001-min.png",
    "images/models/run/rr_002-min.png",
    "images/models/run/rr_003-min.png",
    "images/models/run/rr_004-min.png",
    "images/models/run/rr_005-min.png",
    "images/models/run/rr_006-min.png",
    "images/models/run/rr_007-min.png",
    "images/models/run/rr_008-min.png",
    "images/models/run/rr_009-min.png",
    "images/models/run/rr_010-min.png",
    "images/models/run/rr_011-min.png",
    "images/models/run/rr_012-min.png",
    "images/models/run/rr_013-min.png",
    "images/models/run/rr_014-min.png",
    "images/models/run/rr_015-min.png",
    "images/models/run/rr_016-min.png",
    "images/models/run/rr_017-min.png",
    "images/models/run/rr_018-min.png",
    "images/models/run/rr_019-min.png",
    "images/models/run/rr_020-min.png",
  ],
  JUMPING: [
    "images/models/jump/l_000-min.png",
    "images/models/jump/l_001-min.png",
    "images/models/jump/l_002-min.png",
    "images/models/jump/l_003-min.png",
    "images/models/jump/l_004-min.png",
    "images/models/jump/l_005-min.png",
    "images/models/jump/l_006-min.png",
    "images/models/jump/l_007-min.png",
    "images/models/jump/l_008-min.png",
  ],
  FALLING: [
    "images/models/jump/l_009-min.png",
    "images/models/jump/l_010-min.png",
    "images/models/jump/l_011-min.png",
    "images/models/jump/l_012-min.png",
    "images/models/jump/l_013-min.png",
    "images/models/jump/l_014-min.png",
    "images/models/jump/l_015-min.png",
    "images/models/jump/l_016-min.png",
    "images/models/jump/l_017-min.png",
  ],
  BACKGROUND: [
    "images/background/_11_background-min.png",
    "images/background/_08_clouds-min.png",
    "images/background/_09_distant_clouds1-min.png",
    "images/background/_03_distant_trees-min.png",
    "images/background/_02_trees and bushes-min.png",
    "images/background/_01_ground-min.png",
  ],
};

export class PlayerImages {
  constructor() {
    this.playerImages = {
      SITTING: allGameImages.SITTING,
      RUNNING: allGameImages.RUNNING,
      JUMPING: allGameImages.JUMPING,
      FALLING: allGameImages.FALLING,
      BACKGROUND: allGameImages.BACKGROUND,
    };
  }

  getAllImages() {
    return [
      ...this.playerImages.RUNNING,
      ...this.playerImages.JUMPING,
      ...this.playerImages.FALLING,
      ...allGameImages.BACKGROUND,
    ];
  }

  getPlayerStateImage(state, index = null) {
    // console.log(state, index);
    if (index == null) return this.playerImages[state];
    return document.getElementById(this.playerImages[state][index]);
  }
}

export const playerImage = new PlayerImages();
