function sort(nums) {
  mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let mid = l + Math.floor((r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r);
  }
}

// 合并两个有序数组
function merge(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j ++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i ++;
    } else if (temp[i - l] < temp[j - l]) {
      nums[k] = temp[i - l];
      i ++;
    } else {
      nums[k] = temp[j - l];
      j ++;
    }
  }
}

function sort1(nums) {
  mergeSort1(nums, 0, nums.length - 1);
}

function mergeSort1(nums, l, r) {
  if (l >= r) return;
  let mid = l + Math.floor((r - l) / 2);
  mergeSort1(nums, l, mid);
  mergeSort1(nums, mid + 1, r);

  if (nums[mid] > nums[mid + 1]) {
    merge1(nums, l, mid, r);
  }
}

function merge1(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    
  }
}