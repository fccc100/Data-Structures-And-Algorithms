// 844. 比较含退格的字符串
// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 示例 1：

// 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：s 和 t 都会变成 "ac"。
// 示例 2：

// 输入：s = "ab##", t = "c#d#"
// 输出：true
// 解释：s 和 t 都会变成 ""。
// 示例 3：

// 输入：s = "a#c", t = "b"
// 输出：false
// 解释：s 会变成 "c"，但 t 仍然是 "b"。
 

// 提示：

// 1 <= s.length, t.length <= 200
// s 和 t 只含有小写字母以及字符 '#'
 

// 进阶：

// 你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 使用两个栈
var backspaceCompare = function(s, t) {
  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '#') {
      stack1.pop();
    } else {
      stack1.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] == '#') {
      stack2.pop();
    } else {
      stack2.push(t[i]);
    }
  }

  if (stack1.length != stack2.length) {
    return false;
  }

  let i = 0, j = 0;
  while(i < stack1.length) {
    if (stack1[i] != stack2[j]) {
      return false;
    }
    i++;
    j++;
  }
  return true;
};

// 进阶
var backspaceCompare = function(s, t) {
  
}

