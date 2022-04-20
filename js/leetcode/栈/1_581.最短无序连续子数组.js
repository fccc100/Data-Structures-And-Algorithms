// 581. 最短无序连续子数组
// 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

// 请你找出符合题意的 最短 子数组，并输出它的长度。

// 示例 1：

// 输入：nums = [2,6,4,8,10,9,15]
// 输出：5
// 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。

// 1,3,2,4,5
// 1,2,3,4,5

function findUnsortedSubarray(nums) {
  let res = [-1, -1];

  // 从右往左找到左边的索引
  let curMin = Number.MAX_SAFE_INTEGER;

  // 从右往左遍历，依次记录当前最小的元素，如果当前遍历到的元素比当前最小元素还小，就更新最小元素
  // 如果当前元素比当前最小元素大，说明当前这个元素肯定需要排序，更新左边界
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= curMin) {
      curMin = nums[i];
    } else {
      res[0] = i;
    }
  }

  // 从左往右找到右边的索引
  // 原理与从右往左查左边界一样
  let curMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= curMax) {
      curMax = nums[i];
    } else {
      res[1] = i;
    }
  }

  return res[0] == res[1] ? 0 : res[1] - res[0] + 1;

  // if (nums.length <= 1) return 0;
  // let temp = nums.slice();
  // temp.sort((a, b) => a - b);
  // let i = 0;
  // let j = nums.length - 1;
  // while(i < j) {
  //   if (nums[i] != temp[i] || nums[j] != temp[j]) {
  //     break;
  //   }
  //   i++;
  //   j--;
  // }
  // return j - i + 1;


  // let stack = [];
  // let res = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (!stack.length || stack[stack.length - 1] <= nums[i]) {
  //     stack.push(nums[i]);
  //   } else {
  //     while(stack[stack.length - 1] > nums[i]) {
  //       stack.pop();
  //       res += 1;
  //     }
  //     res += 1;
  //   }
  // }
  // return res;
}