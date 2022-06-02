// 698. 划分为k个相等的子集
// 给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

// 示例 1：
// 输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// 输出： True
// 说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。

function canPartitionKSubsets(nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % k != 0) return false;
  
  let avg = sum / k;
  function _canPartitionKSubsets(nums, k, index) {

  }

  _canPartitionKSubsets(nums, k, 0)
}


// 1079. 活字印刷
// 你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

// 注意：本题中，每个活字字模只能使用一次。

 

// 示例 1：

// 输入："AAB"
// 输出：8
// 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。

function numTilePossibilities(tiles) {
  let set = new Set();
  function _numTilePossibilities(tiles, index, path) {
    if (path.length) {
      set.add(path);
    }
    if (index == tiles.length) return;

    for (let i = index; i < tiles.length; i++) {
      _numTilePossibilities(tiles, i + 1, path + tiles[i]);
    }
  }

  for (let i = 0; i < tiles.length; i++) {
    _numTilePossibilities(tiles, i, '')
  }
  return set.size;
}