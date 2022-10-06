// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

function findKthLargest(nums, k) {
  return selectK(nums, 0, nums.length - 1, nums.length - k)
}

function selectK(nums, l, r, k) {
  let p = partition(nums, l, r);
  if (k == p) {
    return nums[p];
  }
  if (k < p) {
    return selectK(nums, l, p - 1, k);
  }
  return selectK(nums, p + 1, r, k);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}