// 剑指 Offer II 048. 序列化与反序列化二叉树
// 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

// 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

// 示例 1：

// 输入：root = [1,2,3,null,null,4,5]
// 输出：[1,2,3,null,null,4,5]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：

// 输入：root = [1,2]
// 输出：[1,2]

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
var serialize = function (root) {
  return __serialize(root, '');
};

function __serialize(node, str) {
  if (node == null) {
    str += 'null,';
  } else {
    str += node.val + ',';
    str = __serialize(node.left, str);
    str = __serialize(node.right, str);
  }

  return str;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = data.split(',');

  return __deserialize(data);
};

function __deserialize(data) {
  if (data[0] == 'null') {
    data.shift();
    return null;
  }

  let node = new TreeNode(data[0]);
  data.shift();
  node.left = __deserialize(data);
  node.right = __deserialize(data);

  return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */