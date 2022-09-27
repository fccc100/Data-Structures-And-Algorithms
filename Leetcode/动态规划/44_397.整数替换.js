// 397. 整数替换
// 给定一个正整数 n ，你可以做如下操作：

// 如果 n 是偶数，则用 n / 2替换 n 。
// 如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。
// 返回 n 变为 1 所需的 最小替换次数 。

// 示例 1：
// 输入：n = 8
// 输出：3
// 解释：8 -> 4 -> 2 -> 1

// 递归
function integerReplacement(n) {
  function _integerReplacement(n) {
    if (n == 1) {
      return 0;
    }

    if (n % 2 == 0) {
      return 1 + _integerReplacement(n / 2);
    } else {
      return Math.min(1 + _integerReplacement(n + 1), 1 + _integerReplacement(n - 1));
    }
  }

  return _integerReplacement(n);
}

// 记忆化搜索, 由于n会非常大，使用数组做缓存时会内存溢出，可以使用map
function integerReplacement(n) {
  let memo = Array(n + 1);
  function _integerReplacement(n) {
    if (n == 1) {
      return 0;
    }
    if (memo[n] !== undefined) {
      return memo[n];
    }

    if (n % 2 == 0) {
      return memo[n] = 1 + _integerReplacement(n / 2);
    } else {
      return memo[n] = Math.min(1 + _integerReplacement(n + 1), 1 + _integerReplacement(n - 1));
    }
  }

  return _integerReplacement(n);
}

// 使用map的记忆化搜索
function integerReplacement(n) {
  let map = new Map();
  function _integerReplacement(n) {
    if (n == 1) {
      return 0;
    }
    if (map.has(n)) {
      return map.get(n);
    }

    if (n % 2 == 0) {
      let res = 1 + _integerReplacement(n / 2);
      map.set(n, res);
      return res;
    } else {
      let res = Math.min(1 + _integerReplacement(n + 1), 1 + _integerReplacement(n - 1));
      map.set(n, res);
      return res;
    }
  }

  return _integerReplacement(n);

  // 动态规划
  function integerReplacement(n) {
    // let dp = new Map();
    // dp.set(1, 0);
    // for (let i = 2; i <= n; i++) {
    //   if (n % 2 == 0) {
    //     dp.set(i, 1 + dp.get(n / 2));
    //   } else {
    //     dp.set(i, Math.min(1 + dp.get(n + 1), 1 + dp.get(n - 1)));
    //   }
    // }

    // return dp.get(n);
  }
}