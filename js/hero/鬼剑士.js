class 鬼剑士 {
  constructor() {
    this.direction = 1;
    this.point = { x: 400, y: 300 };
    this.m_center = { x: -233, y: -335 };
    this.length = 210;
    this.size = 1;
    this.offset = m_offset["鬼剑士"];
    this.event();
  }
  event() {
    window.addEventListener("keydown", () => {
      if (direction == 1) {
        direction = -1;
      } else {
        direction = 1;
      }
    });
  }
}
