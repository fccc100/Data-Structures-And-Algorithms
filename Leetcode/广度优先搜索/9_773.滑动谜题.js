// 773. 滑动谜题
// 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示。一次 移动 定义为选择 0 与一个相邻的数字（上下左右）进行交换.

// 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。

// 给出一个谜板的初始状态 board ，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。

// 示例 1：

// 输入：board = [[1,2,3],[4,0,5]]
// 输出：1
// 解释：交换 0 和 5 ，1 步完成
// 示例 2:

// 输入：board = [[1,2,3],[5,4,0]]
// 输出：-1
// 解释：没有办法完成谜板
// 示例 3:

// 输入：board = [[4,1,2],[5,0,3]]
// 输出：5
// 解释：
// 最少完成谜板的最少移动次数是 5 ，
// 一种移动路径:
// 尚未移动: [[4,1,2],[5,0,3]]
// 移动 1 次: [[4,1,2],[0,5,3]]
// 移动 2 次: [[0,1,2],[4,5,3]]
// 移动 3 次: [[1,0,2],[4,5,3]]
// 移动 4 次: [[1,2,0],[4,5,3]]
// 移动 5 次: [[1,2,3],[4,5,0]]

/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  // 需要找到的最终状态为123450
  let endState = '123450';

  // 获取初始状态
  let startState = getState(board);

  if (startState == endState) return 0;

  let queue = [];
  queue.push(startState);

  let visited = new Map();
  visited.set(startState, 0);

  // BFS
  while(queue.length) {
    let cur = queue.shift();

    // 获取当前状态的下一状态
    let nexts = getNext(cur);

    for (let i = 0; i < nexts.length; i++) {
      let next = nexts[i];

      if (!visited.has(next)) {
        queue.push(next);
        visited.set(next, visited.get(cur) + 1);
        if (next == endState) {
          return visited.get(next);
        }
      }
    }
  }

  return -1;
};

// 123405
// 1  2  3
// 4  0  5
// 
function getNext(s) {
  let zeroIndex = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '0') {
      zeroIndex = i;
      break;
    } 
  }

  let res = [];
  if (zeroIndex == 0) {
    res.push(swap(s, 0, 1));
    res.push(swap(s, 0, 3));
  } else if (zeroIndex == 1) {
    res.push(swap(s, 1, 0));
    res.push(swap(s, 1, 2));
    res.push(swap(s, 1, 4));
  }  else if (zeroIndex == 2) {
    res.push(swap(s, 2, 1));
    res.push(swap(s, 2, 5));
  } else if (zeroIndex == 3) {
    res.push(swap(s, 3, 0));
    res.push(swap(s, 3, 4));
  } else if (zeroIndex == 4) {
    res.push(swap(s, 4, 1));
    res.push(swap(s, 4, 3));
    res.push(swap(s, 4, 5));
  } else if (zeroIndex == 5) {
    res.push(swap(s, 5, 2));
    res.push(swap(s, 5, 4));
  }
  return res;
}

function swap(s, i, j) {
  let charArray = s.split('');
  let temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join('');
}

function getState(board) {
  let res = '';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      res += board[i][j];
    }
  }
  return res;
}