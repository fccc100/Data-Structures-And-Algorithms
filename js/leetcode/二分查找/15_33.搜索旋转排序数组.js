// 33. 搜索旋转排序数组
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
// 例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

// 示例 1：
// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4

// 1.线性查找
function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
  return -1;
}

// 2.二分查找
// 将数组一分为二，其中一定有一个是有序的，另一个可能是有序，也能是部分有序。
// 此时有序部分用二分法查找。无序部分再一分为二，其中一个一定有序，另一个可能有序，可能无序。就这样循环. 
function search(nums, target) {
  let n = nums.length;
  if (n == 1) {
    return nums[0] == target ? 0 : -1;
  }
  let l = 0;
  let r = n - 1;
  while(l <= r) {
    let mid = l + (r - l >> 1);
    // 找到target
    if (nums[mid] == target) {
      return mid;
    }

    // 如果mid位置的值大于等于0位置的值,说明mid在旋转后前面的那段有序区间
    if (nums[0] <= nums[mid]) {
      // 如果nums[0] <= target && target < nums[mid] ,则继续在左边区间搜索
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      // nums[mid] < nums[0],说明是在旋转后后面的那段区间,这个时候如果nums[mid] < target && target <= nums[n - 1],则继续在右边区间搜索
      if (nums[mid] < target && target <= nums[n - 1]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }

  return -1;
}
