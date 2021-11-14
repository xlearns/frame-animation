let canvas = document.querySelector(".ctx");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";

// function start() {
//   animate(map, 0, 160, 300, direction * size, size, true, point.x, point.y);
// }
function start() {
  let 剑士 = new 鬼剑士();
  let 格斗 = new 格斗家();

  // animate(
  //   "格斗家",
  //   pak["格斗家"],
  //   0,
  //   160,
  //   60,
  //   格斗.m_center,
  //   格斗.direction * 格斗.size,
  //   格斗.size,
  //   true,
  //   格斗.point.x,
  //   格斗.point.y
  // );

  animate(
    "鬼剑士",
    pak["鬼剑士"],
    0,
    160,
    60,
    剑士.m_center,
    剑士.direction * 格斗.size,
    剑士.size,
    true,
    剑士.point.x,
    剑士.point.y
  );
}
