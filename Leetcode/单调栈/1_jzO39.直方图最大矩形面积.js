// 剑指 Offer II 039. 直方图最大矩形面积
// 给定非负整数数组 heights ，数组中的数字用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 示例 1:
// 输入：heights = [2,1,5,6,2,3]
// 输出：10
// 解释：最大的矩形为图中红色区域，面积为 10

// 分治法
function largestRectangleArea(heights) {
  let n = heights.length;

  // 从[l, r]区间搜索最大矩形面积
  function _largestRectangleArea(heights, l, r) {
    if (l > r) {
      return 0;
    }
    if (l == r) {
      return heights[l];
    }
    let minHeight = heights[l];
    let minIndex = l;
    for (let i = l; i <= r; i++) {
      if (heights[i] < minHeight) {
        minHeight = heights[i];
        minIndex = i;
      }
    }

    let center = (r - l + 1) * minHeight;
    let left = _largestRectangleArea(heights, l, minIndex - 1);
    let right = _largestRectangleArea(heights, minIndex + 1, r);
    let res = Math.max(center, Math.max(left, right));
    return res;
  }

  return _largestRectangleArea(heights, 0, n - 1);
}

// 单调栈
function largestRectangleArea(heights) {
  let n = heights.length;
  let leftMin = getLeftMin(heights);
  let rightMin = getRightMin(heights);

  let max = 0;
  for (let i = 0; i < n; i++) {
    let cur = (rightMin[i] - leftMin[i] - 1) * heights[i];
    max = Math.max(max, cur);
  }

  return max;
}

function getRightMin(nums) {
  let stack = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while(stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        let prev = stack.pop();
        res[prev] = i;
      }
      stack.push(i);
    }
  }
  while(stack.length) {
    res[stack.pop()] = nums.length;
  }
  return res;
}

function getLeftMin(nums) {
  let stack = [];
  let res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while(stack.length && nums[i] < nums[stack[stack.length - 1]]) {
        let prev = stack.pop();
        res[prev] = i;
      }
      stack.push(i);
    }
  }
  while(stack.length) {
    res[stack.pop()] = -1;
  }
  return res;
}
