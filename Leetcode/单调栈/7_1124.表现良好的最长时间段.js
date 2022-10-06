// 1124. 表现良好的最长时间段
// 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

// 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

// 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

// 请你返回「表现良好时间段」的最大长度。

// 示例 1：
// 输入：hours = [9,9,6,0,6,6,9]
// 输出：3
// 解释：最长的表现良好时间段是 [9,9,6]。

// 暴力求解
function longestWPI(hours) {
  // 首先将大于8小时转化为1，小于等于8小时转化为-1
  // [9,9,6,0,6,6,9] 转化为 [1,1,-1,-1,-1,-1,1]
  for (let i = 0; i < hours.length; i++) {
    hours[i] = hours[i] > 8 ? 1 : -1;
  }

  // 接下来就需要求和大于0的最长子数组
  // 于是，先求前缀和
  let preSum = [];
  preSum[0] = hours[0];
  for (let i = 1; i < hours.length; i++) {
    preSum[i] = preSum[i - 1] + hours[i];
  }

  // 暴力求解
  let max = 0;
  for (let i = 0; i < preSum.length; i++) {
    for (let j = i; j < preSum.length; j++) {
      if (preSum[j] - (i - 1 >= 0 ? preSum[i - 1] : 0) > 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
}

// 单调栈优化
function longestWPI(hours) {
  // 首先将大于8小时转化为1，小于等于8小时转化为-1
  // [9,9,6,0,6,6,9] 转化为 [1,1,-1,-1,-1,-1,1]
  for (let i = 0; i < hours.length; i++) {
    hours[i] = hours[i] > 8 ? 1 : -1;
  }

  // 接下来就需要求和大于0的最长子数组
  // 于是，先求前缀和
  let preSum = [];
  preSum[0] = 0;
  for (let i = 0; i < hours.length; i++) {
    preSum[i + 1] = preSum[i] + hours[i];
  }

  // 求前缀和数组的单调递减栈
  let stack = [];
  for (let i = 0; i < preSum.length; i++) {
    if (!stack.length || preSum[stack[stack.length - 1]] > preSum[i]) {
      stack.push(i);
    }
  }

  // 从右往左找右边的值
  let max = 0;
  for (let i = preSum.length - 1; i >= 0; i--) {
    while(stack.length) {
      if (preSum[i] - preSum[stack[stack.length - 1]] > 0) {
        max = Math.max(max, i - stack[stack.length - 1]);
        stack.pop();
      } else {
        break;
      }
    }
  }

  return max;
}