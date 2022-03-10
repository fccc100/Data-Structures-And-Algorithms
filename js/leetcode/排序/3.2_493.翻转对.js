// 493. 翻转对
// 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

// 你需要返回给定数组中的重要翻转对的数量。

// 示例 1:
// 输入: [1,3,2,3,1]
// 输出: 2

function reversePairs(nums) {
  let res = 0;
  let temp = nums.slice();
  
  function mergeSort(nums, l, r) {
    if (l >= r) return;
    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    merge(nums, l, mid, r);
  }

  function merge(nums, l, mid, r) {
    for (let i = l; i <= r; i++) {
      temp[i] = nums[i];
    }

    // 归并前先计算右区间中有几个 翻转对
    let i = l;
    let j = mid + 1;
    while(i <= mid) {
      while(j <= r && temp[i] > 2 * temp[j]) {
        j++;
      }
      res += j - mid - 1;
      i++;
    }

    i = l;
    j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        nums[k] = temp[j];
        j++;
      } else if (j > r) {
        nums[k] = temp[i];
        i++;
      } else if (temp[i] <= temp[j]) {
        nums[k] = temp[i];
        i++;
      } else {
        nums[k] = temp[j];
        j++;
      }
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return res;
}