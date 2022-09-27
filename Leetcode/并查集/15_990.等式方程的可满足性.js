// 990. 等式方程的可满足性
// 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。

// 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 

// 示例 1：

// 输入：["a==b","b!=a"]
// 输出：false
// 解释：如果我们指定，a = 1 且 b = 1，那么可以满足第一个方程，但无法满足第二个方程。没有办法分配变量同时满足这两个方程。
// 示例 2：

// 输入：["b==a","a==b"]
// 输出：true
// 解释：我们可以指定 a = 1 且 b = 1 以满足满足这两个方程。
// 示例 3：

// 输入：["a==b","b==c","a==c"]
// 输出：true
// 示例 4：

// 输入：["a==b","b!=c","c==a"]
// 输出：false
// 示例 5：

// 输入：["c==c","b==d","x!=z"]
// 输出：true

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  findRoot(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }
    this.parent[pRoot] = qRoot;
  }
}

/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let uf = new UnionFind(26);
  
  // 并查集将相等的字母连接
  for (let i = 0; i < equations.length; i++) {
    let c1 = equations[i][0].charCodeAt() - 'a'.charCodeAt();
    let c2 = equations[i][3].charCodeAt() - 'a'.charCodeAt();
    if (uf.isConnected(c1, c2)) {
      continue;
    }
    if (equations[i][1] == '=') {
      uf.union(c1, c2);
    }
  }

  // 如果已经连接的字母却出现了 不等 ，返回false
  for (let i = 0; i < equations.length; i++) {
    let c1 = equations[i][0].charCodeAt() - 'a'.charCodeAt();
    let c2 = equations[i][3].charCodeAt() - 'a'.charCodeAt();
    if (equations[i][1] == '!') {
      if (uf.isConnected(c1, c2)) {
        return false;
      }
    }
  }
  return true;
};


class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  findRoot(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }

    this.parent[pRoot] = qRoot;
  }
}
/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  let uf = new UnionFind(26);
  for (let i = 0; i < equations.length; i++) {
    let c1 = equations[i][0].charCodeAt() - 'a'.charCodeAt();
    let c2 = equations[i][3].charCodeAt() - 'a'.charCodeAt();
    if (uf.isConnected(c1, c2)) {
      continue;
    }
    if (equations[i][1] == '=') {
      uf.union(c1, c2);
    }
  }
  for (let i = 0; i < equations.length; i++) {
    let c1 = equations[i][0].charCodeAt() - 'a'.charCodeAt();
    let c2 = equations[i][3].charCodeAt() - 'a'.charCodeAt();
    if (equations[i][1] == '!') {
      if (uf.isConnected(c1, c2)) {
        return false;
      }
    }
  }
  return true;
};