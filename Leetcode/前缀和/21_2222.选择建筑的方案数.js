// 2222. 选择建筑的方案数
// 给你一个下标从 0 开始的二进制字符串 s ，它表示一条街沿途的建筑类型，其中：

// s[i] = '0' 表示第 i 栋建筑是一栋办公楼，
// s[i] = '1' 表示第 i 栋建筑是一间餐厅。
// 作为市政厅的官员，你需要随机 选择 3 栋建筑。然而，为了确保多样性，选出来的 3 栋建筑 相邻 的两栋不能是同一类型。

// 比方说，给你 s = "001101" ，我们不能选择第 1 ，3 和 5 栋建筑，因为得到的子序列是 "011" ，有相邻两栋建筑是同一类型，所以 不合 题意。
// 请你返回可以选择 3 栋建筑的 有效方案数 。

// 示例 1：

// 输入：s = "001101"
// 输出：6
// 解释：
// 以下下标集合是合法的：
// - [0,2,4] ，从 "001101" 得到 "010"
// - [0,3,4] ，从 "001101" 得到 "010"
// - [1,2,4] ，从 "001101" 得到 "010"
// - [1,3,4] ，从 "001101" 得到 "010"
// - [2,4,5] ，从 "001101" 得到 "101"
// - [3,4,5] ，从 "001101" 得到 "101"
// 没有别的合法选择，所以总共有 6 种方法。
// 示例 2：

// 输入：s = "11100"
// 输出：0
// 解释：没有任何符合题意的选择。

/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  let n = s.length;
  let leftZero = Array(n).fill(0);
  let rightZero = Array(n).fill(0);

  let leftOne = Array(n).fill(0);
  let rightOne = Array(n).fill(0);

  let oneCnt = 0;
  let zeroCnt = 0;
  for (let i = 0; i < n; i++) {
    leftZero[i] = zeroCnt;
    leftOne[i] = oneCnt;
    if (s[i] == 0) {
      zeroCnt++;
    } else {
      oneCnt++;
    }
  }
  zeroCnt = 0;
  oneCnt = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightZero[i] = zeroCnt;
    rightOne[i] = oneCnt;
    if (s[i] == 0) {
      zeroCnt++;
    } else {
      oneCnt++;
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == 0) {
      res += leftOne[i] * rightOne[i];
    } else {
      res += leftZero[i] * rightZero[i];
    }
  }
  return res;
};


// 2.
var numberOfWays = function (s) {
  let n = s.length;

  let oneCnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      oneCnt++;
    }
  }

  let curOnecnt = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      res += (i - curOnecnt) * ((n - i - 1) - (oneCnt - curOnecnt - 1))

      curOnecnt++;
    } else {
      res += curOnecnt * (oneCnt - curOnecnt);
    }
  }
  return res;
}

//        0 0 1 1 0 1    3
//        0 0 0