// 658. 找到 K 个最接近的元素
// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

// 整数 a 比整数 b 更接近 x 需要满足：

// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b

// 示例 1：

// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]
// 示例 2：

// 输入：arr = [1,2,3,4,5], k = 4, x = -1
// 输出：[1,2,3,4]

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
// 最后使用了排序，何不直接按距离排序？？O(nlogn)
var findClosestElements = function (arr, k, x) {
  let minIndex = -1;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - x) < min) {
      minIndex = i;
      min = Math.abs(arr[i] - x);
    }
  }

  let l = minIndex;
  let r = minIndex;

  let res = [];
  while (k > 0) {
    let cur;
    if (l < 0) {
      cur = r;
      r++;
    } else if (r >= arr.length) {
      cur = l;
      l--;
    } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      cur = l;
      l--;
      if (r == minIndex) r++;
    } else {
      cur = r;
      r++;
      if (l == minIndex) l--;
    }

    res.push(arr[cur]);
    k--;
  }
  return res.sort((a, b) => a - b);
};

// 2.不排序
var findClosestElements = function (arr, k, x) {
  let minIndex = -1;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - x) < min) {
      minIndex = i;
      min = Math.abs(arr[i] - x);
    }
  }

  let l = minIndex;
  let r = minIndex;

  while (k > 0) {
    let cur;
    if (l < 0) {
      cur = r;
      r++;
    } else if (r >= arr.length) {
      cur = l;
      l--;
    } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      cur = l;
      l--;
      if (r == minIndex) r++;
    } else {
      cur = r;
      r++;
      if (l == minIndex) l--;
    }

    k--;
  }
  return arr.slice(l + 1, r);
};

// 3.二分查找
var findClosestElements = function (arr, k, x) {

  let r = binarySearch(arr, x);

  let l = r - 1;

  while (k > 0) {
    if (l < 0) {
      r++;
    } else if (r >= arr.length) {
      l--;
    } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      l--;
    } else {
      r++;
    }

    k--;
  }
  return arr.slice(l + 1, r);
};

// 找到 >= target 的第一个索引，下界
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length;
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