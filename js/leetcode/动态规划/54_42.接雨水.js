// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

// 动态规划
function trap(height) {
  let n = height.length;
  if (n == 0) {
    return 0;
  }

  let leftMax = Array(n);
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  let rightMax = Array(n);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
}

/**
 * 先求[0, i]每个位置及其左边的最高位置，再求每个位置及其右边的最高位置
 * 结果为这两者的较小值 - 当前的高度
 */
function trap(height) {
  let leftMax = Array(height.length);
  leftMax[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  let rightMax = Array(height.length);
  rightMax[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return res;
}