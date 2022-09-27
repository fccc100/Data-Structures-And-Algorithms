// 1483. 树节点的第 K 个祖先
// 给你一棵树，树上有 n 个节点，按从 0 到 n-1 编号。树以父节点数组的形式给出，其中 parent[i] 是节点 i 的父节点。树的根节点是编号为 0 的节点。

// 树节点的第 k 个祖先节点是从该节点到根节点路径上的第 k 个节点。

// 实现 TreeAncestor 类：

// TreeAncestor（int n， int[] parent） 对树和父数组中的节点数初始化对象。
// getKthAncestor(int node, int k) 返回节点 node 的第 k 个祖先节点。如果不存在这样的祖先节点，返回 -1 。

// 示例 1：

// 输入：
// ["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"]
// [[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]

// 输出：
// [null,1,0,-1]

// 解释：
// TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);

// treeAncestor.getKthAncestor(3, 1);  // 返回 1 ，它是 3 的父节点
// treeAncestor.getKthAncestor(5, 2);  // 返回 0 ，它是 5 的祖父节点
// treeAncestor.getKthAncestor(6, 3);  // 返回 -1 因为不存在满足要求的祖先节点

/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  this.parent = parent;
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  while (k > 0) {
    node = this.parent[node];
    if (node == -1) return -1;
    k--;
  }

  return node;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */

// 2.倍增
/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    dp[i].push(parent[i]);
  }

  for (let j = 1; true; j++) {
    let allNeg = true;
    for (let i = 0; i < n; i++) {
      let t = dp[i][j - 1] != -1 ? dp[dp[i][j - 1]][j - 1] : -1;
      dp[i].push(t);
      if (t != -1) allNeg = false;
    }
    if (allNeg) break;
  }

  this.dp = dp;
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
TreeAncestor.prototype.getKthAncestor = function (node, k) {
  let res = node, pos = 0;
  while (k && res != -1) {
    if (pos >= this.dp[res].length) return -1;
    if (k & 1) res = this.dp[res][pos];
    k >>= 1, pos++;
  }
  return res;
};

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
