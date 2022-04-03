// 剑指 Offer II 040. 矩阵中最大的矩形
// 给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

// 注意：此题 matrix 输入格式为一维 01 字符串数组。

 
// 示例 1：
// 输入：matrix = ["10100","10111","11111","10010"]
// 输出：6
// 解释：最大矩形如上图所示。

function maximalRectangle(matrix) {
  if (!matrix.length) return 0;
  let m = matrix.length;
  let n = matrix[0].length;

  let newMatrix = Array(m);
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      newMatrix[i][j] = Number(matrix[i][j]);
    }
  }

  for (let i = 1; i < newMatrix.length; i++) {
    for (let j = 0; j < n; j++) {
      if (newMatrix[i][j] == 1) {
        newMatrix[i][j] += newMatrix[i - 1][j];
      }
    }
  }

  let max = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    max = Math.max(max, largestRectangleArea(newMatrix[i]));
  }

  return max;
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