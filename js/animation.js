function animate(
  name,
  obj,
  start,
  end,
  speed = 60,
  m_center,
  w,
  h,
  loop = false,
  x = 0,
  y = 0
) {
  w = w == null ? 1 : w;
  h = h == null ? 1 : h;
  const handle = () => {
    timer = setTimeout(() => {
      if (++start > end) {
        if (loop) {
          start = 0;
        } else {
          return clearTimeout(timer);
        }
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.save();
      //反转
      ctx.translate(x, y);
      ctx.scale(w, h);
      //加载动画
      let ox = Number(m_offset[name][start][0]);
      let oy = Number(m_offset[name][start][1]);
      ctx.drawImage(obj[start], m_center.x + ox, m_center.y + oy);
      ctx.restore();
      handle();
    }, speed);
  };
  handle();
}
