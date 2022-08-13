// 768. 最多能完成排序的块 II
// 这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。

// arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

// 我们最多能将数组分成多少块？

// 示例 1:

// 输入: arr = [5,4,3,2,1]
// 输出: 1
// 解释:
// 将数组分成2块或者更多块，都无法得到所需的结果。
// 例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 
// 示例 2:

// 输入: arr = [2,1,3,4,4]
// 输出: 4
// 解释:
// 我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
// 然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let n = arr.length;

  // 先求第i位及后面的最小值
  let nextMin = Array(n);
  nextMin[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    nextMin[i] = Math.min(arr[i], nextMin[i + 1]);
  }
  
  // 再求第i位前面的最大值
  let preMax = Array(n);
  preMax[0] = arr[0];
  for (let i = 1; i < n; i++) {
    preMax[i] = Math.max(arr[i], preMax[i - 1]);

  }

  // 第i位前面的最大值小于等于第i位后面的最小值，可以做一次拆分
  let res = 1;
  for (let i = 0; i < n - 1; i++) {
    if (preMax[i] <= nextMin[i + 1]) {
      res++;
    }
  }
  return res;
};