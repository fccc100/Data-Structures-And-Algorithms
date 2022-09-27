// 79. 单词搜索
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

// 示例 1：
// 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// 输出：true

function exist(board, word) {
  let m = board.length;
  let n = board[0].length;
  let dir = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }
  function _exist(word, i, j, index) {
    if (index == word.length - 1 && board[i][j] == word[word.length - 1]) {
      return true;
    }

    if (word[index] != board[i][j]) {
      return false;
    }

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let newI = i + dir[k][0];
      let newJ = j + dir[k][1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && !visited[newI][newJ]) {
        if (_exist(word, newI, newJ, index + 1)) {
          return true;
        }
      }
    }
    visited[i][j] = false;
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (_exist(word, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}