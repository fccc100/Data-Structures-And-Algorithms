// 212. 单词搜索 II
// 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。

// 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

// 示例 1：

// 输入：board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// 输出：["eat","oath"]
// 示例 2：

// 输入：board = [["a","b"],["c","d"]], words = ["abcb"]
// 输出：[]

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// 暴力回溯，超时了
var findWords = function(board, words) {
  let m = board.length;
  if (m == 0) return false;
  let n = board[0].length;
  if (n == 0) return false;
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    set.add(words[i]);
  }

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let resSet = new Set();
  function dfs(i, j, path) {
    path += board[i][j];

    if (set.has(path)) {
      resSet.add(path);
    }

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let nextI = i + dir[k][0];
      let nextJ = j + dir[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
        dfs(nextI, nextJ, path);
      }
    }
    visited[i][j] = false;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, '');
    }
  }
  return [...resSet];
};

// 利用字典树判断当前遍历到的地方是否是单词前缀，进而剪枝
class TrieNode {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new TrieNode());
      }
      cur = cur.next.get(word[i]);
    }
    cur.isWord = true;
  }

  isPrefix(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        return false;
      }
      cur = cur.next.get(word[i]);
    }
    return true;
  }
}

var findWords = function(board, words) {
  let m = board.length;
  if (m == 0) return false;
  let n = board[0].length;
  if (n == 0) return false;
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let set = new Set();
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    set.add(words[i]);
    trie.add(words[i]);
  }


  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let resSet = new Set();
  function dfs(i, j, path) {
    path += board[i][j];
    if (!trie.isPrefix(path)) {
      return;
    }

    if (set.has(path)) {
      resSet.add(path);
    }

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let nextI = i + dir[k][0];
      let nextJ = j + dir[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
        dfs(nextI, nextJ, path);
      }
    }
    visited[i][j] = false;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, '');
    }
  }
  return [...resSet];
}