// 90. 子集 II
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

// 示例 1：
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

function subsetsWithDup(nums) {
  let res = [];

  function _subsetsWithDup(nums, index, path) {
    res.push([...path]);
    if (index == nums.length) return;

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] == nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      _subsetsWithDup(nums, i + 1, path);
      path.pop();
    }
  }

  nums.sort((a, b) => a - b);
  _subsetsWithDup(nums, 0, []);
  return res;
}