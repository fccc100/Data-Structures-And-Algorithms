// 1485. 克隆含随机指针的二叉树
// 给你一个二叉树，树中每个节点都含有一个附加的随机指针，该指针可以指向树中的任何节点或者指向空（null）。

// 请返回该树的 深拷贝 。

// 该树的输入/输出形式与普通二叉树相同，每个节点都用 [val, random_index] 表示：

// val：表示 Node.val 的整数
// random_index：随机指针指向的节点（在输入的树数组中）的下标；如果未指向任何节点，则为 null 。
// 该树以 Node 类的形式给出，而你需要以 NodeCopy 类的形式返回克隆得到的树。NodeCopy 类和Node 类定义一致。

// 示例 1：

// 输入：root = [[1,null],null,[4,3],[7,0]]
// 输出：[[1,null],null,[4,3],[7,0]]
// 解释：初始二叉树为 [1,null,4,7] 。
// 节点 1 的随机指针指向 null，所以表示为 [1, null] 。
// 节点 4 的随机指针指向 7，所以表示为 [4, 3] 其中 3 是树数组中节点 7 对应的下标。
// 节点 7 的随机指针指向 1，所以表示为 [7, 0] 其中 0 是树数组中节点 1 对应的下标。
// 示例 2：

// 输入：root = [[1,4],null,[1,0],null,[1,5],[1,5]]
// 输出：[[1,4],null,[1,0],null,[1,5],[1,5]]
// 解释：节点的随机指针可以指向它自身。
// 示例 3：

// 输入：root = [[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]]
// 输出：[[1,6],[2,5],[3,4],[4,3],[5,2],[6,1],[7,0]]

/**
 * // Definition for a Node.
 * function Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
  if (root == null) {
    return null;
  }

  let map = new Map();

  // 先复制出整棵树
  function copy(root) {
    if (root == null) {
      return;
    }

    copy(root.left);
    copy(root.right);

    let copyNode = new NodeCopy(root.val);
    if (root.left == null) {
      copyNode.left = null;
    } else {
      copyNode.left = map.get(root.left);
    }

    if (root.right == null) {
      copyNode.right = null;
    } else {
      copyNode.right = map.get(root.right);
    }

    map.set(root, copyNode);
    return copyNode;
  }

  let copyRoot = copy(root);

  // 再用一次遍历添加随机指针
  function preorder(root) {
    if (root == null) {
      return;
    }

    if (root.random == null) {
      map.get(root).random = null;
    } else {
      map.get(root).random = map.get(root.random);
    }
    preorder(root.left);
    preorder(root.right);
  }

  preorder(root);
  return copyRoot;
};