// 829. 连续整数求和
var consecutiveNumbersSum = function (n) {
  let res = 0;

  // 对区间[i, j]和为n来说
  // (i + j) * (j - i + 1) = 2 * n;
  // j - i + 1 = x;

  // 遍历每个长度为x的[i, j]区间
  for (let x = 1; x < Math.sqrt(2 * n); x++) {

    // 解上面方程得到i的位置
    // let i = (n / x) + ((1 - x) / 2)

    // 程序的除法与数学除法不同，需要处理下，大于0下取整，小于0上取整
    let i = Math.floor((n / x)) + ((1 - x) / 2 > 0 ? Math.floor((1 - x) / 2) : Math.ceil((1 - x) / 2));

    // 如果用上面方程计算 这个区间里的和 为n，结果加1
    if ((i + (i + x - 1)) * x == 2 * n) {
      res++;
    }
  }
  return res;
}

// 452. 用最少数量的箭引爆气球
// 思路：先按结束位置从大到小排序
// 每次记录当前的结束位置，如果遍历下一个时开始位置大于当前结束位置了，必须用一支新箭
// 否则可以在上一轮就将它射爆
var findMinArrowShots = function (points) {
  if (points.length == 0) return 0;
  points.sort((a, b) => a[1] - b[1]);

  let res = 1;
  let currentEnd = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > currentEnd) {
      res++;
      currentEnd = points[i][1];
    }
  }
  return res;
}