// 二分查找的两种形式:
// 1.如果r初始取的是nums.length - 1,那意味着在[l, r]区间查找,所以循环可以取l=r,因为l=r时还有一个元素
// 并且当mid位置元素大于target时,r可以更新为mid - 1,因为是右闭区间,mid - 1处的元素可以在下一轮循环搜索到

// 2.如果r初始取的是nums.length,此时在[l, r)区间查找,所以循环不能取l=r,因为l=r时区间内没有任何元素了.
// 当mid位置元素大于target时,r应该更新为mid,因为右开区间,更新为mid才能使得mid - 1的位置能在下轮循环搜索到
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  // 对[l, r]进行搜索
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }

  return -1;
}

function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length;
  // 对[l, r)区间进行搜索
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid;
    }
  }

  return -1;
}