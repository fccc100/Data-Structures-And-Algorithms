// x.螺旋矩阵Ⅳ
// 给你两个整数：m 和 n ，表示矩阵的维数。

// 另给你一个整数链表的头节点 head 。

// 请你生成一个大小为 m x n 的螺旋矩阵，矩阵包含链表中的所有整数。链表中的整数从矩阵 左上角 开始、顺时针 按 螺旋 顺序填充。如果还存在剩余的空格，则用 -1 填充。

// 返回生成的矩阵。

// 示例 1：

// 输入：m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
// 输出：[[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
// 解释：上图展示了链表中的整数在矩阵中是如何排布的。
// 注意，矩阵中剩下的空格用 -1 填充。
// 示例 2：


// 输入：m = 1, n = 4, head = [0,1,2]
// 输出：[[0,1,2,-1]]
// 解释：上图展示了链表中的整数在矩阵中是如何从左到右排布的。 
// 注意，矩阵中剩下的空格用 -1 填充。

var spiralMatrix = function(m, n, head) {
  let matrix = Array(m);
  for (let i = 0; i < m; i++) {
    matrix[i] = Array(n).fill(-1);
  }

  // 右下左上四个方向
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  let cur = head;
  let row = 0;
  let col = 0;
  let dirIndex = 0;

  while(cur != null) {
    matrix[row][col] = cur.val
    cur = cur.next;

    // 计算下一步应该在哪个位置，如果下一个位置不合法，就需要换个方向
    // dirIndex = (dirIndex + 1) % 4;
    let nextRow = row + dir[dirIndex][0];
    let nextCol = col + dir[dirIndex][1];
    if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] != -1) {
      dirIndex = (dirIndex + 1) % 4;
    }

    row = row + dir[dirIndex][0];
    col = col + dir[dirIndex][1];
  }
  return matrix;
}