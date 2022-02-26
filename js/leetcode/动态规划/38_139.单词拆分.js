// 139. 单词拆分
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

// 示例 1：
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

// 递归
function wordBreak(s, wordDict) {

  // 递归函数定义：s字符串能否由wordDict中的单词组成
  function _wordBread(s, wordDict) {
    if (s === '') {
      return true;
    }

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let l = wordDict[i].length;
      if (l <= s.length && s.substr(s.length - l, s.length) === wordDict[i]) {
        res = res || _wordBread(s.substr(0, s.length - l), wordDict);
      }
    }

    return res;
  }

  return _wordBread(s, wordDict);
}

// 记忆化搜索1, js使用对象存储 字符串 s 是否能由wordDict组成
function wordBreak(s, wordDict) {
  let memo = {};
  // 递归函数定义：s字符串能否由wordDict中的单词组成
  function _wordBread(s, wordDict) {
    if (s === '') {
      return true;
    }

    if (memo[s] !== undefined) {
      return memo[s];
    }

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let l = wordDict[i].length;
      if (l <= s.length && s.substr(s.length - l, s.length) === wordDict[i]) {
        res = res || _wordBread(s.substr(0, s.length - l), wordDict);
      }
    }

    return memo[s] = res;
  }

  return _wordBread(s, wordDict);
};

// 记忆化搜索2
function wordBreak(s, wordDict) {
  let memo = [];
  function _wordBread(s, wordDict, index) {
    if (index == 0) {
      return true;
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    let res = false;
    for (let i = 0; i < wordDict.length; i++) {
      let l = wordDict[i].length;
      if (l <= index && s.substr(index - l, l) === wordDict[i]) {
        res = res || _wordBread(s, wordDict, index - l);
      }
    }

    return memo[index] = res;
  }

  return _wordBread(s, wordDict, s.length);
}

// 动态规划
function wordBreak(s, wordDict) {
  // 状态定义：dp[i]表示s在长度为i时是否由wordDict组成
  let dp = Array(s.length + 1);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (wordDict[j].length <= i && s.substr(i - wordDict[j].length, wordDict[j].length) === wordDict[j]) {
        dp[i] = dp[i] || dp[i - wordDict[j].length];
      }
    }
  }

  return !!dp[s.length];
}