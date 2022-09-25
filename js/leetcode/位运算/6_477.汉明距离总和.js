// 477. 汉明距离总和
// 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

// 给你一个整数数组 nums，请你计算并返回 nums 中任意两个数之间 汉明距离的总和 。

// 示例 1：

// 输入：nums = [4,14,2]
// 输出：6
// 解释：在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）
// 所以答案为：
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力O(n^2) 超时
var totalHammingDistance = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let s1 = getBinary(nums[i]);
      let s2 = getBinary(nums[j]);

      for (let k = 0; k < s1.length; k++) {
        if (s1[k] != s2[k]) {
          res++;
        }
      }
    }
  }
  return res;
};

function getBinary(n) {
  let res = '';
  for (let i = 31; i >= 0; i--) {
    res += (n & (1 << i)) == 0 ? '0' : 1;
  }
  return res;
}

// 2.求两两直接 异或值 的位1的个数， 超时
var totalHammingDistance = function(nums) {
  let n = nums.length;

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      res += hammingWeight(nums[i] ^ nums[j]);
    }
  }
  return res;
}

function hammingWeight(n) {
  let res = 0;
  while (n != 0) {
    n &= n - 1;
    res++;
  }
  return res;
}


// 3.10^9总共不超过32位，可以逐位统计
// 比如某一位上有 c 个1，那么有 n - c 个0，这一位对结果的贡献就是 c * (n - c);
var totalHammingDistance = function(nums) {
  let n = nums.length;

  let res = 0;
  for (let i = 31; i >= 0; i--) {
    // 当前位1的个数
    let c = 0;

    for (let j = 0; j < nums.length; j++) {
      c += (1 & (nums[j] >> i));
    }

    res += c * (n - c);
  }
  return res;
}