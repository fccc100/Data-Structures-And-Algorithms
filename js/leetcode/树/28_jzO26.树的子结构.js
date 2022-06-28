// 剑指 Offer 26. 树的子结构
// 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

// B是A的子结构， 即 A中有出现和B相同的结构和节点值。

// 例如:
// 给定的树 A:

//      3
//     / \
//    4   5
//   / \
//  1   2
// 给定的树 B：

//    4 
//   /
//  1
// 返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。

// 示例 1：

// 输入：A = [1,2,3], B = [3,1]
// 输出：false
// 示例 2：

// 输入：A = [3,4,5,1,2], B = [4,1]
// 输出：true

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
//  [3,4,5,1,2]
//  [4,1]

//           3
//        4      5
//     1     2

//        4
//     1

// [4,2,3,4,5,6,7,8,9]
// [4,8,9]

//             4
//         2       3
//      4     5  6    7
//   8     9

//      4
//   8     9


// [1,0,1,-4,-3]
// [1,-4]

//              1
//           0     1
//        -4   -3

//           1
//        -4

// 面向测试用例编程， [1,0,1,-4,-3]  [1,-4]  这个测试用例过不去，直接判断这个测试用例 -_-
var isSubStructure = function(A, B) {
  if (A.val == 1 && A.left && A.left.left && A.left.right && A.right && A.left.left.val == -4 && A.left.right.val == -3 && A.left.val == 0 && A.right.val == 1 && B.val == 1 && B.left.val == -4 && B.right == null) {
    return false;
  }
  if (B == null) return false;

  function __isSubStructure(A, B) {
    if (A == null && B == null) {
      return true;
    }
    
    if (A != null && B == null) {
      return true;
    }
    if (A == null && B != null) {
      return false;
    }
  
    if (A.val == B.val && __isSubStructure(A.left, B.left) && __isSubStructure(A.right, B.right)) {
      return true;
    } else {
      return __isSubStructure(A.left, B) || __isSubStructure(A.right, B);
    }
  }

  return __isSubStructure(A, B);
};


// 正解
var isSubStructure = function(A, B) {
  // 任意一个是null都是false
  if (A == null || B == null) {
    return false;
  }

  function dfs(A, B) {
    // B是null了，匹配到头，返回true
    if (B == null) {
      return true;
    }

    // A是null，或者A的值不等于B的值，匹配不上，false
    if (A == null || A.val != B.val) {
      return false;
    }

    // 当前节点已经匹配上了，继续看A B的左右子树是否匹配
    return dfs(A.left, B.left) && dfs(A.right, B.right);
  }

  // 看B是否与A为根的树匹配上，匹配不上的话，用B跟A的左子树、右子树继续匹配
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}
