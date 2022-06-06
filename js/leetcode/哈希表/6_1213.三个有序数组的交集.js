// 1213. 三个有序数组的交集
// 给出三个均为 严格递增排列 的整数数组 arr1，arr2 和 arr3。返回一个由 仅 在这三个数组中 同时出现 的整数所构成的有序数组。

// 示例 1：

// 输入: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
// 输出: [1,5]
// 解释: 只有 1 和 5 同时在这三个数组中出现.
// 示例 2:

// 输入: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
// 输出: []

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  let set1 = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set1.add(arr1[i]);
  }

  let set2 = new Set();
  for (let i = 0; i < arr2.length; i++) {
    set2.add(arr2[i]);
  }

  let res = [];
  for (let i = 0; i < arr3.length; i++) {
    if (set1.has(arr3[i]) && set2.has(arr3[i])) {
      res.push(arr3[i]);
    }
  }
  return res;
};