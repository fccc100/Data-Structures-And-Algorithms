// 776. 拆分二叉搜索树
// 给你一棵二叉搜索树（BST）的根结点 root 和一个整数 target 。请将该树按要求拆分为两个子树：其中一个子树结点的值都必须小于等于给定的目标值；
// 另一个子树结点的值都必须大于目标值；树中并非一定要存在值为 target 的结点。

// 除此之外，树中大部分结构都需要保留，也就是说原始树中父节点 p 的任意子节点 c ，假如拆分后它们仍在同一个子树中，那么结点 p 应仍为 c 的父结点。

// 返回 两个子树的根结点的数组 。

// 示例 1：

// 输入：root = [4,2,6,1,3,5,7], target = 2
// 输出：[[2,1],[4,3,6,null,null,5,7]]
// 示例 2:

// 输入: root = [1], target = 1
// 输出: [[1],[]]

        //          4
        //     2        6
        //  1     3  5      7


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
 * @param {number} target
 * @return {TreeNode[]}
 */
var splitBST = function(root, target) {
  // res[0]存放小于等于的子树，res[1]存放大于的子树
  let res = Array(2);
  
  // 分割以root为根的树，返回小子树和大子树
  function split(root, target) {
    if (root == null) return [null, null];

    // 当前值小于等于target，左子树肯定更小，但右子树可能还有比target小的
    if (root.val <= target) {
      res = split(root.right, target);
      root.right = res[0];
      res[0] = root;
      return res;
    } else {
      res = split(root.left, target);
      root.left = res[1];
      res[1] = root;
      return res;
    }
  }

  return split(root, target);
};
