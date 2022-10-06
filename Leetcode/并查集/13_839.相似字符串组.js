// 839. 相似字符串组
// 如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。

// 例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "tars"，"rats"，或 "arts" 相似。

// 总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。

// 给你一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个字母异位词。请问 strs 中有多少个相似字符串组？

// 示例 1：

// 输入：strs = ["tars","rats","arts","star"]
// 输出：2
// 示例 2：

// 输入：strs = ["omv","ovm"]
// 输出：1

/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  let n = strs.length;
  let uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (uf.isConnected(i, j)) {
        continue;
      }

      if (check(strs[i], strs[j])) {
        uf.union(i, j);
      }
    }
  }
  return uf.getConnectedComponentCount();
};

function check(s1, s2) {
  if (s1.length != s2.length) {
    return false;
  }

  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      count++;
    }
  }
  return count == 0 || count == 2;
}

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  findRoot(p) {
    while(p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }

  getConnectedComponentCount() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}