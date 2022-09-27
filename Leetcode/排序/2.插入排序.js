// 插入排序
// 插入排序由于内层循环可以提前终止，所以当数组本身有序时，时间复杂度降为O(n)
function insertionSort(nums) {
  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        swap(j, j - 1);
      } else {
        break;
      }
    }
  }
  return nums;
}