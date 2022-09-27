// 第一版冒泡排序
function sortArray(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // 第i轮循环已经将后面i位排好序，只需要遍历至length - i - 1
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 第二版冒泡排序优化
function sortArray(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // 优化：记录当前这一轮循环是否发生过交换，如果没有发生过交换，说明所有元素都是有序的了，外层循环可以直接退出
    let isSwaped = false;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }
  return nums;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 第三版冒泡排序优化
function sortArray(nums) {
  for (let i = 0; i < nums.length - 1;) {

    // 优化2：内存循环记录最后一次交换位置的索引，外层循环可以跳过对应次数
    let lastSwapedIndex = 0;
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        lastSwapedIndex = j + 1;
      }
    }
    i = nums.length - lastSwapedIndex;
  }
  return nums;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}