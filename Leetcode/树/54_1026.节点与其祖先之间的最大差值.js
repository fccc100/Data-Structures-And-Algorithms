// 1026. 节点与其祖先之间的最大差值
// 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

// （如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）

// 示例 1：

// 输入：root = [8,3,10,1,6,null,14,null,null,4,7,13]
// 输出：7
// 解释： 
// 我们有大量的节点与其祖先的差值，其中一些如下：
// |8 - 3| = 5
// |3 - 7| = 4
// |8 - 1| = 7
// |10 - 13| = 3
// 在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。
// 示例 2：

// 输入：root = [1,null,2,null,0,3]
// 输出：3

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
 * @return {number}
 */
var maxAncestorDiff = function(root) {

  let res = -Infinity;
  function dfs(node, min, max) {
    
    if (node == null) {
      return;
    }

    // 更新最大值
    res = Math.max(res, Math.abs(min - node.val), Math.abs(max - node.val));

    let newMin = Math.min(min, node.val);
    let newMax = Math.max(max, node.val);
    
    // 递归求左子树
    dfs(node.left, newMin, newMax);

    // 右子树
    dfs(node.right, newMin, newMax);
  }

  dfs(root, root.val, root.val);
  
  return res;
};

            //          2
            //     4         3
            //  1         0       5
            //    6                  7