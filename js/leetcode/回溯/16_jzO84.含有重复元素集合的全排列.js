// 剑指 Offer II 084. 含有重复元素集合的全排列 
// 给定一个可包含重复数字的整数集合 nums ，按任意顺序 返回它所有不重复的全排列。

// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]

function permuteUnique(nums) {
  let res = [];
  let used = [];
  function _permuteUnique(nums, index, path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      _permuteUnique(nums, i + 1, path);
      used[i] = false;
      path.pop();
    }
  }

  nums.sort((a, b) => a - b);
  _permuteUnique(nums, 0, []);
  return res;
}