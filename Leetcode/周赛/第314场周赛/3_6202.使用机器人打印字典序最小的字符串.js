// 6202. 使用机器人打印字典序最小的字符串
// 给你一个字符串 s 和一个机器人，机器人当前有一个空字符串 t 。执行以下操作之一，直到 s 和 t 都变成空字符串：

// 删除字符串 s 的 第一个 字符，并将该字符给机器人。机器人把这个字符添加到 t 的尾部。
// 删除字符串 t 的 最后一个 字符，并将该字符给机器人。机器人将该字符写到纸上。
// 请你返回纸上能写出的字典序最小的字符串。

// 示例 1：

// 输入：s = "zza"
// 输出："azz"
// 解释：用 p 表示写出来的字符串。
// 一开始，p="" ，s="zza" ，t="" 。
// 执行第一个操作三次，得到 p="" ，s="" ，t="zza" 。
// 执行第二个操作三次，得到 p="azz" ，s="" ，t="" 。
// 示例 2：

// 输入：s = "bac"
// 输出："abc"
// 解释：用 p 表示写出来的字符串。
// 执行第一个操作两次，得到 p="" ，s="c" ，t="ba" 。
// 执行第二个操作两次，得到 p="ab" ，s="c" ，t="" 。
// 执行第一个操作，得到 p="ab" ，s="" ，t="c" 。
// 执行第二个操作，得到 p="abc" ，s="" ，t="" 。
// 示例 3：

// 输入：s = "bdda"
// 输出："addb"
// 解释：用 p 表示写出来的字符串。
// 一开始，p="" ，s="bdda" ，t="" 。
// 执行第一个操作四次，得到 p="" ，s="" ，t="bdda" 。
// 执行第二个操作四次，得到 p="addb" ，s="" ，t="" 。

/**
* @param {string} s
* @return {string}
*/
var robotWithString = function (s) {
  let n = s.length;
  let map = Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    map[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  let res = '';
  let stack = [];
  let min = 0;
  for (let i = 0; i < n; i++) {
    map[s[i].charCodeAt() - 'a'.charCodeAt()]--;
    for (let j = 0; j < map.length; j++) {
      if (map[j] > 0) {
        min = j;
        break;
      }
    }

    stack.push(s[i]);
    while (stack.length && stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt() <= min) {
      res += stack.pop();
    }
  }
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};

/**
* @param {string} s
* @return {string}
*/
var robotWithString = function (s) {
  let n = s.length;
  let map = Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    map[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }
  
  let res = '';
  let stack = [];
  let min = 0;
  for (let i = 0; i < n; i++) {
    map[s[i].charCodeAt() - 'a'.charCodeAt()]--;
    while (min < 26 && map[min] == 0) {
      min++;
    }

    stack.push(s[i]);
    while (stack.length && stack[stack.length - 1].charCodeAt() - 'a'.charCodeAt() <= min) {
      res += stack.pop();
    }
  }
  while (stack.length) {
    res += stack.pop();
  }
  return res;
};
