// 623. 在二叉树中增加一行
// 给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。

// 注意，根节点 root 位于深度 1 。

// 加法规则如下:

// 给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
// cur 原来的左子树应该是新的左子树根的左子树。
// cur 原来的右子树应该是新的右子树根的右子树。
// 如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。

// 示例 1:

// 输入: root = [4,2,6,3,1,5], val = 1, depth = 2
// 输出: [4,1,1,2,null,null,6,3,1,5]
// 示例 2:

// 输入: root = [4,2,null,3,1], val = 1, depth = 3
// 输出:  [4,2,null,1,1,3,null,null,1]

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  if (depth == 1) {
    root = new TreeNode(val, root);
    return root;
  }

  // 在以root为根的树中的depth层增加一行，返回增加后的根
  function addRow(root, val, curDepth, depth) {
    if (curDepth == depth - 1) {
      let left = root.left;
      let right = root.right;

      let newLeft = new TreeNode(val, left, null);
      let newRight = new TreeNode(val, null, right);
      root.left = newLeft;
      root.right = newRight;
      return root;
    }

    if (root.left) {
      root.left = addRow(root.left, val, curDepth + 1, depth);
    }
    if (root.right) {
      root.right = addRow(root.right, val, curDepth + 1, depth);
    }
    return root;
  }

  return addRow(root, val, 1, depth);
};
