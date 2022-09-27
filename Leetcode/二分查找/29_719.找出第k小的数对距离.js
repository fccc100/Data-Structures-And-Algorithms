// 719. 找出第 K 小的数对距离
// 数对 (a,b) 由整数 a 和 b 组成，其数对距离定义为 a 和 b 的绝对差值。

// 给你一个整数数组 nums 和一个整数 k ，数对由 nums[i] 和 nums[j] 组成且满足 0 <= i < j < nums.length 。返回 所有数对距离中 第 k 小的数对距离。



// 示例 1：

// 输入：nums = [1,3,1], k = 1
// 输出：0
// 解释：数对和对应的距离如下：
// (1,3) -> 2
// (1,1) -> 0
// (3,1) -> 2
// 距离第 1 小的数对是 (1,1) ，距离为 0 。
// 示例 2：

// 输入：nums = [1,1,1], k = 2
// 输出：0
// 示例 3：

// 输入：nums = [1,6,1], k = 3
// 输出：5

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1, 1, 2, 3, 4, 4, 5, 6, 8
// 在[1, 7]范围二分查找
// 第一次二分 mid = 4, 找数对距离为4的个数
// 从nums的[0, j]范围内查找nums[j] - mid的位置
var smallestDistancePair = function (nums, k) {
  // 先对数组进行排序
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let l = 0;
  let r = nums[n - 1] - nums[0];

  // 二分查找[0, max(nums) - min(nums)]
  while (l <= r) {
    let mid = l + (r - l >> 1);
    let cnt = 0;

    for (let j = 0; j < n; j++) {
      // 从nums[0, j]范围内查找大于等于target的最小值的索引
      let i = binarySearch(nums, j, nums[j] - mid);
      cnt += j - i;
    }

    if (cnt >= k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

function binarySearch(nums, end, target) {
  let l = 0;
  let r = end;
  while (l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
