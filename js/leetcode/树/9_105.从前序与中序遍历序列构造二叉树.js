// 105. 从前序与中序遍历序列构造二叉树
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 示例 1:

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

var buildTree = function(preorder, inorder) {
  let map = new Map();
  function buildTree(preorder, inorder, preorderLeft, preorderRight, inorderLeft, inorderRight) {
    if (preorderLeft > preorderRight) {
      return null;
    }

    let preorderRoot = preorderLeft;
    let inorderRoot = map.get(preorder[preorderRoot]);

    let root = new TreeNode(preorder[preorderRoot]);

    let leftSubtreeSize = inorderRoot - inorderLeft;

    root.left = buildTree(preorder, inorder, preorderLeft + 1, preorderLeft + leftSubtreeSize, inorderLeft, inorderRoot - 1);
    root.right = buildTree(preorder, inorder, preorderLeft + leftSubtreeSize + 1, preorderRight, inorderRoot + 1, inorderRight);
    return root;
  }

  let n = preorder.length;
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }
  return buildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}

var buildTree = function(preorder, inorder) {
  let n = preorder.length;

  // 中序遍历索引映射，方便查询根节点所在索引
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i);
  }

  // 递归函数：根据中序遍历和先序遍历的左右边界构建树
  function __buildTree(preorder, inorder, preorderLeft, preOrderRight, inorderLeft, inorderRight) {
    if (preorderLeft > preOrderRight) {
      return null;
    }

    // 找到先序遍历和中序遍历中根节点的位置
    // 先序遍历根节点就是第一个节点
    let preorderRoot = preorderLeft;

    // 从map中找中序遍历的根节点
    let inorderRoot = map.get(preorder[preorderRoot]);

    // 创建根节点
    let root = new TreeNode(preorder[preorderRoot]);

    // 先计算当前根节点左子树有几个节点
    // 中序遍历根节点索引 - 中序遍历左边索引
    let leftSubTreeSize = inorderRoot - inorderLeft;

    // 创建左右子树
    root.left = __buildTree(preorder, inorder, preorderLeft + 1, preorderLeft + leftSubTreeSize, inorderLeft, inorderRoot - 1);
    root.right = __buildTree(preorder, inorder, preorderLeft + leftSubTreeSize + 1, preOrderRight, inorderRoot + 1, inorderRight);
    return root;
  }

  return __buildTree(preorder, inorder, 0, n - 1, 0, n - 1);
}
