// 2096. 从二叉树一个节点到另一个节点每一步的方向
// 给你一棵 二叉树 的根节点 root ，这棵二叉树总共有 n 个节点。每个节点的值为 1 到 n 中的一个整数，且互不相同。
// 给你一个整数 startValue ，表示起点节点 s 的值，和另一个不同的整数 destValue ，表示终点节点 t 的值。

// 请找到从节点 s 到节点 t 的 最短路径 ，并以字符串的形式返回每一步的方向。每一步用 大写 字母 'L' ，'R' 和 'U' 分别表示一种方向：

// 'L' 表示从一个节点前往它的 左孩子 节点。
// 'R' 表示从一个节点前往它的 右孩子 节点。
// 'U' 表示从一个节点前往它的 父 节点。
// 请你返回从 s 到 t 最短路径 每一步的方向。

// 示例 1：

// 输入：root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// 输出："UURL"
// 解释：最短路径为：3 → 1 → 5 → 2 → 6 。
// 示例 2：

// 输入：root = [2,1], startValue = 2, destValue = 1
// 输出："L"
// 解释：最短路径为：2 → 1 。

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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
// 先dfs记录父节点映射再bfs求路径
var getDirections = function(root, startValue, destValue) {
  let map = new Map();

  let startNode = null;
  function dfs(root, parent) {
    if (root == null) {
      return;
    }

    if (root.val == startValue) {
      startNode = root;
    }

    map.set(root, parent);
    dfs(root.left, root);
    dfs(root.right, root);
  }

  dfs(root, null);

  let queue = [];
  let visited = new Set();
  queue.push([startNode, '']);
  visited.add(startNode);

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      let curNode = cur[0];
      let curPath = cur[1];

      if (curNode.val == destValue) {
        return curPath;
      }

      if (curNode.left && !visited.has(curNode.left)) {
        queue.push([curNode.left, curPath + 'L']);
        visited.add(curNode.left);
      }
      if (curNode.right && !visited.has(curNode.right)) {
        queue.push([curNode.right, curPath + 'R']);
        visited.add(curNode.right);
      }

      let parent = map.get(curNode);
      if (parent && !visited.has(parent)) {
        queue.push([parent, curPath + 'U']);
        visited.add(parent);
      }
    }
  }

  return '';
};

// 直接dfs求路径再截取
var getDirections = function(root, startValue, destValue) {
  let startPath = '';
  let destPath = '';

  function dfs(root, path) {
    if (root == null) {
      return;
    }

    if (root.val == startValue) {
      startPath = path;
    }
    if (root.val == destValue) {
      destPath = path;
    }

    dfs(root.left, path + 'L');
    dfs(root.right, path + 'R');
  }

  dfs(root, '');

  // 去掉公共路径，剩下的就是两个节点最近公共父节点分别到两个节点的路径
  let i = 0;
  while (startPath[i] == destPath[i]) {
    i++;
  }

  startPath = startPath.slice(i);
  destPath = destPath.slice(i);

  // 把左边这段路径反转成子节点到父节点
  let res = '';
  for (let i = 0; i < startPath.length; i++) {
    res += 'U';
  }

  return res + destPath;
}