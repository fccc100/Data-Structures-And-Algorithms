// 863. 二叉树中所有距离为 K 的结点
// 给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 k 。

// 返回到目标结点 target 距离为 k 的所有结点的值的列表。 答案可以以 任何顺序 返回。

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// 输出：[7,4,1]
// 解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
// 示例 2:

// 输入: root = [1], target = 1, k = 3
// 输出: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  // 当前节点到父节点的映射
  let map = new Map();

  function dfs(root, parent) {
    if (root == null) {
      return;
    }

    map.set(root, parent);
    dfs(root.left, root);
    dfs(root.right, root);
  }

  dfs(root, null);

  let queue = [];
  let visited = new Set();
  queue.push(target);
  visited.add(target);

  let path = 0;
  let res = [];
  while (queue.length) {
    let len = queue.length;

    if (path == k) {
      for (let i = 0; i < len; i++) {
        res[i] = queue[i].val;
      }
      return res;
    }

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      if (curNode.left && !visited.has(curNode.left)) {
        queue.push(curNode.left);
        visited.add(curNode.left);
      }
      if (curNode.right && !visited.has(curNode.right)) {
        queue.push(curNode.right);
        visited.add(curNode.right);
      }
      if (map.get(curNode) != null && !visited.has(map.get(curNode))) {
        queue.push(map.get(curNode));
        visited.add(map.get(curNode));
      }
    }
    path++;
  }

  return [];
};