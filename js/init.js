m_offset = {};
pak = {};
function init(name, src, length, start, success) {
  pak[name] = {};
  Array.from({ length: length }).forEach((undefined, index) => {
    pak[name][index] = new Image();
    pak[name][index].src = `${src}${index + start}.png`;
    pak[name][index].onload = function () {
      if (index >= length - 1) {
        //开始
        success();
      }
    };
  });
}
