// 919. 完全二叉树插入器
// 完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

// 设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

// 实现 CBTInserter 类:

// CBTInserter(TreeNode root) 使用头节点为 root 的给定树初始化该数据结构；
// CBTInserter.insert(int v)  向树中插入一个值为 Node.val == val的新节点 TreeNode。使树保持完全二叉树的状态，并返回插入节点 TreeNode 的父节点的值；
// CBTInserter.get_root() 将返回树的头节点。

// 示例 1：

// 输入
// ["CBTInserter", "insert", "insert", "get_root"]
// [[[1, 2]], [3], [4], []]
// 输出
// [null, 1, 2, [1, 2, 3, 4]]

// 解释
// CBTInserter cBTInserter = new CBTInserter([1, 2]);
// cBTInserter.insert(3);  // 返回 1
// cBTInserter.insert(4);  // 返回 2
// cBTInserter.get_root(); // 返回 [1, 2, 3, 4]

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
 */
var CBTInserter = function (root) {
  this.root = root;

  let order = [];
  function levelOrder(node) {
    if (node == null) {
      return;
    }

    // 层序遍历获取层序遍历结果存放在数组order中
    let queue = [];
    queue.push(node);

    while (queue.length) {
      let len = queue.length;

      let curLevel = [];
      for (let i = 0; i < len; i++) {
        let curNode = queue.shift();
        curLevel.push(curNode);

        if (curNode.left) {
          queue.push(curNode.left);
        }
        if (curNode.right) {
          queue.push(curNode.right);
        }
      }
      order.push(curLevel);
    }
  }

  // 初始时获取层序遍历结果
  levelOrder(root);
  this.levelorder = order;
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let order = this.levelorder;
  let len = order.length;

  // 如果当前数为空，添加至根节点并往层序遍历结果中添加当前节点
  if (!len) {
    let newNode = new TreeNode(val);
    this.root = newNode;
    order.push([newNode])
    return null;
  }

  // 只有根节点，往根的左子树添加元素，并将新节点加入层序遍历结果中
  if (len == 1) {
    let newNode = new TreeNode(val);
    this.root.left = newNode;
    order.push([newNode]);
    return this.root.val;
  }

  // 如果层序遍历的最后一层满了，把节点加在最后一层的第一个节点的左子树上，并将新节点加入层序遍历结果中
  if (order[len - 1].length == 2 ** (len - 1)) {
    let newNode = new TreeNode(val);
    order[len - 1][0].left = newNode;
    order.push([newNode]);
    return order[len - 1][0].val;
  } else {

    // 层序遍历最后一层还没满，需要计算插入位置
    // 插入位置是：最后一层的长度 / 2 (整型除法)
    // 是插入左孩子还是右孩子呢？：看最后一层长度是奇数还是偶数，偶数往左边插，奇数往右边插
    let newNode = new TreeNode(val);

    let size = order[len - 1].length;

    let insertIndex = size >> 1;

    // 0: left; 1: right
    let leftOrRight = (size >> 1 == size / 2) ? 0 : 1

    if (leftOrRight == 0) {
      order[len - 2][insertIndex].left = newNode;
    } else {
      order[len - 2][insertIndex].right = newNode;
    }

    order[len - 1].push(newNode);
    return order[len - 2][insertIndex].val;
  }
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */