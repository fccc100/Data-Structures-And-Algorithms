// 选择排序
// 外层从0到n-1循环，内层从i到n - 1选出最小值与外层i交换
function selectionSort(nums) {
  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    swap(i, minIndex);
  }

  return nums;
}