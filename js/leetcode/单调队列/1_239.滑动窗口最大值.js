// 239. 滑动窗口最大值
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let n = nums.length;
  let res = [];

  let queue = new MonotonousQueue();
  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  res.push(queue.getMax());

  let l = 0;
  let r = k - 1;

  while (r < n) {
    queue.pop(nums[l]);
    l++;
    
    r++;
    if (r >= n) break;
    queue.push(nums[r]);
    res.push(queue.getMax());
  }
  return res;
};

class MonotonousQueue {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  push(val) {
    let data = this.data;
    if (!data.length) {
      data.push(val);
    } else {
      while (data.length && val > data[data.length - 1]) {
        data.pop();
      }
      data.push(val);
    }
  }

  pop(val) {
    if (val == this.data[0]) {
      this.data.shift();
    }
  }

  getMax() {
    return this.data[0];
  }
}


// 2.
var maxSlidingWindow = function(nums, k) {

  let n = nums.length;
  let queue = [];

  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }

  let res = [];
  res[0] = nums[queue[0]];
  for (let i = k; i < n; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);
    while (queue[0] <= i - k) {
      queue.shift();
    }
    res.push(nums[queue[0]]);
  }
  return res;
}
