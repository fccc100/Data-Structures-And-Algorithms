// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(nums) {
  let res = [];
  let used = Array(nums.length).fill(false);
  // 求[index, n]的排列，已经获得的排列放在path中
  function _permute(nums, index, path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    // 以每个index为开始位置从0开始查所有排列，使用used数据记录该位置是否被使用过了
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        _permute(nums, index + 1, path);
        path.pop();
        used[i] = false;
      }
    }
  }

  _permute(nums, 0, []);
  return res;
}

var permute = function (nums) {
  let res = [];
  let used = Array(nums.length).fill(false);

  function __permute(nums, path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        __permute(nums, path);
        path.pop();
        used[i] = false;
      }
    }
  }
  __permute(nums, []);
  return res;
};