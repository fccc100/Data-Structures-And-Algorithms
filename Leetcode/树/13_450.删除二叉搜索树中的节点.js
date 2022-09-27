// 450. 删除二叉搜索树中的节点
// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。


// 示例 1:



// 输入：root = [5,3,6,2,4,null,7], key = 3
// 输出：[5,4,6,2,null,null,7]
// 解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。
// 一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
// 另一个正确答案是 [5,2,6,null,4,null,7]。


// 示例 2:

// 输入: root = [5,3,6,2,4,null,7], key = 0
// 输出: [5,3,6,2,4,null,7]
// 解释: 二叉树不包含值为 0 的节点
// 示例 3:

// 输入: root = [], key = 0
// 输出: []

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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  // 删除指定节点，返回删除后的根
  function __deleteNode(node) {
    if (node == null) return null;

    if (node.val > key) {
      node.left = deleteNode(node.left, key);
    } else if (node.val < key) {
      node.right = deleteNode(node.right, key);
    } else {
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
      // 找到删除节点的后继节点
      let successor = findMin(node.right);
      node.right = removeMin(node.right);
      successor.left = node.left;
      successor.right = node.right;
      node.left = node.right = null;
      return successor;
    }
    return node;
  }
  return __deleteNode(root);
};

function findMin(root) {
  if (root == null) return null;
  if (root.left == null) return root;
  return findMin(root.left);
}

// 删除以root为根的树中的最小节点，返回该节点
function removeMin(root) {
  if (root == null) return null;
  if (root.left == null) {
    return root.right;
  }
  root.left = removeMin(root.left);
  return root;
}