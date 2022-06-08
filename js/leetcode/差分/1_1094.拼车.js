// 1094. 拼车
// 车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

// 给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

// 当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。



// 示例 1：

// 输入：trips = [[2,1,5],[3,3,7]], capacity = 4
// 输出：false
// 示例 2：

// 输入：trips = [[2,1,5],[3,3,7]], capacity = 5
// 输出：true

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let diff = Array(1002).fill(0);

  // 差分，初始时车上没有人，差分数组都为0
  // 在上车的位置都加上 对应 人数，下车位置减去对应人数
  // 最后用差分数组反推原数组
  for (let i = 0; i < trips.length; i++) {
    diff[trips[i][1]] += trips[i][0];
    diff[trips[i][2]] -= trips[i][0];
  }

  for (let i = 0; i < diff.length; i++) {
    if (i > 0) {
      diff[i] += diff[i - 1];
    }
    if (diff[i] > capacity) return false;
  }
  return true;
};