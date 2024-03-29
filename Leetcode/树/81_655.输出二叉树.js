// 655. 输出二叉树
// 给你一棵二叉树的根节点 root ，请你构造一个下标从 0 开始、大小为 m x n 的字符串矩阵 res ，用以表示树的 格式化布局 。构造此格式化布局矩阵需要遵循以下规则：

// 树的 高度 为 height ，矩阵的行数 m 应该等于 height + 1 。
// 矩阵的列数 n 应该等于 2height+1 - 1 。
// 根节点 需要放置在 顶行 的 正中间 ，对应位置为 res[0][(n-1)/2] 。
// 对于放置在矩阵中的每个节点，设对应位置为 res[r][c] ，将其左子节点放置在 res[r+1][c-2height-r-1] ，右子节点放置在 res[r+1][c+2height-r-1] 。
// 继续这一过程，直到树中的所有节点都妥善放置。
// 任意空单元格都应该包含空字符串 "" 。
// 返回构造得到的矩阵 res 。

// 示例 1：

// 输入：root = [1,2]
// 输出：
// [["","1",""],
//  ["2","",""]]
// 示例 2：

// 输入：root = [1,2,3,null,4]
// 输出：
// [["","","","1","","",""],
//  ["","2","","","","3",""],
//  ["","","4","","","",""]]

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
 * @return {string[][]}
 */
var printTree = function (root) {
  let height = depth(root) - 1;
  let row = height + 1;
  let col = 2 ** (height + 1) - 1;
  let res = Array(row);
  for (let i = 0; i < res.length; i++) {
    res[i] = Array(col).fill('');
  }

  function fill(root, row, col) {
    if (root == null) {
      return;
    }

    res[row][col] = root.val + '';
    fill(root.left, row + 1, col - 2 ** (height - row - 1));
    fill(root.right, row + 1, col + 2 ** (height - row - 1));
  }

  fill(root, 0, col >> 1);
  return res;
};

function depth(root) {
  if (root == null) {
    return 0;
  }

  return Math.max(depth(root.left), depth(root.right)) + 1;
}