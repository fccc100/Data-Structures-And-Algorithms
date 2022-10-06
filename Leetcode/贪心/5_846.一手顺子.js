// 846. 一手顺子
// Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

// 给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// 输出：true
// 解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
// 示例 2：

// 输入：hand = [1,2,3,4,5], groupSize = 4
// 输出：false
// 解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  let n = hand.length;
  if (n % groupSize != 0) {
    return false;
  }

  hand.sort((a, b) => a - b);

  // 统计hand中每个元素的个数
  let cntMap = new Map();
  for (let i = 0; i < n; i++) {
    cntMap.set(hand[i], cntMap.get(hand[i]) ? cntMap.get(hand[i]) + 1 : 1);
  }

  for (let i = 0; i < hand.length; i++) {
    if (!cntMap.has(hand[i])) {
      continue;
    }
    for (let j = 0; j < groupSize; j++) {
      let num = hand[i] + j;
      if (!cntMap.has(num)) {
        return false;
      }

      cntMap.set(num, cntMap.get(num) - 1);
      if (cntMap.get(num) == 0) {
        cntMap.delete(num);
      }
    }
  }
  return true;
};
