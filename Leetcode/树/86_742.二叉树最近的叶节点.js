// 742. 二叉树最近的叶节点
// 给定一个 每个结点的值互不相同 的二叉树，和一个目标整数值 k，返回 树中与目标值 k  最近的叶结点 。 

// 与叶结点最近 表示在二叉树中到达该叶节点需要行进的边数与到达其它叶结点相比最少。而且，当一个结点没有孩子结点时称其为叶结点。

// 示例 1：

// 输入：root = [1, 3, 2], k = 1
// 输出： 2
// 解释： 2 和 3 都是距离目标 1 最近的叶节点。
// 示例 2：

// 输入：root = [1], k = 1
// 输出：1
// 解释：最近的叶节点是根结点自身。
// 示例 3：

// 输入：root = [1,2,3,4,null,null,null,5,null,6], k = 2
// 输出：3
// 解释：值为 3（而不是值为 6）的叶节点是距离结点 2 的最近结点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function(root, k) {
  let map = new Map();
  let targetNode = null;

  function dfs(root, parent) {
    if (root == null) {
      return;
    }

    if (root.val == k) {
      targetNode = root;
    }

    map.set(root, parent);
    dfs(root.left, root);
    dfs(root,right, root);
  }

  dfs(root, null);

  let queue = [];
  let visited = new Set();
  queue.push(targetNode);
  visited.add(targetNode);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      
      if (curNode.left == null && curNode.right == null) {
        return curNode;
      }

      if (curNode.left && !visited.has(curNode.left)) {
        queue.push(curNode.left);
        visited.add(curNode.left);
      }
      if (curNode.right && !visited.has(curNode.right)) {
        queue.push(curNode.right);
        visited.add(curNode.right);
      }

      let parent = map.get(curNode);
      if (parent && !visited.has(parent)) {
        queue.push(parent);
        visited.add(parent);
      }
    }
  }
  return null;
};