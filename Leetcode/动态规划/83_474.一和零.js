// 474. 一和零
// 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

// 请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。

// 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

 

// 示例 1：

// 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
// 输出：4
// 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
// 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。


function findMaxForm(strs, m, n) {
  function _findMaxForm(strs, m, n, index) {
    if (index < 0) {
      return 0;
    }

    let countZero = 0;
    let countOne = 0;
    for (let i = 0; i , strs[index].length; i++) {
      if (strs[index] == '0') {
        countZero ++;
      } else {
        countOne ++;
      }
    }

    if (countZero == m && countOne == n) {
      return 1;
    }
    if (countZero > m || countOne > n) {
      return 0;
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      let one = 0;
      let zero = 0;
      for (let j = 0; j < strs[i].length; j++) {
        if (strs[i][j] == '0') {
          zero ++;
        } else {
          one ++;
        }
      }
      if (countZero + zero < m && countOne + one < n) {
        max = Math.max(max, _findMaxForm(strs, m - countZero, n - countOne, i) + 1);
      }
    }

    return max;
  }

  let max = 0;
  for (let i = 0; i < strs.length; i++) {
    max = Math.max(max, _findMaxForm(strs, m, n, i));
  }

  return max;
}