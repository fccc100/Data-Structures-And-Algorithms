// 1528. 重新排列字符串
// 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。

// 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。

// 返回重新排列后的字符串。

// 示例 1：

// 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// 输出："leetcode"
// 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。
// 示例 2：

// 输入：s = "abc", indices = [0,1,2]
// 输出："abc"
// 解释：重新排列后，每个字符都还留在原来的位置上。

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let arr = s.split('');
  let res = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    res[indices[i]] = arr[i];
  }

  return res.join('');
};