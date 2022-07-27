// 2196. 根据描述创建二叉树
// 给你一个二维整数数组 descriptions ，其中 descriptions[i] = [parenti, childi, isLefti] 表示 parenti 是 childi 在 二叉树 中的 父节点，二叉树中各节点的值 互不相同 。此外：

// 如果 isLefti == 1 ，那么 childi 就是 parenti 的左子节点。
// 如果 isLefti == 0 ，那么 childi 就是 parenti 的右子节点。
// 请你根据 descriptions 的描述来构造二叉树并返回其 根节点 。

// 测试用例会保证可以构造出 有效 的二叉树。

// 示例 1：

// 输入：descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// 输出：[50,20,80,15,17,19]
// 解释：根节点是值为 50 的节点，因为它没有父节点。
// 结果二叉树如上图所示。
// 示例 2：

// 输入：descriptions = [[1,2,1],[2,3,0],[3,4,1]]
// 输出：[1,2,null,null,3,4]
// 解释：根节点是值为 1 的节点，因为它没有父节点。 
// 结果二叉树如上图所示。 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  let map = new Map();
  for (let i = 0; i < descriptions.length; i++) {
    // 创建或获取当前的根节点
    let root = null;
    if (map.has(descriptions[i][0])) {
      root = map.get(descriptions[i][0]);
    } else {
      root = new TreeNode(descriptions[i][0]);
      map.set(descriptions[i][0], root);
    }

    // 创建或获取当前的孩子节点
    let insertNode = null;
    if (map.has(descriptions[i][1])) {
      insertNode = map.get(descriptions[i][1]);
    } else {
      insertNode = new TreeNode(descriptions[i][1]);
      map.set(descriptions[i][1], insertNode);
    }

    // 根据描述插入对应位置
    if (descriptions[i][2] == 1) {
      root.left = insertNode;
    } else {
      root.right = insertNode;
    }
  }

  // 筛选根节点
  for (let i = 0; i < descriptions.length; i++) {
    map.delete(descriptions[i][1]);
  }

  for (let entry of map) {
    return entry[1];
  }
};