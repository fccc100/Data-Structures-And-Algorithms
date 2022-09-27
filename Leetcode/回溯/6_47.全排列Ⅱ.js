// 47. 全排列 II
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

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
      _permuteUnique(nums, index + 1, path);
      path.pop();
      used[i] = false;
    }
  }

  nums.sort((a, b) => a - b);
  _permuteUnique(nums, 0, []);
  return res;
}