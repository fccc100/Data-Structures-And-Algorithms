// 670. 最大交换
// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

// 示例 1 :

// 输入: 2736
// 输出: 7236
// 解释: 交换数字2和数字7。
// 示例 2 :

// 输入: 9973
// 输出: 9973
// 解释: 不需要交换。

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let charArr = ('' + num).split('');
  let n = charArr.length;

  let maxIdx = n - 1;
  let i1 = -1;
  let i2 = -1;

  for (let i = n - 1; i >= 0; i--) {
    // 从右往左遍历，如果遇到大于右边最大值的位置，则更新最大值索引
    if (charArr[i] > charArr[maxIdx]) {
      maxIdx = i;
    } else if (charArr[i] < charArr[maxIdx]) {
      // 遇到小于右边最大值的位置，记录当前交换的i1， i2
      i1 = i;
      i2 = maxIdx;
    }
  }
  if (i1 >= 0) {
    swap(charArr, i1, i2);
    return parseInt(charArr.join(''));
  } else {
    return num;
  }
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

//    2736
//    7632