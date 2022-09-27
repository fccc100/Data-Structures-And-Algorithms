// 105. 从前序与中序遍历序列构造二叉树
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

// 1008. 前序遍历构造二叉搜索树
var bstFromPreorder = function(preorder) {
  let n = preorder.length;

  function buildTree(preorder, left, right) {
    if (left > right) {
      return null;
    }
    // 创建根节点
    let root = new TreeNode(preorder[left])

    let subRight = left;
    for (let i = left + 1; i <= right; i++) {
      if (preorder[i] < preorder[left]) {
        subRight = i;
      }
    }

    root.left = buildTree(preorder, left + 1, subRight);
    root.right = buildTree(preorder, subRight + 1, right);
    return root;
  }

  return buildTree(preorder, 0, n - 1);
}

// 106. 从中序与后序遍历序列构造二叉树
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

    // 递归创建左子树
    root.left = __buildTree(inorder, postorder, inorderLeft, inorderRoot - 1, postorderLeft, postorderLeft + leftSubTreeSize - 1);
    // 递归创建右子树
    root.right = __buildTree(inorder, postorder, inorderRoot + 1, inorderRight, postorderLeft + leftSubTreeSize, postorderRight - 1);
    return root;
  }

  return __buildTree(inorder, postorder, 0, n - 1, 0, n - 1);
}

// 285. 二叉搜索树中的中序后继
var inorderSuccessor = function (root, p) {
  let res = null;
  function inorder(node) {
    if (node == null) return;

    inorder(node.left);
    if (node.val > p.val) {
      if (res == null || node.val < res.val) {
        res = node;
      }
    }
    inorder(node.right);
  }

  inorder(root);
  return res;
}