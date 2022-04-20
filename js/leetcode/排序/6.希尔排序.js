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

// 第二版希尔排序：无需依次处理每个分组，直接依次处理每个元素即可
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      let t = nums[i];
      let j;
      for (j = i; j - h >= 0 && t < nums[j - h]; j -= h) {
        nums[j] = nums[j - h];
      }
      nums[j] = t;
    }
    h = h >> 1;
  }
  return nums;
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

// 20220329
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    // 遍历每组元素
    for (let i = 0; i < h; i++) {
      for (let j = i + h; j < nums.length; j += h) {
        for (let k = j; k - h >= 0; k -= h) {
          if (nums[k - h] > nums[k]) {
            swap(nums, k, k - h);
          } else {
            break;
          }
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

// 希尔排序
function sortArray(nums) {
  // 分组间隔
  let h = nums.length >> 1;
  while(h >= 1) {
    // 遍历每组元素
    for (let i = 0; i < h; i++) {
      // 从每组元素的第二个元素开始遍历进行插入排序
      for (let j = i + h; j < nums.length; j += h) {
        // 遍历j元素前面的元素进行插入排序
        for (let k = j; k - h >= 0; k -= h) {
          if (nums[k - h] > nums[k]) {
            swap(nums, k - h, k);
          } else {
            break;
          }
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

// 不逐个分组进行插入排序，直接逐个元素进行插入排序
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    // 直接逐个元素进行插入排序
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220330
function sortArray(nums) {
  // 分组间隔
  let h = nums.length >> 1;
  while(h >= 1) {
    // 遍历每组数据
    for (let i = 0; i < h; i++) {
      // 对每组数据进行插入排序
      for (let j = i + h; j < nums.length; j += h) {
        for (let k = j; k - h >= 0; k -= h) {
          if (nums[k - h] > nums[k]) {
            swap(nums, k - h, k);
          } else {
            break;
          }
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

// 不分组遍历
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220331
function sortArray(nums) {
  let h = nums.length >> 1;

  while(h >= 1) {
    // 遍历分组
    for (let i = 0; i < h; i++) {
      // 对分组进行插入排序
      for (let j = i + h; j < nums.length; j += h) {
        // 遍历j元素前面的元素
        for (let k = j; k - h >= 0; k -= h) {
          if (nums[k - h] > nums[k]) {
            swap(nums, k - h, k);
          } else {
            break;
          }
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

// 直接遍历元素
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220401
function sortArray(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220406
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220414
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220415
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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

// 20220418
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
        } else {
          break
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

// 20220420
function shellSort(nums) {
  let h = nums.length >> 1;
  while(h >= 1) {
    for (let i = h; i < nums.length; i++) {
      for (let j = i; j - h >= 0; j -= h) {
        if (nums[j - h] > nums[j]) {
          swap(nums, j - h, j);
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