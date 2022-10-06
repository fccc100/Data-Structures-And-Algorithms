// 852. 山脉数组的峰顶索引
// 符合下列属性的数组 arr 称为 山脉数组 ：
// arr.length >= 3
// 存在 i（0 < i < arr.length - 1）使得：
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// 给你由整数组成的山脉数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i 。

// 示例 1：
// 输入：arr = [0,1,0]
// 输出：1

// 示例 5：
// 输入：arr = [24,69,100,99,79,78,67,36,26,19]
// 输出：2

// 1.直接找最大值
function peakIndexInMountainArray(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }
  return index;
}

// 2.二分查找
function peakIndexInMountainArray(arr) {
  let l = 0;
  let r = arr.length - 1;
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
      r = mid;
    } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      l = mid;
    }
  }
  return -1;
}