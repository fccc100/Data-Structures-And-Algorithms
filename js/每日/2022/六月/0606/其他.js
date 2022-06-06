// 76.最小覆盖子串
var minWindow = function (s, t) {
  // 用map存储t中每个字符出现的频率
  let tMap = new Map();
  for (let i = 0; i < t.length; i++) {
    if (tMap.has(t[i])) {
      tMap.set(t[i], tMap.get(t[i]) + 1);
    } else {
      tMap.set(t[i], 1);
    }
  }

  let cntMap = new Map();
  let l = 0;
  let r = -1;
  let minLen = Infinity;
  let resL = -1;
  let resR = -1;
  // 遍历s字符串
  while (r < s.length) {
    r++;
    // 如果右边界未出界且tMap中包含r位置的字符，这个字符出现次数 + 1
    if (r < s.length && tMap.has(s[r])) {
      if (cntMap.has(s[r])) {
        cntMap.set(s[r], cntMap.get(s[r]) + 1);
      } else {
        cntMap.set(s[r], 1);
      }
    }

    // 判断t中的每个字符是否都在s中出现
    while (check(tMap, cntMap) && l <= r) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        resL = l;
        resR = r + 1;
      }
      if (cntMap.has(s[l])) {
        cntMap.set(s[l], cntMap.get(s[l]) - 1);
        if (cntMap.get(s[l]) == 0) {
          cntMap.delete(s[l]);
        }
      }
      l++;
    }
  }
  return resL == -1 ? '' : s.substring(resL, resR);
};

// 检查t中的每个字符是否都在当前区间出现
function check(tMap, cntMap) {
  for (let entry of tMap) {
    let key = entry[0];
    let val = entry[1];

    // tMap中的字符必须在cntMap中出现且出现的次数比tMap中的次数多
    if (!cntMap.has(key) || cntMap.get(key) < val) {
      return false;
    }
  }
  return true;
}