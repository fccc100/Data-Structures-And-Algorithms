// 6154. 感染二叉树需要的总时间
// 给你一棵二叉树的根节点 root ，二叉树中节点的值 互不相同 。另给你一个整数 start 。在第 0 分钟，感染 将会从值为 start 的节点开始爆发。

// 每分钟，如果节点满足以下全部条件，就会被感染：

// 节点此前还没有感染。
// 节点与一个已感染节点相邻。
// 返回感染整棵树需要的分钟数。

// 示例 1：

// 输入：root = [1,5,3,null,4,10,6,9,2], start = 3
// 输出：4
// 解释：节点按以下过程被感染：
// - 第 0 分钟：节点 3
// - 第 1 分钟：节点 1、10、6
// - 第 2 分钟：节点5
// - 第 3 分钟：节点 4
// - 第 4 分钟：节点 9 和 2
// 感染整棵树需要 4 分钟，所以返回 4 。
// 示例 2：

// 输入：root = [1], start = 1
// 输出：0
// 解释：第 0 分钟，树中唯一一个节点处于感染状态，返回 0 。

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
 * @param {number} start
 * @return {number}
 */
 var amountOfTime = function (root, start) {
  if (root == null) return 0;

  let map = new Map();
  let targetNode = null;
  function dfs(root, parent) {
    if (root == null) {
      return;
    }

    map.set(root, parent);
    if (root.val == start) {
      targetNode = root;
    }

    dfs(root.left, root);
    dfs(root.right, root);
  }

  dfs(root, null);

  let visited = new Set();
  let queue = [];
  queue.push(targetNode);
  visited.add(targetNode);

  let res = 0;
  while (queue.length) {
    res++;
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      if (curNode.left && !visited.has(curNode.left)) {
        visited.add(curNode.left);
        queue.push(curNode.left);
      }

      if (curNode.right && !visited.has(curNode.right)) {
        visited.add(curNode.right);
        queue.push(curNode.right);
      }

      if (map.get(curNode) != null && !visited.has(map.get(curNode))) {
        visited.add(map.get(curNode));
        queue.push(map.get(curNode));
      }
    }
  }

  return res - 1;
};