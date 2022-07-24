// 536. 从字符串生成二叉树
// 你需要用一个包括括号和整数的字符串构建一棵二叉树。

// 输入的字符串代表一棵二叉树。它包括整数和随后的 0 、1 或 2 对括号。整数代表根的值，一对括号内表示同样结构的子树。

// 若存在子结点，则从左子结点开始构建。

// 示例 1:

// 输入： s = "4(2(3)(1))(6(5))"
// 输出： [4,2,6,3,1,5]
// 示例 2:

// 输入： s = "4  (2(3)(1))  (6(5)(7))"
// 输出： [4,2,6,3,1,5,7]
// 示例 3:

// 输入： s = "-4  (2(3)(1)) (6(5)(7))"
// 输出： [-4,2,6,3,1,5,7]

//         4
//      2     6
//   3    1  5

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 输入： s = "4  (  2(3)(1)  )  (6(5)(7))"

/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
  // 遇上数字，直接创建节点返回
  if (!isNaN(s)) {
    return new TreeNode(s);
  };

  // 找到当前节点的数值，从第一位到第一个 ( 的位置
  let numEnd = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      numEnd = i;
      break;
    }
  }

  // 创建根节点
  let root = new TreeNode(s.slice(0, numEnd));

  // 计算左右节点对应的字符串
  let leftStart = numEnd;
  let leftEnd = s.length;
  let left = 0;
  for (let i = leftStart; i < s.length; i++) {
    if (s[i] == '(') {
      left++;
    }
    if (s[i] == ')') {
      left--;
    }
    if (left == 0) {
      leftEnd = i;
      break;
    }
  }

  let leftTree = s.slice(leftStart + 1, leftEnd);
  root.left = str2tree(leftTree);

  let rightTree = s.slice(leftEnd + 2, s.length - 1);
  root.right = str2tree(rightTree);
  return root;
};