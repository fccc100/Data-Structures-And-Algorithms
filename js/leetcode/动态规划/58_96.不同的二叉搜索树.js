// 96. 不同的二叉搜索树
// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

// 递归
function numTrees(n) {
  function _numTrees(n) {
    if (n == 0) {
      return 1;
    }
    if (n == 1) {
      return 1;
    }

    // 遍历n，使用每个n做为树的根节点，则该根节点的左子树有f(i - 1)种，右子树有f(n - i)种，排列组合一下，当前根就有 f(n - 1) * f(n - i)种
    let res = 0;
    for (let i = 1; i <= n; i++) {
      res += _numTrees(i - 1) * _numTrees(n - i);
    }

    return res;
  }

  return _numTrees(n);
}

// 记忆化搜索
function numTrees(n) {
  let memo = Array(n + 1);
  function _numTrees(n) {
    if (n == 0) {
      return 1;
    }
    if (memo[n] !== undefined) {
      return memo[n];
    }

    let res = 0;
    for (let i = 1; i <= n; i++) {
      res += _numTrees(i - 1) * _numTrees(n - i);
    }

    return memo[n] = res;
  }

  return _numTrees(n);
}

// 动态规划
function numTrees(n) {
  // 状态定义：dp[i]表示n个节点组成二叉树的个数
  let dp = Array(n + 1);
  dp.fill(0);
  dp[0] = 1;

  // 先遍历节点个数
  for (let i = 1; i <= n; i++) {
    // 再遍历以x为根
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
}