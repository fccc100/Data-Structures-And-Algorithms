// 1660. 纠正二叉树
// 你有一棵二叉树，这棵二叉树有个小问题，其中有且只有一个无效节点，它的右子节点错误地指向了与其在同一层且在其右侧的一个其他节点。

// 给定一棵这样的问题二叉树的根节点 root ，将该无效节点及其所有子节点移除（除被错误指向的节点外），然后返回新二叉树的根结点。

// 自定义测试用例：

// 测试用例的输入由三行组成：

// TreeNode root
// int fromNode （在 correctBinaryTree 中不可见）
// int toNode （在 correctBinaryTree 中不可见）
// 当以 root 为根的二叉树被解析后，值为 fromNode 的节点 TreeNode 将其右子节点指向值为 toNode 的节点 TreeNode 。然后， root 传入 correctBinaryTree 的参数中。

// 示例 1:

// 输入: root = [1,2,3], fromNode = 2, toNode = 3
// 输出: [1,null,3]
// 解释: 值为 2 的节点是无效的，所以移除之。
// 示例 2:

// 输入: root = [8,3,1,7,null,9,4,2,null,null,null,5,6], fromNode = 7, toNode = 4
// 输出: [8,3,1,null,null,9,4,null,null,5,6]
// 解释: 值为 7 的节点是无效的，所以移除这个节点及其子节点 2。

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
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
 */
var correctBinaryTree = function (root) {
  if (root == null) return null;

  let targetNode = null;

  // bfs找到错误节点
  let queue = [];
  queue.push(root);
  while (queue.length && targetNode == null) {
    let len = queue.length;

    let map = new Map();
    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();

      if (curNode.left) {
        queue.push(curNode.left);
      }

      // 已经找到错误节点
      if (map.has(curNode)) {
        targetNode = map.get(curNode);
        break;
      }

      if (curNode.right) {
        map.set(curNode.right, curNode);
        queue.push(curNode.right);
      }
    }
  }

  // 从以root为根的树中删除target
  function remove(root, target) {
    if (root == null) {
      return null;
    }
    if (root == target) {
      return null;
    }

    root.left = remove(root.left, target);
    root.right = remove(root.right, target);
    return root;
  }

  return remove(root, targetNode);
};