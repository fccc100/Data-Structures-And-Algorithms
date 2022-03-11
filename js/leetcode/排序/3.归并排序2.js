// 归并排序
function sortArray(nums) {
  // 对nums数组[0, n - 1]区间进行排序
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 对nums数组[l, r]区间进行合并
function mergeSort(nums, l, r) {
  if (l >= r) return;
  // 归并排序使用分治思想,将数组拆分成左右两个数组,对左右两个数组分别排序,排序完成后再合并左右两个有序数组

  // 分治,先求中点,再对中点左右区间分别进行排序
  let mid = Math.floor(l + (r - l) / 2);

  // 对左右两个区间分别进行排序
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  
  // 左右两个数组都排序完成后,合并两个有序数组
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r);
  }
}

// 合并数组的[l, mid], [mid + 1, r]两个区间
function merge(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);

  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] <= temp[j - l]) {
      nums[k] = temp[i - l];
      i++;
    } else {
      nums[k] = temp[j - l];
      j++;
    }
  }
}

