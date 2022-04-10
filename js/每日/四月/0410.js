// 300. 最长递增子序列

function lengthOfLIS(nums) {
  let memo = Array(nums.length);
  function _lengthOfLIS(nums, index) {
    if (index < 0) return 0;
    if (memo[index] !== undefined) return memo[index];

    let max = 0;
    for (let i = index - 1; i >= 0; i--) {
      if (nums[i] < nums[index]) {
        max = Math.max(max, 1 + _lengthOfLIS(nums, i))
      }
    }
    return memo[index] =  max;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, _lengthOfLIS(nums, i) + 1);
  }
  return max;
}