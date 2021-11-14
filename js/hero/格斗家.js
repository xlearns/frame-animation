class 格斗家 {
  constructor() {
    this.direction = 1;
    this.point = { x: 400, y: 300 };
    this.m_center = { x: -255, y: -380 };
    this.length = 161;
    this.size = 1;
    this.offset = m_offset["格斗家"];
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
