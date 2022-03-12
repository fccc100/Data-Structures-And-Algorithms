// 归并排序
function sort(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 
function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);

  // 先处理[l, mid]区间
  mergeSort(nums, l, mid);

  // 再处理[mid + 1, r]区间
  mergeSort(nums, mid + 1, r);

  // 将处理完的[l, mid], [mid, r]两个区间进行归并
  merge(nums, l, mid, r);
  return nums;
}

// 将nums数组的[l, mid]区间和[mid + 1, r]区间进行归并
function merge(nums, l, mid, r) {
  // 需要一个临时的[l, r + 1]区间的数组用于比对原始数据大小
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    // 如果左边的区间没有元素了，取右边
    if (i > mid) {
      nums[k] = temp[j - l];
      j ++;
    } else if (j > r) {

      // 如果右边的区间没有元素了，取左边
      nums[k] = temp[i - l];
      i ++;
    } else if (temp[i - l] < temp[j - l]) {

      // 两边区间都还有元素，比对对应位置元素大小 取元素较小的一边
      nums[k] = temp[i - l];
      i ++;
    } else {
      nums[k] = temp[j - l];
      j ++;
    }
  }
}




// 2022-03-09
function sortArray(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 归并排序[l, r]区间
function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  merge(nums, l, mid, r);
}

// 归并nums数组[l, mid]和(mid, r]区间
function merge(nums, l, mid, r) {
  // 拷贝需要归并的这段区间数组，因为在归并过程中会将原数组中的值覆盖掉
  let temp = nums.slice(l, r + 1);

  // 定义i，j分别指向左边区间数组的第一位和右边区间数组的第一位
  let i = l;
  let j = mid + 1;

  // 遍历[l, r]区间的每个位置，用左右区间较小值将其覆盖
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] < temp[j - l]) {
      nums[k] = temp[i - l];
      i++;
    } else {
      nums[k] = temp[j - l];
      j++;
    }
  }
}

// 2022-03-09
// 归并排序，对nums数组进行排序
function sortArray(nums) {

  // 递归函数,对nums数组[0, n - 1]范围进行排序
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 归并排序分治过程，对nums[l, r]区间进行排序
function mergeSort(nums, l, r) {
  // 如果左边界大于等于右边界了，要么是只有一个元素，要么是没有元素，此时不需要排序
  if (l >= r) return;

  // 分治，找到l，r的中点，对其左右分别进行排序
  let mid = Math.floor(l + (r - l) / 2);

  // 对[l, mid]区间进行排序
  mergeSort(nums, l, mid);
  
  // 对[mid + 1, r]区间进行排序
  mergeSort(nums, mid + 1, r);

  // 对左右排序完后，将左右两个有序区间进行归并
  merge(nums, l, mid, r);
}

// 归并，对nums数组[l, mid]区间及[mid + 1, r]两个有序区间进行归并
function merge(nums, l, mid, r) {
  // 由于归并过程中原数组的值会被覆盖，因此需要拷贝一份数组
  let temp = nums.slice(l, r + 1);

  // 定义两个指针i，j分别指向左区间的第一个元素和右区间的第一个元素
  let i = l;
  let j = mid + 1;

  // 循环l到r的每一个元素，用左区间和右区间的较小值将其覆盖
  for (let k = l; k <= r; k++) {
    // 左指针超过mid，说明左区间没有值了，直接使用右区间的值
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      // 右指针超过r，说明右区间没有值了，直接使用左区间的值
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] < temp[j - l]) {
      // 左区间的值较小，选用左区间的值
      nums[k] = temp[i - l];
      i++;
    } else {
      // 选用右区间的值
      nums[k] = temp[j - l];
      j++;
    }
  }
}

// 归并排序优化：
// 1.区间1的最后一个元素小于区间2的第一个元素时，无需进行归并操作
// 2.temp临时空间提前申请传入，无需每次都开空间
function sortArray(nums) {
  let temp = nums.slice();
  mergeSort(nums, 0, nums.length - 1, temp);
  return nums;
}

function mergeSort(nums, l, r, temp) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);
  mergeSort(nums, l, mid, temp);
  mergeSort(nums, mid + 1, r, temp);

  // 优化1：区间1的最后一个元素小于区间2的第一个元素时，无需进行归并操作
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r, temp);
  }
}

function merge(nums, l, mid, r, temp) {
  // 优化2：temp数组一开始就开好空间通过参数传递进来，不需要每次都重新开空间
  for (let i = l; i <= r; i++) {
    temp[i] = nums[i];
  }
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j];
      j++;
    } else if (j > r) {
      nums[k] = temp[i];
      i++;
    } else if (temp[i] < temp[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
    }
  }
}

// 自底向上的归并排序
function sortArray(nums) {
  let n = nums.length;
  let temp = nums.slice();

  // 遍历size，每次合并size大小个元素
  // 
  for (let size = 1; size < n; size += size) {
    // 遍历需要合并的区间
    // 合并[i, i + size - 1], [i + size, i + size + size - 1]两个区间
    for (let i = 0; i + size < n; i += size + size) {
      if (nums[i + size - 1] > nums[i + size]) {
        merge(nums, i, i + size - 1, Math.min(i + size + size - 1, n - 1), temp);
      }
    }
  }
}

// 2022-03-10
function sortArray(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// 对数组[l, r]区间进行排序
function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);

  // 对nums数组[l, mid], [mid + 1, r]区间进行归并
  merge(nums, l, mid, r);
}

function merge(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] <= temp[j - l]) {
      nums[k] = temp[i - l];
      i++;
    } else {
      nums[k] = temp[j - l];
      j++;
    }
  }
}

// 2022-03-10 21:40
function sortArray(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);

  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r);
  }
}

function merge(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);

  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] <= temp[j - l]) {
      nums[k] = temp[i - l];
      i++;
    } else {
      nums[k] = temp[j - l];
      j++;
    }
  }
}

function sortArray(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

function mergeSort(nums, l, r) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r);
  }
}

function merge(nums, l, mid, r) {
  let temp = nums.slice(l, r + 1);
  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j - l];
      j++;
    } else if (j > r) {
      nums[k] = temp[i - l];
      i++;
    } else if (temp[i - l] <= temp[j - l]) {
      nums[k] = temp[i - l];
      i++;
    } else {
      nums[k] = temp[j - l];
      j++;
    }
  }
}

/**
 * 20220312
 */

function sortArray(nums) {
  let temp = Array(nums.length);
  mergeSort(nums, 0, nums.length - 1, temp);
  return nums;
}

function mergeSort(nums, l, r, temp) {
  if (l >= r) return;
  let mid = Math.floor(l + (r - l >> 1));

  mergeSort(nums, l, mid, temp);
  mergeSort(nums, mid + 1, r, temp);
  if (nums[mid] > nums[mid + 1]) {
    merge(nums, l, mid, r, temp);
  }
}

function merge(nums, l, mid, r, temp) {
  for (let i = l; i <= r; i++) {
    temp[i] = nums[i];
  }

  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      nums[k] = temp[j];
      j++;
    } else if (j > r) {
      nums[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
    }
  }
}

// 自底向上的归并排序
function sortArray(nums) {
  let n = nums.length;

  // 遍历每次合并区间的大小
  for (let i = 1; i < n; i += i) {

    // 合并[j, j + i - 1], [j + i, j + i + i - 1]
    for (let j = 0; j + i < n; j += i + i ) {
      merge(nums, j, j + i - 1, Math.min(j + i + i - 1, n - 1));
    }
  }
}

function sortArray(nums) {
  let n = nums.length;
  let temp = Array(n);

  for (let size = 1; size < n; size += size) {

    // [i, i + size - 1], [i + size, i + size + size - 1];
    for (let i = 0; i + size < n; i += size + size) {
      if (nums[i + size - 1] > nums[i + size]) {
        merge(nums, i, i + size - 1, Math.min(i + size + size - 1, n - 1), temp);
      }
    }
  }
  return nums;
}