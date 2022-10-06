// 1200. 最小绝对差
// 给你个整数数组 arr，其中每个元素都 不相同。

// 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

// 示例 1：

// 输入：arr = [4,2,1,3]
// 输出：[[1,2],[2,3],[3,4]]
// 示例 2：

// 输入：arr = [1,3,6,10,15]
// 输出：[[1,3]]
// 示例 3：

// 输入：arr = [3,8,-10,23,19,-4,-14,27]
// 输出：[[-14,-10],[19,23],[23,27]]

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);

  let diff = Infinity;
  let set = new Set();
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) < diff) {
      diff = Math.abs(arr[i] - arr[i - 1]);
    }
    set.add(arr[i]);
  }

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + diff)) {
      res.push([arr[i], arr[i] + diff]);
    }
  }
  return res;
};