// 255. 验证前序遍历序列二叉搜索树
// 给定一个 无重复元素 的整数数组 preorder ， 如果它是以二叉搜索树的先序遍历排列 ，返回 true 。

// 示例 1：

// 输入: preorder = [5,2,1,3,6]
// 输出: true
// 示例 2：

// 输入: preorder = [5,2,6,1,3]
// 输出: false

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  // 单调递减栈
  let stack = [];
  let last = -Infinity;
  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] <= last) {
      return false;
    }

    while (stack.length && preorder[i] > stack[stack.length - 1]) {
      last = stack.pop();
    }
    stack.push(preorder[i]);
  }
  return true;
};
