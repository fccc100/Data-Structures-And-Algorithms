// 433. 最小基因变化
// 基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

// 假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

// 例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
// 另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 bank 中）

// 给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

// 注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。

// 示例 1：

// 输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
// 输出：1
// 示例 2：

// 输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// 输出：2
// 示例 3：

// 输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
// 输出：3

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let set = new Set();
  for (let i = 0; i < bank.length; i++) {
    set.add(bank[i]);
  }

  let visited = new Map();
  visited.set(start, 0);
  let queue = [];
  queue.push(start);
  while (queue.length) {
    let curStr = queue.shift();

    let nexts = [];

    let charArray = curStr.split('');
    for (let i = 0; i < charArray.length; i++) {
      let originChar = charArray[i];
      if (charArray[i] != 'A') {
        charArray[i] = 'A';
        nexts.push(charArray.join(''));
        charArray[i] = originChar;
      }

      if (charArray[i] != 'C') {
        charArray[i] = 'C';
        nexts.push(charArray.join(''));
        charArray[i] = originChar;
      }

      if (charArray[i] != 'G') {
        charArray[i] = 'G';
        nexts.push(charArray.join(''));
        charArray[i] = originChar;
      }

      if (charArray[i] != 'T') {
        charArray[i] = 'T';
        nexts.push(charArray.join(''));
        charArray[i] = originChar;
      }
    }

    for (let i = 0; i < nexts.length; i++) {
      if (set.has(nexts[i]) && !visited.has(nexts[i])) {
        queue.push(nexts[i]);
        visited.set(nexts[i], visited.get(curStr) + 1);
        if (nexts[i] == end) {
          return visited.get(nexts[i]);
        }
      }
    }
  }
  return -1;
};