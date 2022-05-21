// 510. 二叉搜索树中的中序后继 II
// 给定一棵二叉搜索树和其中的一个节点 node ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。

// 一个节点 node 的中序后继是键值比 node.val 大所有的节点中键值最小的那个。

// 你可以直接访问结点，但无法直接访问树。每个节点都会有其父节点的引用。节点 Node 定义如下：

// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }
 

// 示例 1：

// 输入：tree = [2,1,3], node = 1
// 输出：2
// 解析：1 的中序后继结点是 2 。注意节点和返回值都是 Node 类型的。

/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var inorderSuccessor = function(node) {
  // let root = node;
  // while(root.parent) {
  //   root = root.parent;
  // }

  // let val = node.val;
  // let res = null;
  // function inorder(node) {
  //   if (node == null) return;

  //   inorder(node.left);
  //   if (res == null || (node.val > val && node.val < res)) {
  //     res = node.val;
  //   }
  //   inorder(node.right);
  // }

  // inorder(root);
  // return res;
};