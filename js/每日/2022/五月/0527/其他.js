// 39. 组合总和
var combinationSum = function(candidates, target) {
  let res = [];
  function __combinationSum(candidates, target, index, path) {
    if (target == 0) {
      res.push(path.slice());
      return;
    }
    if (target < 0) return;

    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i]);
      __combinationSum(candidates, target - candidates[i], i, path);
      path.pop();
    }
  }

  __combinationSum(candidates, target, 0, []);
  return res;
};
