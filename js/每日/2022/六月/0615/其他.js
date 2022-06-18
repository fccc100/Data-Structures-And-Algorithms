// 719. 找出第 K 小的数对距离

// [1, 1, 2, 3, 4, 4, 6, 7, 8]  k = 3;
// 数对距离肯定在[0, 7]中
// 二分查找数对距离
// 第一轮：找数对距离小于等于4
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let l = 0;
  let r = nums[n - 1] - nums[0];
  while(l <= r) {
    let mid = l + (r - l >> 1);

    let cnt = 0;
    for (let j = 0; j < n; j++) {
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
}

function binarySearch(nums, end, target) {
  let l = 0;
  let r = end;

  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}