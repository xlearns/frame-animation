let list = [
  "js/init.js",
  "assets/鬼剑士/_.js",
  "assets/格斗家/_.js",
  "js/hero/格斗家.js",
  "js/hero/鬼剑士.js",
  "js/animation.js",
  "js/load.js",
  "js/main.js",
];
list.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
