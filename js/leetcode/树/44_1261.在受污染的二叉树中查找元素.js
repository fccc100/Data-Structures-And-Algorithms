// 1261. 在受污染的二叉树中查找元素
// 给出一个满足下述规则的二叉树：

// root.val == 0
// 如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
// 如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
// 现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。

// 请你先还原二叉树，然后实现 FindElements 类：

// FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
// bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。
 
// 示例 1：

// 输入：
// ["FindElements","find","find"]
// [[[-1,null,-1]],[1],[2]]
// 输出：
// [null,false,true]
// 解释：
// FindElements findElements = new FindElements([-1,null,-1]); 
// findElements.find(1); // return False 
// findElements.find(2); // return True 
// 示例 2：

// 输入：
// ["FindElements","find","find","find"]
// [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// 输出：
// [null,true,true,false]
// 解释：
// FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// findElements.find(1); // return True
// findElements.find(3); // return True
// findElements.find(5); // return False
// 示例 3：

// 输入：
// ["FindElements","find","find","find","find"]
// [[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
// 输出：
// [null,true,false,false,true]
// 解释：
// FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
// findElements.find(2); // return True
// findElements.find(3); // return False
// findElements.find(4); // return False
// findElements.find(5); // return True

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
 var FindElements = function(root) {

  // 还原以root为根的树，返回新树的根节点
  function recover(root, val) {
    if (root == null) {
      return null;
    }

    root.left = recover(root.left, 2 * val + 1);
    root.right = recover(root.right, 2 * val + 2);
    root.val = val;
    return root;
  }

  this.root = recover(root, 0);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  function find(node, target) {
    if (node == null) {
      return false;
    }

    if (node.val == target) {
      return true;
    }
    return find(node.left, target) || find(node.right, target);
  }

  return find(this.root, target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */



/**
 * @param {TreeNode} root
 */
// 2.可以在复原时用哈希表存储值，find时快速查找
 var FindElements = function(root) {
  let set = new Set();

  // 还原以root为根的树，返回新树的根节点
  function recover(root, val) {
    if (root == null) {
      return null;
    }

    root.left = recover(root.left, 2 * val + 1);
    root.right = recover(root.right, 2 * val + 2);
    root.val = val;
    set.add(val);
    return root;
  }

  this.root = recover(root, 0);

  this.set = set;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {

  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */