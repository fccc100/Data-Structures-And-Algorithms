// 6158. 字母移位 II
// 给你一个小写英文字母组成的字符串 s 和一个二维整数数组 shifts ，其中 shifts[i] = [starti, endi, directioni] 。对于每个 i ，将 s 中从下标 starti 到下标 endi （两者都包含）所有字符都进行移位运算，如果 directioni = 1 将字符向后移位，如果 directioni = 0 将字符向前移位。

// 将一个字符 向后 移位的意思是将这个字符用字母表中 下一个 字母替换（字母表视为环绕的，所以 'z' 变成 'a'）。类似的，将一个字符 向前 移位的意思是将这个字符用字母表中 前一个 字母替换（字母表是环绕的，所以 'a' 变成 'z' ）。

// 请你返回对 s 进行所有移位操作以后得到的最终字符串。

// 示例 1：

// 输入：s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]
// 输出："ace"
// 解释：首先，将下标从 0 到 1 的字母向前移位，得到 s = "zac" 。
// 然后，将下标从 1 到 2 的字母向后移位，得到 s = "zbd" 。
// 最后，将下标从 0 到 2 的字符向后移位，得到 s = "ace" 。
// 示例 2:

// 输入：s = "dztz", shifts = [[0,0,0],[1,1,1]]
// 输出："catz"
// 解释：首先，将下标从 0 到 0 的字母向前移位，得到 s = "cztz" 。
// 最后，将下标从 1 到 1 的字符向后移位，得到 s = "catz" 。

/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let nums = s.split('');
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].charCodeAt() - 'a'.charCodeAt();
  }

  let diff = Array(nums.length + 1).fill(0);

  for (let i = 0; i < shifts.length; i++) {
    if (shifts[i][2] == 0) {
      diff[shifts[i][0]]--;
      diff[shifts[i][1] + 1]++;
    } else {
      diff[shifts[i][0]]++;
      diff[shifts[i][1] + 1]--;
    }
  }

  let preSum = Array(nums.length + 1).fill(0);
  preSum[0] = 0;
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + diff[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + preSum[i + 1];

    nums[i] = String.fromCharCode((nums[i] % 26) + 26 + 'a'.charCodeAt());
  }

  return nums.join('');
};


/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let nums = s.split('');
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].charCodeAt() - 'a'.charCodeAt();
  }

  let diff = Array(nums.length + 1).fill(0);

  for (let i = 0; i < shifts.length; i++) {
    if (shifts[i][2] == 0) {
      diff[shifts[i][0]]--;
      diff[shifts[i][1] + 1]++;
    } else {
      diff[shifts[i][0]]++;
      diff[shifts[i][1] + 1]--;
    }
  }

  let preSum = Array(nums.length + 1).fill(0);
  preSum[0] = 0;
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + diff[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + preSum[i + 1];

    nums[i] = String.fromCharCode((nums[i] + 26 * 10000) % 26 + 'a'.charCodeAt());
  }

  return nums.join('');
};