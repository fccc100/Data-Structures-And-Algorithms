// 79. 单词搜索
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 示例 1：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true
// 示例 2：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// 输出：true
// 示例 3：

// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// 输出：false

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let m = board.length;
  if (m == 0) return false;
  let n = board[0].length;
  if (n == 0) return false;
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  function dfs(board, i, j, index) {
    if (index == word.length - 1 && board[i][j] == word[index]) {
      return true;
    }
    if (board[i][j] != word[index]) {
      return false;
    }

    visited[i][j] = true;
    for (let k = 0; k < dir.length; k++) {
      let nextI = i + dir[k][0];
      let nextJ = j + dir[k][1];
      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
        if (dfs(board, nextI, nextJ, index + 1)) {
          return true;
        }
      }
    }
    visited[i][j] = false;
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        if (dfs(board, i, j, 0)) {
          return true;
        }
      }
    }
  }
  return false;
};