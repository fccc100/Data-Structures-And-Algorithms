// 84. 柱状图中最大的矩形
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 示例 1:
// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

/**
 * @param {number[]} heights
 * @return {number}
 */
// 单调栈
var largestRectangleArea = function (heights) {
  let n = heights.length;

  let leftMin = Array(n);
  let stack1 = [];
  for (let i = n - 1; i >= 0; i--) {
    if (!stack1.length) {
      stack1.push(i);
    } else {
      while (stack1.length && heights[i] < heights[stack1[stack1.length - 1]]) {
        let prev = stack1.pop();
        leftMin[prev] = i;
      }
      stack1.push(i);
    }
  }
  while (stack1.length) {
    leftMin[stack1.pop()] = -1;
  }

  let rightMin = Array(n);
  let stack2 = [];
  for (let i = 0; i < n; i++) {
    if (!stack2.length) {
      stack2.push(i);
    } else {
      while (stack2.length && heights[i] < heights[stack2[stack2.length - 1]]) {
        let prev = stack2.pop();
        rightMin[prev] = i;
      }
      stack2.push(i);
    }
  }
  while (stack2.length) {
    rightMin[stack2.pop()] = n;
  }

  let max = -1;
  for (let i = 0; i < heights.length; i++) {
    let k = rightMin[i] - leftMin[i] - 1;
    max = Math.max(max, heights[i] * k);
  }
  return max;
};