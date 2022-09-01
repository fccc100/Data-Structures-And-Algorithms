// 1762. 能看到海景的建筑物
// 有 n 座建筑物。给你一个大小为 n 的整数数组 heights 表示每一个建筑物的高度。

// 建筑物的右边是海洋。如果建筑物可以无障碍地看到海洋，则建筑物能看到海景。确切地说，如果一座建筑物右边的所有建筑都比它 矮 时，就认为它能看到海景。

// 返回能看到海景建筑物的下标列表（下标 从 0 开始 ），并按升序排列。

// 示例 1：

// 输入：heights = [4,2,3,1]
// 输出：[0,2,3]
// 解释：1 号建筑物看不到海景，因为 2 号建筑物比它高
// 示例 2：

// 输入：heights = [4,3,2,1]
// 输出：[0,1,2,3]
// 解释：所有的建筑物都能看到海景。
// 示例 3：

// 输入：heights = [1,3,2,4]
// 输出：[3]
// 解释：只有 3 号建筑物能看到海景。
// 示例 4：

// 输入：heights = [2,2,2,2]
// 输出：[3]
// 解释：如果建筑物右边有相同高度的建筑物则无法看到海景。

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  let n = heights.length;

  // rightMax[i]: i位置右边比heights[i]大的第一个下标
  let rightMax = Array(n);

  // 单调递减栈
  let stack = [];
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
        rightMax[stack.pop()] = i;
      }
      stack.push(i);
    }
  }

  while (stack.length) {
    rightMax[stack.pop()] = n;
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    if (rightMax[i] >= n) {
      res.push(i);
    }
  }
  return res;
};