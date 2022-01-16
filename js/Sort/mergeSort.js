// 归并排序
function mergeSort(nums) {
  sort(nums, 0, nums.length - 1);
  return nums;
}

function sort(nums, left, right) {
  if (left >= right) return;

  // 优化2：小规模数据转变为使用插入排序
  if (right - left <= 15) {
    // insertionSort(nums, left, right);
    // return;
  }
  let mid = left + Math.floor((right - left) / 2);
  sort(nums, left, mid);
  sort(nums, mid + 1, right);

  // 优化1：如果mid值 <= mid + 1的值，说明这个数组本身就是有序的了，不需要进行merge操作
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, left, mid, right);
  }
}

// 将nums数组从[left, mid] 及 [mid + 1, right]区间进行归并
function merge(nums, left, mid, right) {
  let temp = nums.slice(left, right + 1);
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k ++) {
    if (i > mid) {
      // k从0开始，j、i与k存在left偏移，需要减去
      nums[k] = temp[j - left];
      j ++;
    } else if (j > right) {
      nums[k] = temp[i - left];
      i ++;
    } else if (temp[i - left] < temp[j - left]) {
      nums[k] = temp[i - left];
      i ++;
    } else {
      nums[k] = temp[j - left];
      j ++;
    }
  }
}