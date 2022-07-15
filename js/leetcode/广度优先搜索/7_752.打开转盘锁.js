// 752. 打开转盘锁
// 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

// 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

// 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

// 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

// 示例 1:

// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// 输出：6
// 解释：
// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
// 因为当拨动到 "0102" 时这个锁就会被锁定。
// 示例 2:

// 输入: deadends = ["8888"], target = "0009"
// 输出：1
// 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。
// 示例 3:

// 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// 输出：-1
// 解释：无法旋转到目标数字且不被锁定。

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let deadSet = new Set();
  for (let i = 0; i < deadends.length; i++) {
    deadSet.add(deadends[i]);
  }

  if (deadSet.has(target)) return -1;
  if (deadSet.has('0000')) return -1;
  if (target == '0000') return 0;

  let visited = new Map();
  Map.set('0000', 0);
  let queue = [];
  queue.push('0000');

  while(queue.length) {
    let curStr = queue.shift();

    let nexts = [];

    let charArray = curStr.split('');
    for (let i = 0; i < charArray.length; i++) {
      let originChar = charArray[i];

      charArray[i] = (Number(charArray[i]) + 1) % 10;
      nexts.push(String(charArray.join('')));
      charArray[i] = originChar;

      charArray[i] = (Number(charArray[i]) + 9) % 10;
      nexts.push(String(charArray.join('')));
      charArray[i] = originChar;
    }

    for (let i = 0; i < nexts.length; i++) {
      if (!deadSet.has(nexts[i]) && !visited.has(nexts[i])) {
        queue.push(nexts[i]);
        visited.set(nexts[i], visited.get(curStr) + 1);
        if (nexts[i] == target) {
          return visited.get(nexts[i]);
        }
      }
    }
  }
  return -1;
};