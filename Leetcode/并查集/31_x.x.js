// 1258. 近义词句子
// 给你一个近义词表 synonyms 和一个句子 text ， synonyms 表中是一些近义词对 ，你可以将句子 text 中每个单词用它的近义词来替换。

// 请你找出所有用近义词替换后的句子，按 字典序排序 后返回。

// 示例 1：

// 输入：
// synonyms = [["happy","joy"],["sad","sorrow"],["joy","cheerful"]],
// text = "I am happy today but was sad yesterday"
// 输出：
// ["I am cheerful today but was sad yesterday",
// "I am cheerful today but was sorrow yesterday",
// "I am happy today but was sad yesterday",
// "I am happy today but was sorrow yesterday",
// "I am joy today but was sad yesterday",
// "I am joy today but was sorrow yesterday"

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  find(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) == this.find(q);
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot == qRoot) {
      return;
    }
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }

  getSet(index) {
    let res = [];
    let root = this.find(index);
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == root) {
        res.push(i);
      }
    }
    return res;
  }
}

/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function (synonyms, text) {
  let wordToIndex = new Map();
  let indexToWord = new Map();
  let index = 0;
  for (let i = 0; i < synonyms.length; i++) {
    if (!wordToIndex.has(synonyms[i][0])) {
      wordToIndex.set(synonyms[i][0], index);
      indexToWord.set(index, synonyms[i][0]);
      index++;
    }
    if (!wordToIndex.has(synonyms[i][1])) {
      wordToIndex.set(synonyms[i][1], index);
      indexToWord.set(index, synonyms[i][1])
      index++;
    }
  }


  let uf = new UnionFind(index);
  for (let i = 0; i < synonyms.length; i++) {
    uf.union(wordToIndex.get(synonyms[i][0]), wordToIndex.get(synonyms[i][1]));
  }

  let textArr = text.split(' ');
  let res = [text];
  for (let i = 0; i < textArr.length; i++) {
    if (!wordToIndex.has(textArr[i])) {
      continue;
    }

    let index = wordToIndex.get(textArr[i]);

    let set = uf.getSet(index);
    console.log(set)
    let originText = textArr[i];
    for (let j = 0; j < set.length; j++) {
      if (set[j] == index) {
        continue;
      }
      textArr[i] = indexToWord.get(set[j]);
      console.log(textArr.join(' '))
      res.push(textArr.join(' '));
    }
    textArr[i] = originText;
  }

  res.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
  return res;
};