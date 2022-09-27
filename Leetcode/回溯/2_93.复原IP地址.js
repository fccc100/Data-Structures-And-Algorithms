// 93. 复原 IP 地址
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

// 示例 1：
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]

function restoreIpAddresses(s) {
  const segmentCount = 4;
  let segments = Array(4);
  let res = [];


  function _restoreIpAddresses(s, segIndex, index) {
    // 如果找到第四段并且字符串也到了结尾，说明找到一种答案
    if (segIndex == segmentCount) {
      if (index == s.length) {
        res.push(segments.join('.'));
      }
      return
    }

    // 还没找到第四段字符串就已经到了结尾，再找也没有了，直接返回
    if (index == s.length) return;

    // 如果是前置0，那只能0单独做一段
    if (s[index] == '0') {
      segments[segIndex] = 0;
      _restoreIpAddresses(s, segIndex + 1, index + 1);
    }

    let addr = 0;
    for (let i = index; i < s.length; i++) {
      addr = addr * 10 + (s[i] - '0');
      if (addr > 0 && addr < 256) {
        segments[segIndex] = addr;
        _restoreIpAddresses(s, segIndex + 1, i + 1);
      } else {
        break;
      }
    }
  }

  _restoreIpAddresses(s, 0, 0);
  return res;
}