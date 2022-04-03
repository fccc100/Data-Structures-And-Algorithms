// 希尔排序
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j, j - h);
        } else {
          break;
        }
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

// 修改步长序列为1 4 13 40 121 ...(3n + 1)
function shellSort(nums) {
  let h = 1;
  while(h < nums.length) {
    h = 3 * h + 1;
  }

  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j, j - h);
        } else {
          break;
        }
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
