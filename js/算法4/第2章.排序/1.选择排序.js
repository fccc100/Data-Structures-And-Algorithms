// 算法4第2章 2.1初级排序算法
// 选择排序特点：
// 1.运行时间和输入无关
// 2.数据移动是最少的,交换次数和数组大小是线性关系
// 选择排序的时间复杂度是O(n^2)
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
  return nums;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}