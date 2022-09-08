// 403. 青蛙过河
// 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

// 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃 1 个单位（即只能从单元格 1 跳至单元格 2 ）。

// 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。

// 示例 1：

// 输入：stones = [0,1,3,5,6,8,12,17]
// 输出：true
// 解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
// 示例 2：

// 输入：stones = [0,1,2,3,4,8,9,11]
// 输出：false
// 解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {

  let n = stones.length;

  if (n == 0 || n == 1) return true;

  let set = new Set();
  let max = stones[0];
  for (let i = 0; i < stones.length; i++) {
    set.add(stones[i]);
    max = Math.max(max, stones[i]);
  }

  if (stones[1] != stones[0] + 1) return false;

  let memo = new Map();
  
  // 从pos位置跳跃k步，能否达到后面的位置
  function tryJump(pos, k) {
    if (pos == max) {
      return true;
    }
    if (pos > max) {
      return false;
    }

    if (memo.has(pos + ',' + k)) {
      return memo.get(pos + ',' + k);
    }

    let f1 = false;
    if (set.has(pos + k)) {
      f1 = tryJump(pos + k, k);
    }

    let f2 = false;
    if (set.has(pos + (k + 1))) {
      f2 = tryJump(pos + (k + 1), k + 1);
    }

    let f3 = false;
    if (k - 1 > 0) {
      if (set.has(pos + (k - 1))) {
        f3 = tryJump(pos + (k - 1), k - 1);
      }
    }

    let res = f1 || f2 || f3;

    memo.set(pos + ',' + k, res);
    return res;
  }

  return tryJump(stones[1], 1);
};

//         [0, 1, 2, 5, 6, 9, 10, 12, 13, 14, 17, 19, 20, 21, 26, 27, 28, 29, 30]
//          1  1  

//               0  1  2  3  4  5  6   7
//              [0, 1, 3, 5, 6, 8, 12, 17]
//               |  |  |  |     |   |   |                 