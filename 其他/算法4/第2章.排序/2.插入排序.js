// 算法4第2章 2.1初级排序算法  插入排序
// 插入排序对已经有序的数组和元素都相同的数组进行排序时，时间复杂度可以降为O(n), 这可以用来作为高级排序算法的优化

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      if (nums[j - 1] > nums[j]) {
        swap(nums, j, j - 1);
      } else {
        break;
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

// 插入排序的优化：每次发现左边元素比自身大时，不急于交换数据，而是把数据右移，直到最后再做交换
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j;
    for (j = i; j - 1 >= 0; j--) {
      if (nums[j - 1] > temp) {
        nums[j] = nums[j - 1];
      } else {
        break;
      }
    }
    nums[j] = temp;
  }
  return nums;
}