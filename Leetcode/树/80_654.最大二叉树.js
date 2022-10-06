// 654. 最大二叉树
// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:

// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。

// 示例 1：

// 输入：nums = [3,2,1,6,0,5]
// 输出：[6,3,5,null,2,0,null,null,1]
// 解释：递归调用如下所示：
// - [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。
//     - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。
//         - 空数组，无子节点。
//         - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。
//             - 空数组，无子节点。
//             - 只有一个元素，所以子节点是一个值为 1 的节点。
//     - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。
//         - 只有一个元素，所以子节点是一个值为 0 的节点。
//         - 空数组，无子节点。
// 示例 2：

// 输入：nums = [3,2,1]
// 输出：[3,null,2,null,1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  return buildTree(nums, 0, nums.length - 1);
};

function buildTree(nums, l, r) {
  if (l > r) {
    return null;
  }

  let max = -Infinity;
  let maxIndex = -1;
  for (let i = l; i <= r; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }

  let root = new TreeNode(max);
  root.left = buildTree(nums, l, maxIndex - 1);
  root.right = buildTree(nums, maxIndex + 1, r);
  return root;
}