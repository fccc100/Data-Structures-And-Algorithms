/**
 * 0522
 */
//  139. 单词拆分
var wordBreak = function(s, wordDict) {
  // s在[0, index)是否能拆分
  function __wordBreak(s, wordDict, index) {
    if (index == 0) return true;

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let len = wordDict[i].length;
      if (len <= index && s.substr(index - len, len) == wordDict[i]) {
        res = res || __wordBreak(s, wordDict, index - len);
      }
    }
    return res;
  }

  return __wordBreak(s, wordDict, s.length);
}

var wordBreak = function(s, wordDict) {
  // s在[0, index)是否能拆分
  let memo = Array(s.length + 1);
  function __wordBreak(s, wordDict, index) {
    if (index == 0) return true;

    if (memo[index] !== undefined) {
      return memo[index];
    }

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let len = wordDict[i].length;
      if (len <= index && s.substr(index - len, len) == wordDict[i]) {
        res = res || __wordBreak(s, wordDict, index - len);
      }
    }

    return memo[index] = res;
  }

  return __wordBreak(s, wordDict, s.length);
}

// 注意在调用递归函数时，传入的索引是s.length 还是 s.length - 1,两者在处理时有很大区别
// 下面是传入s.length - 1的处理
var wordBreak = function(s, wordDict) {
  
  let memo = Array(s.length);
  function __wordBreak(s, wordDict, index) {
    if (index < 0) return true;

    if (memo[index] !== undefined) {
      return memo[index];
    }

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let len = wordDict[i].length;
      if (len <= index + 1 && s.substr(index - len + 1, len) == wordDict[i]) {
        res = res || __wordBreak(s, wordDict, index - len);
      }
    }

    return memo[index] = res;
  }

  return __wordBreak(s, wordDict, s.length - 1);
}

// 动态规划
var wordBreak = function(s, wordDict) {
  // dp[i]表示字符串在[0, i)范围是否能拆分
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (wordDict[j].length <= i && s.substr(i - wordDict[j].length, wordDict[j].length) == wordDict[j]) {
        dp[i] = dp[i] || dp[i - wordDict[j].length];
      }
    }
  }
  return dp[s.length];
}
