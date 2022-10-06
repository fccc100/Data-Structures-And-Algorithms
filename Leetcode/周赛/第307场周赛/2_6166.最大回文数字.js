// 6166. 最大回文数字
// 给你一个仅由数字（0 - 9）组成的字符串 num 。

// 请你找出能够使用 num 中数字形成的 最大回文 整数，并以字符串形式返回。该整数不含 前导零 。

// 注意：

// 你 无需 使用 num 中的所有数字，但你必须使用 至少 一个数字。
// 数字可以重新排序。

// 示例 1：

// 输入：num = "444947137"
// 输出："7449447"
// 解释：
// 从 "444947137" 中选用数字 "4449477"，可以形成回文整数 "7449447" 。
// 可以证明 "7449447" 是能够形成的最大回文整数。
// 示例 2：

// 输入：num = "00009"
// 输出："9"
// 解释：
// 可以证明 "9" 能够形成的最大回文整数。
// 注意返回的整数不应含前导零。

/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  let map = Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    map[Number(num[i])]++;
  }

  for (let i = 0; i < map.length; i++) {
    map[i] = [map[i], i];
  }

  map.sort((a, b) => b[1] - a[1]);

  let head = '';
  let tail = '';
  for (let i = 0; i < map.length; i++) {
    if (map[i][0] >= 2) {
      let cnt = Math.floor(map[i][0] / 2);
      for (let j = 0; j < cnt; j++) {
        head += map[i][1];
        tail = map[i][1] + tail;
      }
      map[i][0] -= cnt * 2;
    }
  }

  let last;
  for (let i = 0; i < map.length; i++) {
    if (map[i][0] > 0) {
      last = map[i][1] + '';
      break;
    }
  }

  if (last) {
    head = head + last;
  }

  let res = head + tail;
  let cnt = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] == 0) {
      cnt++;
    } else {
      break;
    }
  }

  if (cnt == res.length) return '0'

  res = res.substring(cnt, res.length - cnt);

  return res;
};