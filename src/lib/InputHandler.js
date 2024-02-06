export default class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      const cur = e.key;
      const isKeyExist = this.keys.indexOf(cur) != -1;
      if (isKeyExist) return;
      if (
        ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "x"].includes(cur)
      ) {
        this.keys.push(cur);
      }
    });

    window.addEventListener("keyup", (e) => {
      const cur = e.key;
      this.keys.splice(this.keys.indexOf(cur), 1);
    });
  }
}
