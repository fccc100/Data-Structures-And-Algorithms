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