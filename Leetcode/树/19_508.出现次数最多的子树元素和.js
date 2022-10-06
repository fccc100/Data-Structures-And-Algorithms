// 508. 出现次数最多的子树元素和
// 给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

// 一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

// 示例 1：

// 输入: root = [5,2,-3]
// 输出: [2,-3,4]
// 示例 2：

// 输入: root = [5,2,-5]
// 输出: [2]

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
 * @return {number[]}
 */
// 先求每个节点的元素和放入数组，再用map计算频次
var findFrequentTreeSum = function (root) {
  let sums = [];

  function dfs(node) {
    if (node == null) {
      return 0;
    }

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);

    let sum = leftSum + rightSum + node.val;
    sums.push(sum);
    return sum;
  }

  dfs(root);
  let map = new Map();
  let max = 0;
  for (let i = 0; i < sums.length; i++) {
    if (!map.has(sums[i])) {
      map.set(sums[i], 1);
    } else {
      map.set(sums[i], map.get(sums[i]) + 1);
    }
    max = Math.max(max, map.get(sums[i]));
  }
  let res = [];
  for (let entry of map) {
    if (entry[1] == max) {
      res.push(entry[0]);
    }
  }
  return res;
};