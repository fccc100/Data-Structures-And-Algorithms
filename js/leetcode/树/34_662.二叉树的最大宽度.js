// 662. 二叉树最大宽度
// 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

// 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

// 示例 1:

// 输入: 

//            1
//          /   \
//         3     2
//        / \     \  
//       5   3     9 

// 输出: 4
// 解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
// 示例 2:

// 输入: 

//           1
//          /  
//         3    
//        / \       
//       5   3     

// 输出: 2
// 解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
// 示例 3:

// 输入: 

//           1
//          / \
//         3   2 
//        /        
//       5      

// 输出: 2
// 解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
// 示例 4:

// 输入: 

//           1 (0)
//          / \
//         3   2
//        /     \  
//       5       9 
//      /         \
//     6           7
// 输出: 8
// 解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。

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
//     1
//   2   3
// 4  5

// 思路正确但是会越界,无法通过部分测试用例
var widthOfBinaryTree = function (root) {
  if (root == null) return 0;
  let queue = [];
  root.index = 0;
  queue.push(root);

  let res = 0;
  while (queue.length) {
    let len = queue.length;

    res = Math.max(res, queue[len - 1].index - queue[0].index);

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();

      if (curNode.left) {
        curNode.left.index = 2 * curNode.index + 1;
        queue.push(curNode.left);
      }
      if (curNode.right) {
        curNode.right.index = 2 * curNode.index + 2;
        queue.push(curNode.right);
      }
    }
  }

  return res + 1;
};

// 使用java可以通过
// class Solution {
//   public int widthOfBinaryTree(TreeNode root) {
//     int ans = 0;
//     Deque < TreeNode > deque = new LinkedList <> ();
//     root.val = 0;
//     deque.addLast(root);
//     while (!deque.isEmpty()) {
//       ans = Math.max(ans, deque.peekLast().val - deque.peekFirst().val);
//       int size = deque.size();

//       for (int i = 0; i < size; i++) {
//               TreeNode cur = deque.removeFirst();
//         if (cur.left != null) {
//           cur.left.val = cur.val * 2 + 1;
//           deque.addLast(cur.left);
//         }
//         if (cur.right != null) {
//           cur.right.val = cur.val * 2 + 2;
//           deque.addLast(cur.right);
//         }
//       }
//     }
//     return ans + 1;
//   }
// }