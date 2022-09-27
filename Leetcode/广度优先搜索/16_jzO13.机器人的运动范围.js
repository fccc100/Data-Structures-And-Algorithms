// 剑指 Offer 13. 机器人的运动范围
// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
// 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
// 请问该机器人能够到达多少个格子？

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 广度优先遍历
var movingCount = function(m, n, k) {
  
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;

  let res = 1;
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();
      let curI = curPath[0];
      let curJ = curPath[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && isValid(nextI, nextJ, k)) {
          queue.push([nextI, nextJ]);
          res++;
          visited[nextI][nextJ] = true;
        }
      }
    }
  }
  return res;
};

function isValid(i, j, k) {
  let res = 0;
  while (i != 0) {
    let cur = i % 10;
    i = Math.floor(i / 10);
    res += cur;
  }

  while(j != 0) {
    let cur = j % 10;
    j = Math.floor(j / 10);
    res += cur;
  }

  return res <= k;
}


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 去掉shift操作
var movingCount = function(m, n, k) {
  
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;

  let res = 1;
  while (queue.length) {
    let len = queue.length;
    let newQueue = [];

    for (let i = 0; i < len; i++) {
      let curPath = queue[i];
      let curI = curPath[0];
      let curJ = curPath[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && isValid(nextI, nextJ, k)) {
          newQueue.push([nextI, nextJ]);
          res++;
          visited[nextI][nextJ] = true;
        }
      }
    }
    queue = newQueue;
  }
  return res;
};

function isValid(i, j, k) {
  let res = 0;
  while (i != 0) {
    let cur = i % 10;
    i = Math.floor(i / 10);
    res += cur;
  }

  while(j != 0) {
    let cur = j % 10;
    j = Math.floor(j / 10);
    res += cur;
  }

  return res <= k;
}