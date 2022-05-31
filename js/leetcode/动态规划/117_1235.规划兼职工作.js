// 1235. 规划兼职工作
// 你打算利用空闲时间来做兼职工作赚些零花钱。

// 这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

// 给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

// 注意，时间上出现重叠的 2 份工作不能同时进行。

// 如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。

// 示例 1：

// 输入：startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
// 输出：120
// 解释：
// 我们选出第 1 份和第 4 份工作， 
// 时间范围是 [1-3]+[3-6]，共获得报酬 120 = 50 + 70。
// 示例 2：

// 输入：startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
// 输出：150
// 解释：
// 我们选择第 1，4，5 份工作。 
// 共获得报酬 150 = 20 + 70 + 60。
// 示例 3：

// 输入：startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
// 输出：6

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  let n = startTime.length;
  if (n == 0) return 0;
  // 先把开始时间/结束时间/报酬放进二维数组中
  let events = Array(n);
  for (let i = 0; i < n; i++) {
    events[i] = [startTime[i], endTime[i], profit[i]];
  }

  // 根据结束时间从小到大排序
  events.sort((a, b) => a[1] - b[1]);

  // dp[i]表示考虑前i份工作的最大报酬
  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let event = events[i - 1];

    // 找到之前工作中最后一个结束时间小于等于当前工作开始时间的工作
    let last = 0;
    for (let j = i - 1; j >= 1; j--) {
      if (events[j - 1][1] <= event[0]) {
        last = j;
        break;
      }
    }
    // 第i天的最大报酬是 i - 1天的最大报酬 和 之前最后一个结束时间小于等于当前工作开始时间的最大报酬 + 当前工作报酬
    dp[i] = Math.max(dp[i - 1], dp[last] + event[2]);
  }
  return dp[n];
};
