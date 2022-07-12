// 剑指 Offer 37. 序列化二叉树
// 请实现两个函数，分别用来序列化和反序列化二叉树。

// 你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

// 提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

// 示例：

// 输入：root = [1,2,3,null,null,4,5]
// 输出：[1,2,3,null,null,4,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 序列化
var serialize = function(root) {
  return __serialize(root, '');
};

function __serialize(root, str) {
  if (root == null) {
    str += 'null,';
  } else {
    str += root.val + ',';
    str = __serialize(root.left, str);
    str = __serialize(root.right, str);
  }
  return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// 反序列化
var deserialize = function(data) {
  data = data.split(',');
  return __deserialize(data);
};

function __deserialize(data) {
  if (data[0] == 'null') {
    data.shift();
    return null;
  } else {
    let node = new TreeNode(data[0]);
    data.shift();
    node.left = __deserialize(data);
    node.right = __deserialize(data);
    return node;
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */