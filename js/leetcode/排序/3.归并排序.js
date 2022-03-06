// 归并排序
function sort(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 
function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);

  // 先处理[l, mid]区间
  mergeSort(nums, l, mid);

  // 再处理[mid + 1, r]区间
  mergeSort(nums, mid + 1, r);

  // 将处理完的[l, mid], [mid, r]两个区间进行归并
  merge(nums, l, mid, r);
  return nums;
}

// 将nums数组的[l, mid]区间和[mid + 1, r]区间进行归并
function merge(nums, l, mid, r) {
  // 需要一个临时的[l, r + 1]区间的数组用于比对原始数据大小
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    // 如果左边的区间没有元素了，取右边
    if (i > mid) {
      nums[k] = temp[j - l];
      j ++;
    } else if (j > r) {

      // 如果右边的区间没有元素了，取左边
      nums[k] = temp[i - l];
      i ++;
    } else if (temp[i - l] < temp[j - l]) {

      // 两边区间都还有元素，比对对应位置元素大小 取元素较小的一边
      nums[k] = temp[i - l];
      i ++;
    } else {
      nums[k] = temp[j - l];
      j ++;
    }
  }
}