// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

var spiralOrder = function(matrix) {
  let m = matrix.length;
  if (!m) return [];
  let n = matrix[0].length;

  let cur = 0;
  let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0;

  let curRow = 0;
  let curCol = 0;

  let res = [];
  while(cur < m * n) {
    res.push(matrix[curRow][curCol]);
    
    let nextRow = curRow + dir[dirIndex][0];
    let nextCol = curCol + dir[dirIndex][1];

    if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] == undefined) {
      dirIndex = (dirIndex + 1) % 4;
    }

    matrix[curRow][curCol] = undefined;
    curRow = curRow + dir[dirIndex][0];
    curCol = curCol + dir[dirIndex][1];
    cur++;
  }
  return res;
}