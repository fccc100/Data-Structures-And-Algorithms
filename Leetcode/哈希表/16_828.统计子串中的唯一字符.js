// 828. 统计子串中的唯一字符
// 我们定义了一个函数 countUniqueChars(s) 来统计字符串 s 中的唯一字符，并返回唯一字符的个数。

// 例如：s = "LEETCODE" ，则其中 "L", "T","C","O","D" 都是唯一字符，因为它们只出现一次，所以 countUniqueChars(s) = 5 。

// 本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。输入用例保证返回值为 32 位整数。

// 注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）。

// 示例 1：

// 输入: s = "ABC"
// 输出: 10
// 解释: 所有可能的子串为："A","B","C","AB","BC" 和 "ABC"。
//      其中，每一个子串都由独特字符构成。
//      所以其长度总和为：1 + 1 + 1 + 2 + 2 + 3 = 10
// 示例 2：

// 输入: s = "ABA"
// 输出: 8
// 解释: 除了 countUniqueChars("ABA") = 1 之外，其余与示例 1 相同。
// 示例 3：

// 输入：s = "LEETCODE"
// 输出：92

/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  let n = s.length;

  let map = new Map();
  map.set(s[0], 0);

  // left[i]表示第i个字符左边第一个与其相等字符的索引
  let left = Array(n);
  left[0] = -1;
  for (let i = 1; i < n; i++) {
    if (map.has(s[i])) {
      left[i] = map.get(s[i]);
    } else {
      left[i] = -1;
    }
    map.set(s[i], i);
  }

  // right[i]表示第i个字符右边第一个与其相等字符的索引
  let right = Array(n);
  map.clear();
  map.set(s[n - 1], n - 1);
  right[n - 1] = n;
  for (let i = n - 2; i >= 0; i--) {
    if (map.has(s[i])) {
      right[i] = map.get(s[i]);
    } else {
      right[i] = n;
    }
    map.set(s[i], i);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += (i - left[i]) * (right[i] - i);
  }
  return res;
};

//       0    1   2    3    4    5    6    7
//       L    E   E    T    C    O    D    E
//      1*8  2*1 1*5  4*5  5*4  6*3  7*2  5*1