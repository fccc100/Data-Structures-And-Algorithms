// 剑指 Offer II 069. 山峰数组的顶部
// 符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：

// arr.length >= 3
// 存在 i（0 < i < arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。

// 示例 1：
// 输入：arr = [0,1,0]
// 输出：1

// 线性查找
function peakIndexInMountainArray(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }
  return index;
}

// 二分查找
function peakIndexInMountainArray(arr) {
  let l = 0;
  let r = arr.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      l = mid + 1;
    } else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      r = mid;
    }
  }
  return -1;
}