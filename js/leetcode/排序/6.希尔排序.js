// 希尔排序
function sortArray(nums) {
  let h = nums.length >> 1;

  // 控制元素分组的间隔
  while(h >= 1) {
    // 遍历每组元素
    for (let i = 0; i < h; i++) {
      // 对每组元素进行排序
      for (let j = i + h; j < nums.length; j += h) {
        let t = nums[j];
        let k;
        for (k = j; k - h >= 0 && t < nums[k - h]; k -= h) {
          nums[k] = nums[k - h];
        }
        nums[k] = t;
      }
    }
    
    h = h >> 1;
  }
  return nums;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}