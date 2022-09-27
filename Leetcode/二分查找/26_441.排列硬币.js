// 441. 排列硬币
// 你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。

// 给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。 

// 示例 1：
// 输入：n = 5
// 输出：2
// 解释：因为第三行不完整，所以返回 2 。

// 
function arrangeCoins(n) {
  for (let i = 1; i <= n; i++) {
    if (sum(i) == n) {
      return i;
    } else if (sum(i) > n) {
      return i - 1;
    }
  }
}
function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}

// 二分
function arrangeCoins(n) {
  let l = 1;
  let r = n;
  while(l < r) {
    let mid = l + (r - l + 1 >> 1);
    // 根据等差数列求和公式
    if (mid * (mid + 1) / 2 === n) {
      l = mid;
    } else if (mid * (mid + 1) / 2 < n) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
}
