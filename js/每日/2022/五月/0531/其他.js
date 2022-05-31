// 189. 轮转数组
// 简单的O(n)空间复杂度
var rotate = function (nums, k) {
  let res = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
  return nums;
};

// O(1)空间复杂度
// 先整个数组翻转
// 再[0, k - 1]翻转
// 再[k, n - 1]翻转
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

function reverse(nums, l, r) {
  while(l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
}

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}

// 283.移动零
var moveZeroes = function (nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    // 发现非零数字就往左移
    if (nums[i] != 0) {
      j++;
      swap(nums, i, j);
    }
  }
};

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}

// 167. 两数之和 II - 输入有序数组

// 简单的使用O(n)空间复杂度
var twoSum = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]), i + 1];
    } else {
      map.set(numbers[i], i + 1);
    }
  }
};

// O(1)空间复杂度
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while(l < r) {
    let temp = numbers[l] + numbers[r];
    if (temp == target) {
      return [l + 1, r + 1];
    } else if (temp < target) {
      l++;
    } else {
      r--;
    }
  }
}

// 567.字符串的排列
var checkInclusion = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;
  if (m > n) return false;

  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);

  // 先计算s1、s2前m个字符出现的频率
  for (let i = 0; i < m; i++) {
    count1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    count2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  // 如果频率一样，直接返回true
  if (count1.toString() == count2.toString()) {
    return true;
  }

  // 从m位置开始，每次把i - m位置的字符频率减一，把当前位置的字符频率加一，之后判断两个数组是否相等
  for (let i = m; i < n; i++) {
    count2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    count2[s2[i - m].charCodeAt() - 'a'.charCodeAt()]--;
    if (count2.toString() == count1.toString()) {
      return true;
    }
  }
  return false;
}