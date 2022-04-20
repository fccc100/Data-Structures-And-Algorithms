// 20220321
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220322
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 随机索引的快速排序
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = randomIndex(l, r);
  swap(nums, l, p);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function randomIndex(l, r) {
  return l + Math.round(Math.random() * (r - l));
}

//20220323
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = randomIndex(l, r);
  swap(nums, p, l);
  
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function randomIndex(l, r) {
  return l + Math.round(Math.random() * (r - l));
}

// 20220324
// 快速排序1.partition过程使用第一个值作为标定点
// 性能缺陷：当数组本身就是有序数组或者数组元素相等时，时间复杂度退化为O(n^2)
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 快速排序2.
// 基于第一版快速排序，解决有序数组时间复杂度退化为O(n^2)的问题
// 不再固定使用第一个值作为标定点，而是每次随机选取一个索引作为标定点
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = randomIndex(l, r);
  swap(nums, l, p);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function randomIndex(l, r) {
  return l + Math.round(Math.random() * (r - l));
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 快速排序3.
// 第二版增加随机化的快速排序解决了排序有序数组时间复杂度为O(n^2)的问题，但是没有解决排序相同元素数组的问题
// 使用双路快排，解决排序相同元素数组时间复杂度为O(n^2)的问题
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = randomIndex(l, r);
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }

    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, l, j);
  return j;
}

function randomIndex(l, r) {
  return l + Math.round(Math.random() * (r - l));
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220325
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}


// 第一版快速排序,使用第一个元素作为标定点
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 使用第一个元素作为标定点存在问题:对于有序数组的排序时间复杂度退化为O(n^2)
// 第二版快速排序:随机标定点
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 使用随机标定点存在问题:所有元素相等时时间复杂度退化为O(n^2)
// 第三版快速排序:双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220326
// 第一版快速排序
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 第二版快速排序：随机标定点
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, l, p);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 第三版快速排序：双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 第四版快速排序：三路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p[0]);
  quickSort(nums, p[1], r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, l, p);

  // 小于标定点的元素放左边，等于标定点的元素放中间，大于标定点的元素放右边
  let lt = l;
  let i = l + 1;
  let gt = r + 1;
  while(i < gt) {
    if (nums[i] < nums[l]) {
      lt++;
      swap(nums, lt, i);
      i++;
    } else if (nums[i] > nums[l]) {
      gt--;
      swap(nums, gt, i)
    } else {
      i++;
    }
  }
  swap(nums, lt, l);
  return [lt - 1, gt];
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220328
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220329
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 随机标定点
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }

  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220330
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 随机标定点 + 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220331
// 快排1
// 使用第一个元素作为标定点，在数组本身有序或者数组元素相同时退化为O(n^2)
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 快排2 使用随机标定点 + 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, l, p);

  // 左右两路快排
  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 快排3. 三路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p[0]);
  quickSort(nums, p[1], r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let left = l;
  let right = r + 1;
  let i = l + 1;
  while(i < right) {
    if (nums[i] < nums[l]) {
      left++;
      swap(nums, i, left);
      i++;
    } else if (nums[i] > nums[l]) {
      right--;
      swap(nums, i, right);
    } else {
      i++;
    }
  }
  swap(nums, left, l);
  return [left - 1, right]
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220401
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220406
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }

    if (i >= j) {
      break;
    }
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220412
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 双路快排
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }
  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, l, p);

  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && nums[i] < nums[l]) {
      i++;
    }
    while(j >= i && nums[j] > nums[l]) {
      j--;
    }
    if (i >= j) {
      break;
    }

    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// 20220419
function sortArray(nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums, l, r) {
  if (l >= r) {
    return;
  }

  let p = partition(nums, l, r);
  quickSort(nums, l, p - 1);
  quickSort(nums, p + 1, r);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let j = l;
  for (let i = l + 1; i < nums.length; i++) {
    if (nums[i] < nums[l]) {
      j++;
      swap(nums, i, j);
    }
  }
  swap(nums, l, j);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}