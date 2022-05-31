// 1751. 最多可以参加的会议数目 II

// 1.先按结束时间从小到大排序
// 2.定义dp[i][j]表示考虑前i个会议，参加会议次数j的最大价值
// 3.状态转移：
// dp[i][j] ：第i天参加会议次数j的最大价值为：
// 1).第i - 1天参加会议次数为j的最大价值
// 2).往前第一个结束时间比当前会议开始时间小的会议那天 ，参加会议次数j - 1次的最大价值 + 当前会议的价值
// 从两者中取较大者
var maxValue = function(events, k) {
  let n = events.length;
  if (n == 0) return 0;

  // 根据会议结束时间排序
  events.sort((a, b) => a[1] - b[1]);

  // dp[i][j]表示前i个会议，参加会议不超过j个的最大价值
  let dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(k + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    let event = events[i - 1];

    // 找到当前会议之前的最后的结束时间小于当前会议开始时间的会议
    let last = 0;
    for (let j = i - 1; j >= 1; j--) {
      let prev = events[j - 1];
      if (prev[1] < event[0]) {
        last = j;
        break;
      }
    }

    for (let j = 1; j <= k; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[last][j - 1] + event[2]);
    }
  }
  return dp[n][k];
}

// 1235. 规划兼职工作
var jobScheduling = function(startTime, endTime, profit) {
  let n = startTime.length;
  if (n == 0) return 0;

  let events = Array(n);
  for (let i = 0; i < n; i++) {
    events[i] = [startTime[i], endTime[i], profit[i]];
  }

  events.sort((a, b) => a[1] - b[1]);

  let dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let event = events[i - 1];

    let last = 0;
    for (let j = i - 1; j >= 1; j--) {
      if (events[j - 1][1] <= event[0]) {
        last = j;
        break;
      }
    }
    dp[i] = Math.max(dp[i - 1], dp[last] + event[2]);
  }
  return dp[n];
}