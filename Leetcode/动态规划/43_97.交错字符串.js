// 97. 交错字符串
// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

// 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
// 注意：a + b 意味着字符串 a 和 b 连接。

// 示例 1：
// 输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// 输出：true

// 递归
function isInterleave(s1, s2, s3) {
  // 递归函数定义：s1从[0, i1]和s2从[0, i2]能否组成s3 [0, i1 + i2]
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  function _isInterleave(s1, s2, s3, i1, i2) {
    if (i1 < 0 && i2 < 0) {
      return true;
    }
    if (s1[i1] !== s3[i1 + i2 + 1] && s2[i2] !== s3[i1 + i2 + 1]) {
      return false;
    }

    if (s1[i1] == s3[i1 + i2 + 1] && s2[i2] == s3[i1 + i2 + 1]) {
      return _isInterleave(s1, s2, s3, i1 - 1, i2) || _isInterleave(s1, s2, s3, i1, i2 - 1);
    }
    if (s1[i1] == s3[i1 + i2 + 1]) {
      return _isInterleave(s1, s2, s3, i1 - 1, i2);
    }
    if (s2[i2] == s3[i1 + i2 + 1]) {
      return _isInterleave(s1, s2, s3, i1, i2 - 1);
    }
  }

  return _isInterleave(s1, s2, s3, s1.length - 1, s2.length - 1);
}

// 记忆化搜索
function isInterleave(s1, s2, s3) {
  // 递归函数定义：s1从[0, i1]和s2从[0, i2]能否组成s3 [0, i1 + i2]
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  let memo = Array(s1.length + 1);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(s2.length + 1);
  }
  function _isInterleave(s1, s2, s3, i1, i2) {
    if (i1 < 0 && i2 < 0) {
      return true;
    }
    if (s1[i1] !== s3[i1 + i2 + 1] && s2[i2] !== s3[i1 + i2 + 1]) {
      return false;
    }
    if (memo[i1 + 1][i2 + 1] !== undefined) {
      return memo[i1 + 1][i2 + 1];
    }

    if (s1[i1] == s3[i1 + i2 + 1] && s2[i2] == s3[i1 + i2 + 1]) {
      return memo[i1 + 1][i2 + 1] = _isInterleave(s1, s2, s3, i1 - 1, i2) || _isInterleave(s1, s2, s3, i1, i2 - 1);
    }
    if (s1[i1] == s3[i1 + i2 + 1]) {
      return memo[i1 + 1][i2 + 1] = _isInterleave(s1, s2, s3, i1 - 1, i2);
    }
    if (s2[i2] == s3[i1 + i2 + 1]) {
      return memo[i1 + 1][i2 + 1] = _isInterleave(s1, s2, s3, i1, i2 - 1);
    }
  }

  return _isInterleave(s1, s2, s3, s1.length - 1, s2.length - 1);
}