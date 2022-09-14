// 1310. 子数组异或查询
// 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

// 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

// 并返回一个包含给定查询 queries 所有结果的数组。



// 示例 1：

// 输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// 输出：[2,7,14,8] 
// 解释：
// 数组中元素的二进制表示形式是：
// 1 = 0001 
// 3 = 0011 
// 4 = 0100 
// 8 = 1000 
// 查询的 XOR 值为：
// [0,1] = 1 xor 3 = 2 
// [1,2] = 3 xor 4 = 7 
// [0,3] = 1 xor 3 xor 4 xor 8 = 14 
// [3,3] = 8
// 示例 2：

// 输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
// 输出：[8,0,4,4]

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let n = arr.length;

  let prefix = Array(n + 1).fill(0);
  prefix[0] = 0;
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] ^ arr[i - 1];
  }

  let res = Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    res[i] = prefix[queries[i][1] + 1] ^ prefix[queries[i][0]];
  }
  return res;
};

//      [1,  3,     4,      8]
//   [0, 1, 1^3,  1^3^4, 1^3^4^8]

//   求区间异或  如：3^4 = 1^3^4^1