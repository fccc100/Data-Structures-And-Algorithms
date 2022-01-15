// 选择排序
// 从i + 1处开始寻找最小的数与i位置交换
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    swap(nums, i, minIndex);
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}