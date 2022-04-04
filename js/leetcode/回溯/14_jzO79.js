// 剑指 Offer II 079. 所有子集
// 给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

function subsets(nums) {
  let res = [];
  function _subsets(nums, index, path) {
    res.push([...path]);
    if (index == nums.length) return;

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      _subsets(nums, i + 1, path);
      path.pop();
    }
  }

  _subsets(nums, 0, []);
  return res;
}