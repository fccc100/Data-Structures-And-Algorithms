// 272. 最接近的二叉搜索树值 II
// 给定二叉搜索树的根 root 、一个目标值 target 和一个整数 k ，返回BST中最接近目标的 k 个值。你可以按 任意顺序 返回答案。

// 题目 保证 该二叉搜索树中只会存在一种 k 个值集合最接近 target

// 示例 1：

// 输入: root = [4,2,5,1,3]，目标值 = 3.714286，且 k = 2
// 输出: [4,3]
// 示例 2:

// 输入: root = [1], target = 0.000000, k = 1
// 输出: [1]

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
 * @param {number} k
 * @return {number[]}
 */
// 先序遍历再排序
var closestKValues = function (root, target, k) {

  let vals = [];

  function preorder(root) {
    if (root == null) {
      return;
    }

    vals.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);

  vals.sort((a, b) => a - b);
  let temp = vals.slice();

  for (let i = 0; i < temp.length; i++) {
    temp[i] = [Math.abs(temp[i] - target), i];
  }

  temp.sort((a, b) => a[0] - b[0]);

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(vals[temp[i][1]]);
  }
  return res;
};

// 既然是二叉搜索树，直接中序遍历，结果就是升序的
var closestKValues = function (root, target, k) {

  let vals = [];

  function inorder(root) {
    if (root == null) {
      return;
    }

    inorder(root.left);
    vals.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  let minIndex = -1;
  let min = Infinity;
  for (let i = 0; i < vals.length; i++) {
    if (Math.abs(vals[i] - target) < min) {
      minIndex = i;
      min = Math.abs(vals[i] - target);
    }
  }
  
  let res = [];

  let l = minIndex;
  let r = minIndex;
  
  while (k > 0) {
    let cur = -1;
    if (l < 0) {
      cur = r;
      r++;
    } else if (r >= vals.length) {
      cur = l;
      l--;
    } else if (Math.abs(vals[l] - target) < Math.abs(vals[r] - target)) {
      cur = l;
      l--;
      if (r == minIndex) r++;
    } else {
      cur = r;
      r++;
      if (l == minIndex) l--;
    }

    res.push(vals[cur]);
    k--;
  }

  return res;
};