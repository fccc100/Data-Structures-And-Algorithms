// 剑指 Offer 51. 数组中的逆序对
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

// 使用归并排序的思想求解
function reversePairs(nums) {
  let res = 0;

  function mergeSort(nums, l, r) {
    if (l >= r) return;
    let mid = Math.floor(l + (r - l) / 2);
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    if (nums[mid] > nums[mid + 1]) {
      merge(nums, l, mid, r);
    }
  }
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
        res += mid - i + 1;
        nums[k] = temp[j - l];
        j++;
      }
    }
  }

  mergeSort(nums, 0, nums.length - 1);
  return res;
};