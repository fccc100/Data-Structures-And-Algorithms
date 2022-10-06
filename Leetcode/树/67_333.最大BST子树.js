// 333. 最大 BST 子树
// 给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，并返回该子树的大小。其中，最大指的是子树节点数最多的。

// 二叉搜索树（BST）中的所有节点都具备以下属性：

// 左子树的值小于其父（根）节点的值。

// 右子树的值大于其父（根）节点的值。

// 注意：子树必须包含其所有后代。

// 示例 1：

// 输入：root = [10,5,15,1,8,null,7]
// 输出：3
// 解释：本例中最大的 BST 子树是高亮显示的子树。返回值是子树的大小，即 3 。
// 示例 2：

// 输入：root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]
// 输出：2

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
 * @return {number}
 */
var largestBSTSubtree = function(root) {
  if (root == null) {
    return 0;
  }

  if (isBstTree(root)) {
    return nodeCount(root);
  }

  return Math.max(largestBSTSubtree(root.left), largestBSTSubtree(root.right));
};

// 计算节点数量
function nodeCount(root) {
  function dfs(node) {
    if (node == null) {
      return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    return left + right + 1; 
  }
  return dfs(root);
}

// 判断是否二叉搜索树
function isBstTree(root) {
  
  function dfs(node, min, max) {
    if (node == null) {
      return true;
    }
    if (node.val <= min || node.val >= max) {
      return false;
    }

    let isLeftBst = dfs(node.left, min, node.val);
    let isRightBst = dfs(node.right, node.val, max);
    return isLeftBst && isRightBst;
  }

  return dfs(root, -Infinity, Infinity);
}