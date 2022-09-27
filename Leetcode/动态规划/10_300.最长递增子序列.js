// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

// 递归
function lengthOfLIS(nums) {

  // 递归函数定义：nums数组以index位置结尾的最长递增子序列的长度
  function _lengthOfLIS(nums, index) {
    if (index < 0) {
      return 0;
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      if (nums[i] < nums[index]) {
        max = Math.max(max, 1 + _lengthOfLIS(nums, i));
      }
    }

    return max;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, 1 + _lengthOfLIS(nums, i));
  }
  return max;
}

// 记忆化搜索
function lengthOfLIS(nums) {
  let memo = Array(nums.length);

  // 递归函数定义：nums数组以index位置结尾的最长递增子序列的长度
  function _lengthOfLIS(nums, index) {
    if (index < 0) {
      return 0;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      if (nums[i] < nums[index]) {
        max = Math.max(max, 1 + _lengthOfLIS(nums, i));
      }
    }

    return memo[index] = max;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, 1 + _lengthOfLIS(nums, i));
  }
  return max;
}

// 动态规划
function lengthOfLIS(nums) {
  let dp = Array(nums.length);
  dp.fill(1);
  let max = dp[0];

  // dp[i]表示以第i个元素为结尾的子序列的最长递增子序列的长度
  for (let i = 1; i < nums.length; i++) {

    // dp[i]取dp[i]或者i前面比nums[i]小位置的最长递增子序列 + 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i]);
      }
    }
  }

  return max;
}

// 贪心 + 二分
function lengthOfLIS(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // dp[i]表示长度为i的最长递增子序列的末尾元素的最小值
  let dp = Array(n + 1);

  // 长度为1的末尾最小元素初始化为第一个元素
  let len = 1;
  dp[len] = nums[0];
  
  for (let i = 1; i < n; i++) {
    // 遇到一个数比当前找到的序列的末尾元素要大，可以直接接在其后面
    if (nums[i] > dp[len]) {
      len++;
      dp[len] = nums[i];
    } else {
      // 遇到比当前找到的序列末尾元素还要小的值
      // 这里需要找到一个位置，使得 dp[i - 1] < nums[i] < dp[i], 进而将dp[i]替换成更小的nums[i]
      
      // 用二分从dp[0, len]中找到小于nums[i]的最后一个元素的索引

      let pos = binarySearch(dp, 1, len, nums[i]);

      dp[pos + 1] = nums[i];
    }
  }
  return len;
}

// 从nums中查找小于target的最大元素的索引  (下界)
function binarySearch(nums, l, r, target) {
  let res = 0;
  while (l <= r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] < target) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return res;
}

// [5, 7, -24, 12, 13, 2, 3, 12, 5, 6, 35]

// 长度为1最小元素：5
// [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：7
// [ 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：7
// [ 0, -24, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：7，长度为3最小元素：12
// [ 0, -24, 7, 12, 0, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：7，长度为3最小元素：12， 长度为4最小元素13
// [ 0, -24, 7, 12, 13, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：12， 长度为4最小元素13
// [0, -24, 2, 12, 13, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：3， 长度为4最小元素13
// [0, -24, 2, 3, 13, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：3， 长度为4最小元素12
// [0, -24, 2, 3, 12, 0, 0, 0, 0, 0,0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：3， 长度为4最小元素5
// [0, -24, 2, 3, 5, 0, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：3， 长度为4最小元素5，长度为5最小元素6
// [0, -24, 2, 3, 5, 6, 0, 0, 0, 0, 0, 0]

// 长度为1最小元素：-24，长度为2最小元素：2，长度为3最小元素：3， 长度为4最小元素5，长度为5最小元素6，长度为7最小元素35
// [0, -24, 2, 3, 5, 6, 35, 0, 0, 0, 0, 0]


// 贪心 + 二分
function lengthOfLIS(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // dp[i]表示长度为i的最长递增子序列中末尾元素的最小值
  let dp = Array(n + 1);
  
  let len = 1;
  dp[len] = nums[0];

  for (let i = 1; i < n; i++) {
    if (nums[i] > dp[len]) {
      len++;
      dp[len] = nums[i];
    } else {
      // dp数组[1, len]范围中小于nums[i]的最大值的索引
      let pos = lower(dp, 0, len, nums[i]);

      dp[pos + 1] = nums[i];
    }
  }
  return len;
}

// nums数组中[l, r]区间小于target的最大值的索引
function lower(nums, l, r, target) {
  while (l < r) {
    let mid = l + (r - l + 1 >> 1);

    if (nums[mid] < target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
}