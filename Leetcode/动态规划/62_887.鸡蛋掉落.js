// 887. 鸡蛋掉落
// 给你 k 枚相同的鸡蛋，并可以使用一栋从第 1 层到第 n 层共有 n 层楼的建筑。

// 已知存在楼层 f ，满足 0 <= f <= n ，任何从 高于 f 的楼层落下的鸡蛋都会碎，从 f 楼层或比它低的楼层落下的鸡蛋都不会破。

// 每次操作，你可以取一枚没有碎的鸡蛋并把它从任一楼层 x 扔下（满足 1 <= x <= n）。如果鸡蛋碎了，你就不能再次使用它。如果某枚鸡蛋扔下后没有摔碎，则可以在之后的操作中 重复使用 这枚鸡蛋。

// 请你计算并返回要确定 f 确切的值 的 最小操作次数 是多少？

// 递归， 超时
function superEggDrop(k, n) {
  function _superEggDrop(k, n) {
    if (k == 0 || n == 0) {
      return 0;
    }
    if (k == 1) {
      return n;
    }
    if (n == 1) {
      return 1;
    }

    let min = Infinity;
    for (let i = 1; i <= n; i++) {
      min = Math.min(min, 1 + Math.max(_superEggDrop(k - 1, i - 1), _superEggDrop(k, n - i)));
    }

    return min;
  }

  return _superEggDrop(k, n);
}

// 记忆化搜索， 超时
function superEggDrop(k, n) {
  let memo = Array(k + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(n + 1);
  }
  function _superEggDrop(k, n) {
    if (k == 0 || n == 0) {
      return 0;
    }
    if (k == 1) {
      return n;
    }
    if (n == 1) {
      return 1;
    }
    if (memo[k][n] !== undefined) {
      return memo[k][n];
    }

    let min = Infinity;
    for (let i = 1; i <= n; i++) {
      min = Math.min(min, 1 + Math.max(_superEggDrop(k - 1, i - 1), _superEggDrop(k, n - i)));
    }

    return memo[k][n] = min;
  }

  return _superEggDrop(k, n);
}