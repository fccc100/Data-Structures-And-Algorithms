// 剑指 Offer II 082. 含有重复元素集合的组合
// 给定一个可能有重复数字的整数数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

// candidates 中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。 

// 示例 1:

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

function combinationSum2(candidates, target) {
  let res = [];
  function _combinationSum2(candidates, index, target, path) {
    if (target == 0) {
      res.push([...path]);
      return;
    }

    if (index >= candidates.length || target < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] == candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      _combinationSum2(candidates, i + 1, target - candidates[i], path);
      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);
  _combinationSum2(candidates, 0, target, []);
  return res;
}