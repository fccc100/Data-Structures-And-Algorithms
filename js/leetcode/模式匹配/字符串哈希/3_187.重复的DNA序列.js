// 187. 重复的DNA序列
// DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

// 例如，"ACGAATTCCG" 是一个 DNA序列 。
// 在研究 DNA 时，识别 DNA 中的重复序列非常有用。

// 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]

// 哈希表
function findRepeatedDnaSequences(s) {
  let set = new Set();
  let res = new Set();
  for (let i = 0; i <= s.length - 10; i++) {
    let s1 = s.substr(i, 10);
    if (set.has(s1)) {
      res.add(s1);
    } else {
      set.add(s1);
    }
  }

  return [...res];
}