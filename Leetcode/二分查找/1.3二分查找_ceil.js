// 查找ceil位置: 如果数组中包含target，则返回最大的target的索引，如果不包含target，则返回大于target的最小值的位置

// 35. 搜索插入位置
var searchInsert = function(nums, target) {
  // 先使用二分查找upper函数找到大于target的最小值的索引
  let p = upper(nums, target);
  // 再看大于target的最小值的前一个元素是否就是target
  return nums[p - 1] == target ? p - 1 : p;
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