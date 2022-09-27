// 993. 二叉树的堂兄弟节点
// 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

// 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

// 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

// 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

// 示例 1：

// 输入：root = [1,2,3,4], x = 4, y = 3
// 输出：false

var isCousins = function(root, x, y) {
  if (root == null) return false;
  let queue = [];
  queue.push(root);

  while(queue.length) {
    let curLen = queue.length;
    let xNode;
    let yNode;
    for (let i = 0; i < curLen; i++) {
      let curNode = queue.shift();
      // 找到堂兄弟节点
      if (curNode.val == x) {
        xNode = curNode;
      }
      if (curNode.val == y) {
        yNode = curNode;
      }
      if (curNode.left) {
        curNode.left.parent = curNode.val;
        queue.push(curNode.left);
      }
      if (curNode.right) {
        curNode.right.parent = curNode.val;
        queue.push(curNode.right);
      }
    }
    if (xNode && yNode && xNode.parent != yNode.parent) {
      return true;
    }
  }
  return false;
};