// 1740. 找到二叉树中的距离
// 给定一棵二叉树的根节点 root 以及两个整数 p 和 q ，返回该二叉树中值为 p 的结点与值为 q 的结点间的 距离 。

// 两个结点间的 距离 就是从一个结点到另一个结点的路径上边的数目。

// 示例 1：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 0
// 输出：3
// 解释：在 5 和 0 之间有 3 条边：5-3-1-0
// 示例 2：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 7
// 输出：2
// 解释：在 5 和 7 之间有 2 条边：5-2-7
// 示例 3：

// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 5
// 输出：0
// 解释：一个结点与它本身之间的距离为 0

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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
 var findDistance = function(root, p, q) {
  let parent = findCommonParent(root, p, q);

  return findPath(parent, p) + findPath(parent, q);
};

// 查找从root到p的距离
function findPath(root, p) {
  if (root == null) {
    return -1;
  }
  if (root.val == p) {
    return 0;
  }

  let l = findPath(root.left, p);
  let r = findPath(root.right, p);
  if (l < 0 && r < 0) {
    return -1;
  } else {
    return l >= 0 ? l + 1 : r + 1;
  }
}

// 查找公共祖先
function findCommonParent(root, p, q) {
  if (root == null || root.val == p || root.val == q) {
    return root;
  }

  let l = findCommonParent(root.left, p, q);
  let r = findCommonParent(root.right, p, q);

  return l == null ? r : r == null ? l : root;
}