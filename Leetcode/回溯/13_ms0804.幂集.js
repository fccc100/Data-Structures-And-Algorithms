// 面试题 08.04. 幂集
// 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

// 说明：解集不能包含重复的子集。

// 示例:
//  输入： nums = [1,2,3]
//  输出：
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

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