// 1477. 找两个和为目标值且不重叠的子数组
// 给你一个整数数组 arr 和一个整数值 target 。

// 请你在 arr 中找 两个互不重叠的子数组 且它们的和都等于 target 。可能会有多种方案，请你返回满足要求的两个子数组长度和的 最小值 。

// 请返回满足要求的最小长度和，如果无法找到这样的两个子数组，请返回 -1 。

// 示例 1：

// 输入：arr = [3,2,2,4,3], target = 3
// 输出：2
// 解释：只有两个子数组和为 3 （[3] 和 [3]）。它们的长度和为 2 。
// 示例 2：

// 输入：arr = [7,3,4,7], target = 7
// 输出：2
// 解释：尽管我们有 3 个互不重叠的子数组和为 7 （[7], [3,4] 和 [7]），但我们会选择第一个和第三个子数组，因为它们的长度和 2 是最小值。
// 示例 3：

// 输入：arr = [4,3,2,6,2,3,4], target = 6
// 输出：-1
// 解释：我们只有一个和为 6 的子数组。
// 示例 4：

// 输入：arr = [5,5,4,4,5], target = 3
// 输出：-1
// 解释：我们无法找到和为 3 的子数组。
// 示例 5：

// 输入：arr = [3,1,1,1,5,1,2,1], target = 3
// 输出：3
// 解释：注意子数组 [1,2] 和 [2,1] 不能成为一个方案因为它们重叠了。

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// 滑动窗口求出所有满足条件的区间，但是在所有区间找答案时需要O(n^2)，超时
var minSumOfLengths = function (arr, target) {
  if (arr.length <= 1) {
    return -1;
  }

  let res = [];

  // 定义[l, r]窗口
  let l = 0;
  let r = -1;
  let sum = 0;
  while (r < arr.length) {
    if (sum < target) {
      r++;
      if (r >= arr.length) break;
      sum += arr[r];
    } else if (sum > target) {
      sum -= arr[l];
      l++;
    } else {
      res.push([l, r]);
      sum -= arr[l];
      l++;

      r++;
      sum += arr[r];
    }
  }

  res.sort((a, b) => a[0] - b[0]);
  let min = Infinity;

  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[j][0] > res[i][1]) {
        if (res[i][1] - res[i][0] + 1 + res[j][1] - res[j][0] + 1 < min) {
          min = res[i][1] - res[i][0] + 1 + res[j][1] - res[j][0] + 1;
        }
      }
    }
  }

  return min == Infinity ? -1 : min;
};

// 2.处理重叠区间剪枝优化，勉强通过
var minSumOfLengths = function (arr, target) {
  if (arr.length <= 1) {
    return -1;
  }

  let res = [];

  // 定义[l, r]窗口
  // 用滑动窗口求出所有满足条件的区间
  let l = 0;
  let r = -1;
  let sum = 0;
  while (r < arr.length) {
    if (sum < target) {
      r++;
      if (r >= arr.length) break;
      sum += arr[r];
    } else if (sum > target) {
      sum -= arr[l];
      l++;
    } else {
      res.push([l, r]);
      sum -= arr[l];
      l++;

      r++;
      sum += arr[r];
    }
  }

  // 区间根据长度排序
  res.sort((a, b) => (a[1] - a[0] + 1) - (b[1] - b[0] + 1));

  // 从所有区间中找到不重叠的和最小的两个区间
  let min = Infinity;
  for (let i = 0; i < res.length; i++) {
    let curLen = res[i][1] - res[i][0] + 1;
    // 两倍当前长度已经比最小值大了，后面不可能出现更小的了，直接退出
    if (curLen * 2 >= min) {
      break;
    }

    // 找第二个区间
    for (let j = i + 1; j < res.length; j++) {
      let curSecondLen = res[j][1] - res[j][0] + 1;

      // 第一个区间的左端点小于第二个区间的左端点，并且第一个区间的右端点大于第二个区间的左端点，有重叠区间，跳过
      if (res[i][0] < res[j][0] && res[i][1] + 1 > res[j][0]) {
        continue;
      }

      // 第二个区间的左端点小于第一个区间的左端点，且第二个区间的右端点大于第一个区间的左端点，跳过
      if (res[j][0] < res[i][0] && res[j][1] + 1 > res[i][0]) {
        continue;
      }

      min = Math.min(min, curLen + curSecondLen);
      break;
    }
  }

  return min == Infinity ? -1 : min;
};


// 输入：
// [2,1,3,3,2,3,1]
// 6

// 输出：
// 6

// 预期结果：
// 5