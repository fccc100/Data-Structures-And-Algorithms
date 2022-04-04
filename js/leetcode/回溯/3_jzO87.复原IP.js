// 剑指 Offer II 087. 复原 IP 
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。

// 示例 1：
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]

function restoreIpAddresses(s) {
  let segmentCount = 4;
  let res = [];
  let segments = Array(4);

  // 从s的[index, n]区间内查找IP地址的第segmentIndex段
  function _restoreIpAddresses(s, segmentIndex, index) {
    // 如果找到第四段并且字符串也到了结尾，则找到一个答案
    if (segmentIndex == segmentCount) {
      if (index == s.length) {
        res.push(segments.join('.'));
      }
      return;
    }

    if (index == s.length) return;

    if (s[index] == '0') {
      segments[segmentIndex] = 0;
      _restoreIpAddresses(s, segmentIndex + 1, index + 1);
    }

    let addr = 0;
    for (let i = index; i < s.length; i++) {
      addr = addr * 10 + Number(s[i]);
      if (addr > 0 && addr <= 255) {
        segments[segmentIndex] = addr;
        _restoreIpAddresses(s, segmentIndex + 1, i + 1);
      } else {
        break;
      }
    }
  }

  _restoreIpAddresses(s, 0, 0);
  return res;
}