// 暴力匹配
function strStr(haystack, needle) {
  // 遍历主串，当遍历到i的位置加上字串的长度大于主串长度时终止
  for (let i = 0; i + needle.length - 1 < haystack.length; i++) {
    let j = 0;

    // 遍历字串，当j走到末尾时，说明匹配上，i即是结果
    for (; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
    if (j == needle.length) {
      return i;
    }
  }

  return -1;
}