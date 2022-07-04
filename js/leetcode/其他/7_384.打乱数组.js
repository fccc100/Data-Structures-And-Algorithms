// 384. 打乱数组
// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

// 实现 Solution class:

// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果


// 示例 1：

// 输入
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// 输出
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// 解释
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
// solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
// solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]

/**
 * @param {number[]} nums
 */

// Knuth洗牌算法
var Solution = function (nums) {
  this.nums = nums;
  this.originNums = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.originNums.slice();
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {

  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  // Knuth洗牌算法
  // 从后往前遍历，当前位置为i
  // 随机生成一个[0, i]的索引，与当前i位置进行交换
  for (let i = this.nums.length - 1; i >= 0; i--) {
    swap(this.nums, i, 0 + Math.floor(Math.random() * (i + 1 - 0)));
  }

  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */