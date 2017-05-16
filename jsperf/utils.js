// 测试工具函数
function runTest(title, fn, times = 1000) {
  console.time(title);
  while (times--) { fn(); }
  console.timeEnd(title);
}

// 生成随机数组
function getRandomArray(amount = 1000) {
  let array = new Array(amount);
  for (let i = amount; i--;) {
    array[i] = Math.floor(Math.random() * 1000);
  }
  return array;
}

module.exports = {
  runTest,
  getRandomArray,
}
