// 106. 从中序与后序遍历序列构造二叉树
// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

// 示例 1:

// 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// 输出：[3,9,20,null,null,15,7]
// 示例 2:

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]

var buildTree = function(inorder, postorder) {
  let n = inorder.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  function __buildTree(inorder, postorder, inorderLeft, inorderRight, postorderLeft, postorderRight) {
    if (postorderLeft > postorderRight) {
      return null;
    }

    // 找到后序遍历根节点
    let postorderRoot = postorderRight;

    // 找到中序遍历根节点
    let inorderRoot = map.get(postorder[postorderRoot]);

    // 左子树节点个数
    let leftSubTreeSize = inorderRoot - inorderLeft;

    // 创建根节点
    let root = new TreeNode(postorder[postorderRoot]);

    root.left = __buildTree(inorder, postorder, inorderLeft, inorderRoot - 1, postorderLeft, postorderLeft + leftSubTreeSize - 1);
    root.right = __buildTree(inorder, postorder, inorderRoot + 1, inorderRight, postorderLeft + leftSubTreeSize, postorderRight - 1);
    return root;
  }

  return __buildTree(inorder, postorder, 0, n - 1, 0, n - 1);
}