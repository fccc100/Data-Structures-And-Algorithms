// 剑指 Offer II 081. 允许重复选择元素的组合
// 给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是不同的。 

// 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

// 示例 1：
// 输入: candidates = [2,3,6,7], target = 7
// 输出: [[7],[2,2,3]]

function combinationSum(candidates, target) {
  let res = [];
  function _combinationSum(candidates, index, target, path) {
    if (target == 0) {
      res.push([...path]);
      return;
    }
    if (target < 0 || index >= candidates.length) return;

    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i]);
      _combinationSum(candidates, i, target - candidates[i], path);
      path.pop();
    }
  }

  _combinationSum(candidates, 0, target, []);
  return res;
}