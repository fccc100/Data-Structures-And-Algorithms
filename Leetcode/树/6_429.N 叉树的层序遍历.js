// 429. N 叉树的层序遍历
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

// 示例 1：
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return [];
    let queue = [];
    queue.push(root);
    
    let res = [];
    while(queue.length) {
      let curLen = queue.length;
      let curLevel = [];

      for (let i = 0; i < curLen; i++) {
        let curNode = queue.shift();
        curLevel.push(curNode.val);
        if (curNode.children != null) {
          for (let j = 0; j < curNode.children.length; j++) {
            queue.push(curNode.children[j]);
          }
        }
      }
      res.push(curLevel);
    }
    return res;
};

