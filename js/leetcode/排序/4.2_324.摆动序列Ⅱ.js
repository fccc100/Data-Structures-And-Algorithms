// 324. 摆动排序 II
// 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

// 你可以假设所有输入数组都可以得到满足题目要求的结果。

// 示例 1：

// 输入：nums = [1,5,1,1,6,4]
// 输出：[1,6,1,5,1,4]
// 解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。

// 简单排序
function wiggleSort(nums) {
  sort(nums);
  let n = nums.length;
  let temp = nums.slice();
  for (let i = 1; i < nums.length; i += 2) {
    nums[i] = temp[--n];
  }
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] = temp[--n];
  }
  return nums;
}

function sort(nums) {
  quickSort(nums, 0, nums.length - 1);
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

// 1470. 重新排列数组
// 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

// 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

// 示例 1：
// 输入：nums = [2,5,1,3,4,7], n = 3
// 输出：[2,3,5,4,1,7] 
// 解释：由于 x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 ，所以答案为 [2,3,5,4,1,7]

function shuffle(nums, n) {
  let temp = nums.slice();
  for (let i = 0; i < nums.length; i += 2) {
    nums[i] = temp[i >> 1];
  }
  for (let i = 1; i < nums.length; i += 2) {
    nums[i] = temp[n + (i >> 1)];
  }

  return nums;
}