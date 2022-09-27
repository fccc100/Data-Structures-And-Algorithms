// 754. 到达终点数字
// 在一根无限长的数轴上，你站在0的位置。终点在target的位置。

// 你可以做一些数量的移动 numMoves :

// 每次你可以选择向左或向右移动。
// 第 i 次移动（从  i == 1 开始，到 i == numMoves ），在选择的方向上走 i 步。
// 给定整数 target ，返回 到达目标所需的 最小 移动次数(即最小 numMoves ) 。

// 示例 1:
// 输入: target = 2
// 输出: 3
// 解释:
// 第一次移动，从 0 到 1 。
// 第二次移动，从 1 到 -1 。
// 第三次移动，从 -1 到 2 。

// 往右移动依次到达 1, 3, 6, 10, 15, 21, 28, 36, 45...

function reachNumber(target) {
  if (target == 0) return 0;
  // 往左移动与往右移动性质一样
  target = Math.abs(target);
  let k = 1;

  // 找到第一个超过target的前n项和位置
  while(preSum(k) < target) {
    k++;
  }
  // 如果前n项刚好等于target，直接返回k
  let sum = preSum(k);
  if (sum == target) {
    return k;
  }

  // 如果前n项和与target之间的距离是偶数，那直接将前面某一次移动变成往左移动即可，结果仍是k
  if ((sum - target) % 2 == 0) {
    return k;
  }

  // 如果前n项和与target之间的距离是奇数，那往后再找一项或者再找两项就一定能找到与target距离是偶数的点
  // 因为前n项和是 奇奇偶偶奇奇偶偶奇奇偶偶 这样分布的，所以最多再找两项，一定能找到
  if ((sum - target) % 2 != 0) {
    if ((preSum(k + 1) - target) % 2 == 0) {
      return k + 1;
    }
    if ((preSum(k + 2) - target) % 2 == 0) {
      return k + 2;
    }
  }
}

// 前n项和
function preSum(n) {
  return n * (n + 1) / 2;
}