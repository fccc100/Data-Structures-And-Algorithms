// 插入排序
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0 && nums[j - 1] > nums[j]; j--) {
      swap(nums, j, j - 1);
    }
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 插入排序的优化：找到合适的位置再交换，减少交换操作
function insertionSort1(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numsI = nums[i];
    let j;
    for (j = i; j > 0 && nums[j - 1] > nums[j]; j--) {
      nums[j] = nums[j - 1];
    }
    nums[j] = numsI;
  }
}