// 6127. 优质数对的数目
// 给你一个下标从 0 开始的正整数数组 nums 和一个正整数 k 。

// 如果满足下述条件，则数对 (num1, num2) 是 优质数对 ：

// num1 和 num2 都 在数组 nums 中存在。
// num1 OR num2 和 num1 AND num2 的二进制表示中值为 1 的位数之和大于等于 k ，其中 OR 是按位 或 操作，而 AND 是按位 与 操作。
// 返回 不同 优质数对的数目。

// 如果 a != c 或者 b != d ，则认为 (a, b) 和 (c, d) 是不同的两个数对。例如，(1, 2) 和 (2, 1) 不同。

// 注意：如果 num1 在数组中至少出现 一次 ，则满足 num1 == num2 的数对 (num1, num2) 也可以是优质数对。

// 示例 1：

// 输入：nums = [1,2,3,1], k = 3
// 输出：5
// 解释：有如下几个优质数对：
// - (3, 3)：(3 AND 3) 和 (3 OR 3) 的二进制表示都等于 (11) 。值为 1 的位数和等于 2 + 2 = 4 ，大于等于 k = 3 。
// - (2, 3) 和 (3, 2)： (2 AND 3) 的二进制表示等于 (10) ，(2 OR 3) 的二进制表示等于 (11) 。值为 1 的位数和等于 1 + 2 = 3 。
// - (1, 3) 和 (3, 1)： (1 AND 3) 的二进制表示等于 (01) ，(1 OR 3) 的二进制表示等于 (11) 。值为 1 的位数和等于 1 + 2 = 3 。
// 所以优质数对的数目是 5 。
// 示例 2：

// 输入：nums = [5,1,1], k = 10
// 输出：0
// 解释：该数组中不存在优质数对。

/**
  * @param {number[]} nums
  * @param {number} k
  * @return {number}
  */
// 1.暴力求解，根据汉明重量两两求位1的个数，内存溢出了
var countExcellentPairs = function (nums, k) {
  let n = nums.length;
  let set = new Set();
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < n; j++) {
      if (!set.has(nums[i] + ',' + nums[j])) {
        if (hammingWeight(nums[i] & nums[j]) + hammingWeight(nums[i] | nums[j]) >= k) {
          res++;
          set.add(nums[i] + ',' + nums[j]);
        }
      }
    }
  }
  return res;
};

function hammingWeight(n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};


// 2.规律：a b 两个数字 a & b和a | b的位1个数就是两个数字a、b位1个数的和
// 可以先求出nums中位1个数分别为1...32的数分别有多少
// 然后根据位1 个数，计算优质数对的数目
var countExcellentPairs = function (nums, k) {
  let bitCnt = Array(33).fill(0);

  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      continue;
    }
    set.add(nums[i]);
    bitCnt[hammingWeight(nums[i])]++;
  }

  let res = 0;
  for (let i = 0; i <= 32; i++) {
    for (let j = 0; j <= 32; j++) {
      if (i + j >= k) {
        // 比如有 位1个数为5的有6个，位1个数为4的有3个，那数对就有 6 * 3 = 18个
        res += bitCnt[i] * bitCnt[j];
      }
    }
  }
  return res;
}

function hammingWeight(n) {
  let ret = 0;
  while (n) {
    n &= n - 1;
    ret++;
  }
  return ret;
};
