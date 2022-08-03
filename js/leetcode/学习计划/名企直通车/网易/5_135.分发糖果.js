// 135. 分发糖果
// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

// 示例 1：

// 输入：ratings = [1,0,2]
// 输出：5
// 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length < 2) return 1;
  let candys = Array(ratings.length).fill(1);

  // 先从左往右遍历，如果当前孩子评分比前一个孩子评分高，当前糖果就在前一个的糖果上加1
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1;
    }
  }

  // 再从右往左遍历，如果当前孩子评分比后一个孩子评分高并且当前孩子糖果反而更少，就更新当前孩子的糖果为后一个孩子糖果加1
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candys[i] <= candys[i + 1]) {
      candys[i] = candys[i + 1] + 1;
    }
  }

  // 求糖果总和
  let sum = 0;
  for (let i = 0; i < candys.length; i++) {
    sum += candys[i];
  }
  return sum;
};