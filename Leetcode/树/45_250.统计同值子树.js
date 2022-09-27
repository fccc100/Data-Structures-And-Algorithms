// 250. 统计同值子树
// 给定一个二叉树，统计该二叉树数值相同的子树个数。

// 同值子树是指该子树的所有节点都拥有相同的数值。

// 示例：

// 输入: root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// 输出: 4

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
var countUnivalSubtrees = function(root) {
  let res = 0;

  // 返回node为根的树是否是同值子树
  function dfs(node) {
    if (node == null) {
      return true;
    }
    // 如果是叶子节点，肯定是同值子树，+1
    if (node.left == null && node.right == null) {
      res++;
      return true;
    }

    // 分别求左右子树的同值子树个数
    let left = dfs(node.left);
    let right = dfs(node.right);

    // 如果左右子树都是同值子树，看看当前节点值与左右孩子值是不是一样
    if (left && right) {
      if ((node.left && node.left.val != node.val) || (node.right && node.right.val != node.val)) {
        return false;
      } else {
        res++;
        return true;
      }
    }
    return false;
  }

  dfs(root);
  return res;
};