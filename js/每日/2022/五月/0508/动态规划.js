// 509. 斐波那契数

// 最简单的动态规划，f(n) = f(n - 1) + f(n - 2)
var fib = function(n) {
  let dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 不使用额外O(n)空间, f(n)只依赖与f(n - 1)和f(n - 2),用两个变量记录前两位的值
var fib = function(n) {
  let pre1 = 1;
  let pre2 = 0;
  
  let cur = n == 0 ? 0 : 1;
  for (let i = 2; i <= n; i++) {
    cur = pre1 + pre2;
    pre2 = pre1;
    pre1 = cur;
  }
  return cur;
};


// 70. 爬楼梯
// 与斐波那契数思路一样
var climbStairs = function(n) {
  let dp = Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// 746. 使用最小花费爬楼梯
var minCostClimbingStairs = function(cost) {
  let dp = Array(cost.length);
  dp[0] = cost[0];
  dp[1] = Math.min(cost[0] + cost[1], cost[1]);

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

// 不使用额外空间
var minCostClimbingStairs = function(cost) {
  cost[1] = Math.min(cost[1], cost[0] + cost[1]);

  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};