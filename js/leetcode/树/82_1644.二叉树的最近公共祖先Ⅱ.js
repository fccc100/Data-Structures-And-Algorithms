// 1644. 二叉树的最近公共祖先 II
// 给定一棵二叉树的根节点 root，返回给定节点 p 和 q 的最近公共祖先（LCA）节点。如果 p 或 q 之一 不存在 于该二叉树中，返回 null。树中的每个节点值都是互不相同的。

// 根据维基百科中对最近公共祖先节点的定义：“两个节点 p 和 q 在二叉树 T 中的最近公共祖先节点是 后代节点 中既包括 p 又包括 q 的最深节点（我们允许 一个节点为自身的一个后代节点 ）”。
// 一个节点 x 的 后代节点 是节点 x 到某一叶节点间的路径中的节点 y。

// 示例 1:

// 输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// 输出： 3
// 解释： 节点 5 和 1 的共同祖先节点是 3。
// 示例 2:

// 输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// 输出： 5
// 解释： 节点 5 和 4 的共同祖先节点是 5。根据共同祖先节点的定义，一个节点可以是自身的后代节点。
// 示例 3:

// 输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10
// 输出： null
// 解释： 节点 10 不存在于树中，所以返回 null。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!has(root, p) || !has(root, q)) {
    return null;
  }

  function dfs(root, p, q) {
    if (root == null || root == p || root == q) {
      return root;
    }

    let left = dfs(root.left, p, q);
    let right = dfs(root.right, p, q);

    return left == null ? right : right == null ? left : root;
  }

  return dfs(root, p, q);
};

function has(root, p) {
  if (root == null) {
    return false;
  }

  if (root == p) {
    return true;
  }

  return has(root.left, p) || has(root.right, p);
}

// 2.后序遍历
var lowestCommonAncestor = function (root, p, q) {
  let hasP = false;
  let hasQ = false;

  function dfs(root, p, q) {
    if (root == null) {
      return root;
    }

    let left = dfs(root.left, p, q);
    let right = dfs(root.right, p, q);

    if (root == p || root == q) {
      if (root == p) hasP = true;
      if (root == q) hasQ = true;
      return root;
    }

    if (left == null || right == null) {
      return left == null ? right : left;
    }
    return root;
  }

  let res = dfs(root, p, q);
  if (!hasP || !hasQ) {
    return null;
  }
  return res;
}