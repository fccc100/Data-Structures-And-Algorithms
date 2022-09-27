// 剑指 Offer II 083. 没有重复元素集合的全排列
// 给定一个不含重复数字的整数数组 nums ，返回其 所有可能的全排列 。可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(nums) {
  let res = [];
  let used = [];
  function _permute(nums, index, path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        _permute(nums, i + 1, path);
        used[i] = false;
        path.pop();
      }
    }
  }

  _permute(nums, 0, []);
  return res;
}