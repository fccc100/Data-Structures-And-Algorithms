// 1382. 将二叉搜索树变平衡
// 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。如果有多种构造方法，请你返回任意一种。

// 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

// 示例 1：

// 输入：root = [1,null,2,null,3,null,4,null,null]
// 输出：[2,1,3,null,null,null,4]
// 解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。
// 示例 2：

// 输入: root = [2,1,3]
// 输出: [2,1,3]

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
 * @return {TreeNode}
 */
// 生成有序数组后重建树
var balanceBST = function(root) {

  let nums = [];
  function inorder(root) {
    if (root == null) {
      return;
    }

    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums, l, r) {
  if (l > r) {
    return null;
  }

  let mid = l + (r - l >> 1);
  let root = new TreeNode(nums[mid]);

  root.left = buildTree(nums, l, mid - 1);
  root.right = buildTree(nums, mid + 1, r);
  return root;
}

// 2.AVL
var balanceBST = function(root) {
  
}