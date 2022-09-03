// 6143. 预算内的最多机器人数目
// 你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。再给你一个整数 budget 。

// 运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes) 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。

// 请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

// 示例 1：

// 输入：chargeTimes = [3,6,1,3,4], runningCosts = [2,1,3,4,5], budget = 25
// 输出：3
// 解释：
// 可以在 budget 以内运行所有单个机器人或者连续运行 2 个机器人。
// 选择前 3 个机器人，可以得到答案最大值 3 。总开销是 max(3,6,1) + 3 * sum(2,1,3) = 6 + 3 * 6 = 24 ，小于 25 。
// 可以看出无法在 budget 以内连续运行超过 3 个机器人，所以我们返回 3 。
// 示例 2：

// 输入：chargeTimes = [11,12,19], runningCosts = [10,8,7], budget = 19
// 输出：0
// 解释：即使运行任何一个单个机器人，还是会超出 budget，所以我们返回 0 。

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
// 用了前缀和 + 单调队列求区间最大值 + 滑动窗口
// 但是性能好像并不是很好
// 明日需突破下单调队列求区间最大值的算法
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  let n = chargeTimes.length;

  let preSum = Array(n);
  preSum[0] = runningCosts[0];
  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + runningCosts[i];
  }
  preSum.unshift(0);

  let l = 0;
  let r = -1;

  let res = 0;

  let maxQueue = new MaxQueue();

  let cur = 0;
  while (r < n) {
    if (cur <= budget) {
      res = Math.max(res, r - l + 1);

      r++;
      if (r >= n) break;
      maxQueue.push_back(chargeTimes[r]);
      let max = maxQueue.max_value();

      let len = r - l + 1;
      let sum = preSum[r + 1] - preSum[l];

      cur = max + len * sum;
    } else {
      l++;
      maxQueue.pop_front();
      let max = maxQueue.max_value();

      let len = r - l + 1;
      let sum = preSum[r + 1] - preSum[l];

      cur = max + len * sum;
    }
  }
  return res;
};

var MaxQueue = function () {
  this.array = new Array();
  this.maxArray = new Array();
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.array.length ? this.maxArray[0] : -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.array.push(value);
  while (this.maxArray.length && this.maxArray[this.maxArray.length - 1] < value) {
    this.maxArray.pop();
  }
  this.maxArray.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (!this.array.length) return -1;
  const shiftElement = this.array.shift();
  if (shiftElement === this.maxArray[0]) {
    this.maxArray.shift();
  }
  return shiftElement;
};