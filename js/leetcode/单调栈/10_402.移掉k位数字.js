// 402. 移掉 K 位数字
// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

// 示例 1 ：

// 输入：num = "1432219", k = 3
// 输出："1219"
// 解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
// 示例 2 ：

// 输入：num = "10200", k = 1
// 输出："200"
// 解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 示例 3 ：

// 输入：num = "10", k = 2
// 输出："0"
// 解释：从原数字移除所有的数字，剩余为空就是 0 。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// 超内存
var removeKdigits = function (num, k) {
  if (!num) return '0'
  if (k == 0) return num;

  let stack = [];

  let delIndex = -1;
  for (let i = 0; i < num.length; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      if (num[i] * 1 < num[stack[stack.length - 1]] * 1) {
        delIndex = stack.pop();
        break;
      }
      stack.push(i);
    }
  }

  if (delIndex < 0) {
    delIndex = num.length - 1;
  }

  let newNum = num.slice(0, delIndex) + num.slice(delIndex + 1);
  let index = 0;
  while (newNum[index] == 0) {
    index++;
  }
  newNum = newNum.slice(index);
  return removeKdigits(newNum, k - 1);
};


// 2.
var removeKdigits = function (num, k) {
  if (!num) return '0'
  if (k == 0) return num;

  let stack = [];

  // 维护单调递增栈，遇到递减时弹栈 k--
  for (let i = 0; i < num.length; i++) {

    if (!stack.length) {
      if (num[i] == 0) continue;
      stack.push(num[i]);
    } else {
      while (k > 0 && stack.length && num[i] * 1 < stack[stack.length - 1] * 1) {
        stack.pop();
        k--;
      }

      stack.push(num[i]);
    }
  }

  // 现在都是递增的了，如果还要再删，那就从后面开始删
  while (k > 0) {
    stack.pop();
    k--;
  }

  // 去除前导零
  let res = stack.join('');
  let index = 0;
  while (res[index] == 0) {
    index++;
  }

  res = res.slice(index);
  if (!res) return '0';
  return res;
}