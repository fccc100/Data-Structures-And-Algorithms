/**
 * 这里是二分查找的二个变种
 * 1.查找大于target的最小值(最小值的索引)
 * 2.查找大于等于target的最小值(最小的索引)
 */

// 查找大于target的最小值的索引
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] === target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    }
  }

  return l;
}


function upper(nums, target) {
  let l = 0;
  let r = nums.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// 查找大于target的最小值
// 744. 寻找比目标字母大的最小字母
var nextGreatestLetter = function(letters, target) {
  let l = 0;
  // 查找的是大于target的最小值，所以可能最后一个数都小于target，r初始应该为n
  let r = letters.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (letters[mid].charCodeAt() <= target.charCodeAt()) {
      // 因为要找的是大于target的最小值，所以小于等于target的值不可能是答案，l = mid + 1;
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l >= letters.length ? letters[0] : letters[l];
}


// 查找大于等于target的最小索引
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] < target) {
      l = mid + 1;
    }  else if (nums[mid] >= target) {
      r = mid;
    }
  }
  return l;
}