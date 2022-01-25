// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permute(nums) {
  let res = [];
  let used = [];
  function backtracking(nums, index, path) {
    if (index == nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums, index + 1, path);
        path.pop();
        used[i] = false;
      }
    }
  }

  let path = [];
  backtracking(nums, 0, path);
  return res;
}

var permute = function(nums) {
  let res = [];
  let used = [];
  if (nums.length == 0) return res;
  function gen(nums, index, p) {
    if (index == nums.length) {
      res.push([...p]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        p.push(nums[i]);
        used[i] = true;
        gen(nums, index + 1, p);
        p.pop();
        used[i] = false;
      }
    }
    return;
  }
  let p = [];
  gen(nums, 0, p);
  return res;
};