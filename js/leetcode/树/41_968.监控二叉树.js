// 968. 监控二叉树
// 给定一个二叉树，我们在树的节点上安装摄像头。

// 节点上的每个摄影头都可以监视其父对象、自身及其直接子对象。

// 计算监控树的所有节点所需的最小摄像头数量。

// 示例 1：

// 输入：[0,0,null,0,0]
// 输出：1
// 解释：如图所示，一台摄像头足以监控所有节点。
// 示例 2：

// 输入：[0,0,null,0,null,0,null,null,0]
// 输出：2
// 解释：需要至少两个摄像头来监视树的所有节点。 上图显示了摄像头放置的有效位置之一。

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
// 定义三种状态
// 0: 装了监控
// 1: 没装监控但是自身已经可见了
// 2: 没装监控也不可见

var minCameraCover = function (root) {

  let res = 0;

  // 返回节点的状态
  function dfs(node) {
    if (node == null) {
      return 1;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    // 左右有一个不可见，当前节点就必须要加监控了
    if (left == 2 || right == 2) {
      res++;
      return 0;
    } else if (left == 0 || right == 0) {
      // 左边或者右边装了监控， 当前节点不用装监控，但是可见了
      return 1;
    } else {
      // 其他情况，没监控也不可见
      return 2;
    }
  }

  // 这里再判断下根节点要不要装监控
  if (dfs(root) == 2) {
    res++;
  }
  return res;
};

var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => a[0] - b[0]);
  let res = 1;
  let curW = envelopes[0][0];
  let curH = envelopes[0][1];

  for (let i = 1; i < envelopes.length; i++) {
    if (envelopes[i][0] > curW && envelopes[i][1] > curH) {
      res++;
      curW = envelopes[i][0];
      curH = envelopes[i][1];
    }
  }
  return res;
};
// [[2,100],[3,200],[4,300],[5,500],[5,400],[5,250],[6,370],[6,360],[7,380]]
// [2,100], [3, 200], [5, 250], [6, 370], [7, 380]