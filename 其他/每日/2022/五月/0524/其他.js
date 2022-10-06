// 105. 从前序与中序遍历序列构造二叉树
var buildTree = function(preorder, inorder) {
  let n = preorder.length;

  // 记住中序遍历的值和索引的映射
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  function __buildTree(preorder, inorder, preorderLeft, preorderRight, inorderLeft, inorderRight) {
    if (preorderLeft > preorderRight) {
      return null;
    }

    let preorderRoot = preorderLeft;
    let inorderRoot = map.get(preorder[preorderRoot]);
    let leftSubTreeSize = inorderRoot - inorderLeft;

    let root = new TreeNode(preorder[preorderRoot]);
    root.left = __buildTree(preorder, inorder, preorderLeft + 1, preorderLeft + leftSubTreeSize, inorderLeft, inorderRoot - 1);
    root.right = __buildTree(preorder, inorder, preorderLeft + leftSubTreeSize + 1, preorderRight, inorderRoot + 1, inorderRight);
    return root;
  }

  return __buildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}