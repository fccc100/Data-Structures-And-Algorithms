// 440. 字典序的第K小数字
// 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

// 示例 1:

// 输入: n = 13, k = 2
// 输出: 10
// 解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
// 示例 2:

// 输入: n = 1, k = 1
// 输出: 1

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findKthNumber = function (n, k) {
  let pre = 1;
  let cnt = 1;

  while (cnt < k) {
    let curCnt = getCount(pre, n);

    if (cnt + curCnt > k) {
      pre *= 10;
      cnt++;
    } else {
      cnt += curCnt;
      pre ++;
    }
  }
  return pre;
};

// 获取前缀p下拥有的n以内的节点个数
function getCount(p, n) {
  let cur = p;
  let next = cur + 1;

  let cnt = 0;
  while (cur <= n) {
    cnt += Math.min(n + 1, next) - cur;

    cur *= 10;
    next *= 10;
  }
  return cnt;
}
