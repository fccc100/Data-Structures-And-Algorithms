// 6114. 移动片段得到字符串
// 给你两个字符串 start 和 target ，长度均为 n 。每个字符串 仅 由字符 'L'、'R' 和 '_' 组成，其中：

// 字符 'L' 和 'R' 表示片段，其中片段 'L' 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 'R' 只有在其右侧直接存在一个 空位 时才能向 右 移动。
// 字符 '_' 表示可以被 任意 'L' 或 'R' 片段占据的空位。
// 如果在移动字符串 start 中的片段任意次之后可以得到字符串 target ，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：start = "_L__R__R_", target = "L______RR"
// 输出：true
// 解释：可以从字符串 start 获得 target ，需要进行下面的移动：
// - 将第一个片段向左移动一步，字符串现在变为 "L___R__R_" 。
// - 将最后一个片段向右移动一步，字符串现在变为 "L___R___R" 。
// - 将第二个片段向右移动散步，字符串现在变为 "L______RR" 。
// 可以从字符串 start 得到 target ，所以返回 true 。
// 示例 2：

// 输入：start = "R_L_", target = "__LR"
// 输出：false
// 解释：字符串 start 中的 'R' 片段可以向右移动一步得到 "_RL_" 。
// 但是，在这一步之后，不存在可以移动的片段，所以无法从字符串 start 得到 target 。
// 示例 3：

// 输入：start = "_R", target = "R_"
// 输出：false
// 解释：字符串 start 中的片段只能向右移动，所以无法从字符串 start 得到 target 。

/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let n = start.length;

  // 首先求出去掉 _ 之后的字符串
  let s1 = '';
  let s2 = '';
  for (let i = 0; i < start.length; i++) {
    if (start[i] == 'L' || start[i] == 'R') {
      s1 += start[i];
    }
  }
  for (let i = 0; i < target.length; i++) {
    if (target[i] == 'L' || target[i] == 'R') {
      s2 += target[i];
    }
  }
  // 如果去掉 _ 后两个字符串不相等直接返回false
  if (s1.length != s2.length || s1 != s2) {
    return false;
  }

  // 对start的每个位置，左边的L必须小于end中这个位置左边的L个数，因为多了的话没法往右推
  // 同理，对start的每个位置，左边的R必须大于end中这个位置左边的R个数， 因为少了说明右边多了R，多了没法往左推
  let s_l = 0;
  let s_r = 0;
  let t_l = 0;
  let t_r = 0;

  for (let i = 0; i < n; i++) {
    if (start[i] == 'L') {
      s_l++;
    } else if (start[i] == 'R') {
      s_r++;
    }

    if (target[i] == 'L') {
      t_l++;
    } else if (target[i] == 'R') {
      t_r++;
    }

    if (s_l > t_l) {
      return false;
    }
    if (s_r < t_r) {
      return false;
    }
  }
  return true;
};