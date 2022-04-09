// 37. 解数独
// 编写一个程序，通过填充空格来解决数独问题。

// 数独的解法需 遵循如下规则：

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 示例 1：
// 输入：board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// 输出：[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

function solveSudoku(board) {
  // 用三个二维数组分别记录行、列、桶中是否已经存在数字i
  // row[i][j] 表示第i行中是否存在j这个数字
  // col[i][j] 表示第i列中是否存在j这个数字
  // bucket[i][j] 表示第i个桶中是否存在j这个数字
  let row = Array(9);
  let col = Array(9);
  let bucket = Array(9);
  for (let i = 0; i < 9; i ++) {
    row[i] = Array(10).fill(false);
    col[i] = Array(10).fill(false);
    bucket[i] = Array(10).fill(false);
  }

  // 先将board中已经存在的数字对应的位置标为true
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') {
        let bucketId = 3 * (Math.floor(i / 3)) + (Math.floor(j / 3));
        let num = board[i][j] - '0';
        row[i][num] = true;
        col[j][num] = true;
        bucket[bucketId][num] = true;
      }
    }
  }

  // 对每个不是数字的位置 进行 1 - 9 的尝试
  function dfs(board, i, j) {
    if (i > 8) return true;
    let nextI = j == 8 ? i + 1 : i;
    let nextJ = j == 8 ? 0 : j + 1;
    if (board[i][j] != '.') {
      return dfs(board, nextI, nextJ);
    } else {
      let bucketId = 3 * (Math.floor(i / 3)) + (Math.floor(j / 3));
      
      // 尝试填写1 - 9
      for (let num = 1; num <= 9; num++) {
        if (!row[i][num] && !col[j][num] && !bucket[bucketId][num]) {
          row[i][num] = true;
          col[j][num] = true;
          bucket[bucketId][num] = true;
          board[i][j] = num + '';
          if (dfs(board, nextI, nextJ)) {
            return true;
          }
          row[i][num] = false;
          col[j][num] = false;
          bucket[bucketId][num] = false;
          board[i][j] = '.';
        }
      }
    }
    return false;
  }

  dfs(board, 0, 0);
}