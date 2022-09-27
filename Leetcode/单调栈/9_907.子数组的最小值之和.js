// 907. 子数组的最小值之和
// 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

// 由于答案可能很大，因此 返回答案模 10^9 + 7 。

// 示例 1：

// 输入：arr = [3,1,2,4]
// 输出：17
// 解释：
// 子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
// 最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
// 示例 2：

// 输入：arr = [11,81,94,43,3]
// 输出：444

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let n = arr.length;
  const MOD = 1000000007;

  // leftMin[i]表示i左边第一个小于i位置值的索引
  let leftMin = Array(n);

  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
        let top = stack.pop();
        leftMin[top] = i;
      }
      stack.push(i);
    }
  }

  while (stack.length) {
    leftMin[stack.pop()] = -1;
  }

  let rightMin = Array(n);
  for (let i = 0; i < n; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) {
        let top = stack.pop();
        rightMin[top] = i;
      }
      stack.push(i);
    }
  }

  while (stack.length) {
    rightMin[stack.pop()] = n;
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    let leftCnt = i - leftMin[i];
    let rightCnt = rightMin[i] - i;

    res += (arr[i] * leftCnt * rightCnt) % MOD;
  }

  return res % MOD;
};

// [3,1,2,4]
// 3 * 1 + 1 * 6 + 2 * 2 + 4 * 1 = 17;

// 11 * 4 + 81 * 2 + 94 + 43 * 3 + 3 * 5 = ?