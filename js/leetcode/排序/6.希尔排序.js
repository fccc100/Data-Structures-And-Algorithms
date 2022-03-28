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

// 20220328 希尔排序
function sortArray(nums) {
  // 将nums分组,h为每组数据元素间的间隔,依次为n/2 , n/4, n/8 ... 1;
  let h = nums.length >> 1;

  // 只要间距大于等于1,则进行排序
  while(h >= 1) {
    // 遍历每组元素, 每组元素的第一个元素就是0...h位置的元素
    for (let i = 0; i < h; i++) {
      // 对每组元素进行插入排序, 从每组元素的第二个元素开始遍历,依次往后加h个元素
      for (let j = i + h; j < nums.length; j += h) {
        let t = nums[j];
        let k;
        for (k = j; k - h >= 0 && nums[k - h] > t; k-= h) {
          nums[k] = nums[k - h];
        }
        nums[k] = t;
      }
    }

    h = h >> 1;
  }

  return nums;
}