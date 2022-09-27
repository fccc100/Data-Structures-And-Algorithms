// 6157. 二进制字符串重新安排顺序需要的时间
// 给你一个二进制字符串 s 。在一秒之中，所有 子字符串 "01" 同时 被替换成 "10" 。这个过程持续进行到没有 "01" 存在。

// 请你返回完成这个过程所需要的秒数。

// 示例 1：

// 输入：s = "0110101"
// 输出：4
// 解释：
// 一秒后，s 变成 "1011010" 。
// 再过 1 秒后，s 变成 "1101100" 。
// 第三秒过后，s 变成 "1110100" 。
// 第四秒后，s 变成 "1111000" 。
// 此时没有 "01" 存在，整个过程花费 4 秒。
// 所以我们返回 4 。
// 示例 2：

// 输入：s = "11100"
// 输出：0
// 解释：
// s 中没有 "01" 存在，整个过程花费 0 秒。
// 所以我们返回 0 。

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  let arr = s.split('');

  let res = 0;
  while (true) {
    let has = false;
    for (let i = 0; i < arr.length - 1;) {
      if (arr[i] == 0 && arr[i + 1] == 1) {
        has = true;
        swap(arr, i, i + 1);
        i += 2;
      } else {
        i++;
      }
    }
    if (!has) break;
    res++;
  }
  return res;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}