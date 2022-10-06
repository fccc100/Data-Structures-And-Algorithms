// 41. 缺失的第一个正数
var firstMissingPositive = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
      set.add(nums[i]);
  }

  let cur = 1;
  while(true) {
      if (!set.has(cur)) {
          return cur;
      }
      cur++;
  }
};