// 528. 按权重随机选择
// 给你一个 下标从 0 开始 的正整数数组 w ，其中 w[i] 代表第 i 个下标的权重。

// 请你实现一个函数 pickIndex ，它可以 随机地 从范围 [0, w.length - 1] 内（含 0 和 w.length - 1）选出并返回一个下标。选取下标 i 的 概率 为 w[i] / sum(w) 。

// 例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
 
// 示例 1：

// 输入：
// ["Solution","pickIndex"]
// [[[1]],[]]
// 输出：
// [null,0]
// 解释：
// Solution solution = new Solution([1]);
// solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。
// 示例 2：

// 输入：
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// 输出：
// [null,1,1,1,1,0]
// 解释：
// Solution solution = new Solution([1, 3]);
// solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 1
// solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。

// 由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:
// [null,1,1,1,1,0]
// [null,1,1,1,1,1]
// [null,1,1,1,0,0]
// [null,1,1,1,0,1]
// [null,1,0,1,0,0]
// ......
// 诸若此类。

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  // 先求前缀和
  let preSum = Array(w.length + 1);
  preSum[0] = 0;
  for (let i = 0; i < w.length; i++) {
    preSum[i + 1] = preSum[i] + w[i];
  }

  this.preSum = preSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let random = Math.random() * (this.preSum[this.preSum.length - 1]);
  for (let i = 1; i < this.preSum.length; i++) {
    if (random > this.preSum[i - 1] && random <= this.preSum[i]) {
      return i - 1;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

// 二分查找优化
 var Solution = function(w) {
  // 先求前缀和
  let preSum = Array(w.length + 1);
  preSum[0] = 0;
  for (let i = 0; i < w.length; i++) {
    preSum[i + 1] = preSum[i] + w[i];
  }

  this.preSum = preSum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  let random = Math.random() * (this.preSum[this.preSum.length - 1]);
  
  // 二分查找random
  // 找大于random的最小索引
  let l = 0;
  let r = this.preSum.length - 1;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (this.preSum[mid] <= random) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l - 1;
};