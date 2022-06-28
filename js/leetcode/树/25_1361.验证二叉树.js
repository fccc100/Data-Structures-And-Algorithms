// 1361. 验证二叉树
// 二叉树上有 n 个节点，按从 0 到 n - 1 编号，其中节点 i 的两个子节点分别是 leftChild[i] 和 rightChild[i]。

// 只有 所有 节点能够形成且 只 形成 一颗 有效的二叉树时，返回 true；否则返回 false。

// 如果节点 i 没有左子节点，那么 leftChild[i] 就等于 -1。右子节点也符合该规则。

// 注意：节点没有值，本问题中仅仅使用节点编号。

// 示例 1：

// 输入：n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
// 输出：true
// 示例 2：

// 输入：n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
// 输出：false
// 示例 3：

// 输入：n = 2, leftChild = [1,0], rightChild = [-1,-1]
// 输出：false
// 示例 4：

// 输入：n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
// 输出：false

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

//  3
//  [1,-1,-1]
//  [-1,-1,1]
//    0
//  1
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  let uf = new UnionFind(n);

  // 1.需要一个set记录左子节点，一个节点是左孩子，就不可能是右孩子了。
  let set = new Set();
  for (let i = 0; i < leftChild.length; i++) {
    if (leftChild[i] != -1) {
      set.add(leftChild[i]);
    }
  }

  // 遍历左右孩子
  for (let i = 0; i < leftChild.length; i++) {
    if (leftChild[i] > -1) {
      // 如果当前节点已经连通了，说明不能形成树，返回false，否则连接两点
      if (uf.isConnected(i, leftChild[i])) {
        return false;
      } else {
        uf.union(i, leftChild[i]);
      }
    }

    if (rightChild[i] > -1) {
      // 右孩子先判断是否已经是左孩子了，是返回false 
      if (set.has(rightChild[i])) {
        return false;
      }

      // 判断连通与左孩子一样
      if (uf.isConnected(i, rightChild[i])) {
        return false;
      } else {
        uf.union(i, rightChild[i]);
      }
    }
  }

  // 最后判断并查集是否只有一个连通分量
  return uf.connectedComponent() == 1;
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  findRoot(p) {
    while(p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  connectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  union(p, q) {
    let pRoot  = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }
}