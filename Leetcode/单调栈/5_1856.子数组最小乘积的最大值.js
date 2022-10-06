// 1856. 子数组最小乘积的最大值
// 一个数组的 最小乘积 定义为这个数组中 最小值 乘以 数组的 和 。

// 比方说，数组 [3,2,5] （最小值是 2）的最小乘积为 2 * (3+2+5) = 2 * 10 = 20 。
// 给你一个正整数数组 nums ，请你返回 nums 任意 非空子数组 的最小乘积 的 最大值 。由于答案可能很大，请你返回答案对  109 + 7 取余 的结果。

// 请注意，最小乘积的最大值考虑的是取余操作 之前 的结果。题目保证最小乘积的最大值在 不取余 的情况下可以用 64 位有符号整数 保存。

// 子数组 定义为一个数组的 连续 部分。

// 示例 1：

// 输入：nums = [1,2,3,2]
// 输出：14
// 解释：最小乘积的最大值由子数组 [2,3,2] （最小值是 2）得到。
// 2 * (2+3+2) = 2 * 7 = 14 。

// [1,2,3,2]
// [1,3,6,8]

function maxSumMinProduct(nums) {
  // let preSum = [];
  // preSum[0] = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   preSum[i] = preSum[i - 1] + nums[i];
  // }

  // let leftMin = helper(nums)[0];
  // let rightMin = helper(nums)[1];
  // let max = -Infinity;
  // for (let i = 0; i < nums.length; i++) {
  //   let sum = (rightMin[i] - 1 > -1 ? preSum[rightMin[i] - 1] : preSum[nums.length - 1]) - (leftMin[i] > -1 ? preSum[leftMin[i]] : 0);
  //   let res = sum * nums[i];
  //   max = Math.max(max, res);
  // }

  // return max;
  let preSum = [];
  let mod = BigInt(1000000007);
  preSum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }

  let leftMin = helper(nums)[0];
  let rightMin = helper(nums)[1];
  let max = BigInt(0);
  for (let i = 0; i < nums.length; i++) {
    let sum = BigInt((rightMin[i] - 1 > -1 ? preSum[rightMin[i] - 1] : preSum[nums.length - 1]) - (leftMin[i] > -1 ? preSum[leftMin[i]] : 0));
    let res = sum * BigInt(nums[i]);
    if (res > max) {
      max = res;
    }
  }

  return max % mod;
}

function helper(nums) {
  let stack = [];
  let leftMin = [];
  let rightMin = [];

  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push([i]);
    } else {
      while (stack.length && nums[stack[stack.length - 1][0]] > nums[i]) {
        let curList = stack.pop();
        for (let j = 0; j < curList.length; j++) {
          rightMin[curList[j]] = i;
          leftMin[curList[j]] = stack.length ? stack[stack.length - 1][stack[stack.length - 1].length - 1] : -1;
        }
      }
      if (stack.length && nums[i] == nums[stack[stack.length - 1][0]]) {
        stack[stack.length - 1].push(i);
      } else {
        stack.push([i]);
      }
    }
  }
  while (stack.length) {
    let curList = stack.pop();
    for (let i = 0; i < curList.length; i++) {
      rightMin[curList[i]] = -1;
      leftMin[curList[i]] = stack.length ? stack[stack.length - 1][stack[stack.length - 1].length - 1] : -1;
    }
  }

  return [leftMin, rightMin];
}