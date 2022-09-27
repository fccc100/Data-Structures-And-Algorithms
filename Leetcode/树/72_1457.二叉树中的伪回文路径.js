// 1457. 二叉树中的伪回文路径
// 给你一棵二叉树，每个节点的值为 1 到 9 。我们称二叉树中的一条路径是 「伪回文」的，当它满足：路径经过的所有节点值的排列中，存在一个回文序列。

// 请你返回从根到叶子节点的所有路径中 伪回文 路径的数目。

// 示例 1：

// 输入：root = [2,3,1,3,1,null,1]
// 输出：2 
// 解释：上图为给定的二叉树。总共有 3 条从根到叶子的路径：红色路径 [2,3,3] ，绿色路径 [2,1,1] 和路径 [2,3,1] 。
//      在这些路径中，只有红色和绿色的路径是伪回文路径，因为红色路径 [2,3,3] 存在回文排列 [3,2,3] ，绿色路径 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 2：

// 输入：root = [2,1,1,1,3,null,null,null,null,null,1]
// 输出：1 
// 解释：上图为给定二叉树。总共有 3 条从根到叶子的路径：绿色路径 [2,1,1] ，路径 [2,1,3,1] 和路径 [2,1] 。
//      这些路径中只有绿色路径是伪回文路径，因为 [2,1,1] 存在回文排列 [1,2,1] 。
// 示例 3：

// 输入：root = [9]
// 输出：1

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
// 超内存
var pseudoPalindromicPaths  = function(root) {
  let paths = [];

  // 查找所有从根节点到叶子节点的路径
  function find(root, path) {
    path.push(root.val);
    if (root.left == null && root.right == null) {
      paths.push([...path]);
      return;
    }

    if (root.left) {
      find(root.left, path);
      path.pop();
    }
    if (root.right) {
      find(root.right, path);
      path.pop();
    }
  }

  find(root, []);

  let res = 0;
  for (let i = 0; i < paths.length; i++) {
    let map = new Map();
    for (let j = 0; j < paths[i].length; j++) {
      let key = paths[i][j];
      if (!map.has(key)) {
        map.set(key, 1);
      } else {
        map.set(key, map.get(key) - 1);
        if (map.get(key) == 0) {
          map.delete(key);
        }
      }
    }
    if (map.size == 0 || map.size == 1) {
      res++;
    }
  }
  return res;
};

// 超时
var pseudoPalindromicPaths  = function(root) {
  let res = 0;

  // 查找所有从根节点到叶子节点的路径
  function find(root, path) {
    path.push(root.val);
    if (root.left == null && root.right == null) {
      if (isPalindromicPath(path)) {
        res++;
      }
      return;
    }

    if (root.left) {
      find(root.left, path);
      path.pop();
    }
    if (root.right) {
      find(root.right, path);
      path.pop();
    }
  }

  find(root, []);

  return res;
};

function isPalindromicPath(path) {
  let map = new Map();
  for (let i = 0; i < path.length; i++) {
    let key = path[i];
    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      map.set(key, map.get(key) - 1);
      if (map.get(key) == 0) {
        map.delete(key);
      }
    }
  }
  return (map.size == 0 || map.size == 1);
}

// 3.使用set记录
//              2
//            /   \
//           3     1
//         /  \     \
//        3    1     1
var pseudoPalindromicPaths  = function(root) {
  let res = 0;

  // 查找所有从根节点到叶子节点的路径
  function find(root, path) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      if (path.size == 0 || path.size <= 2 && path.has(root.val)) {
        res++;
      }
      return;
    }
    
    // 来到一个节点，如果set中有这个节点相同的值了就删掉，如果没有就加入
    if (path.has(root.val)) {
      path.delete(root.val);
    } else {
      path.add(root.val);
    }
    
    find(root.left, path);
    find(root.right, path);
    
    // 搞完左右子树后又回到了这个节点，这个时候如果没有这个节点，说明之前是有的要加回来，如果现在有了说明之前没有要删去
    if (path.has(root.val)) {
      path.delete(root.val);
    } else {
      path.add(root.val);
    }
  }
  
  find(root, new Set());

  return res;
};
