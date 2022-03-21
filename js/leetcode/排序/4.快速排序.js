// 20220321
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}