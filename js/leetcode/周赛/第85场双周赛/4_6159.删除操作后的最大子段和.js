// 6159. 删除操作后的最大子段和
// 给你两个下标从 0 开始的整数数组 nums 和 removeQueries ，两者长度都为 n 。对于第 i 个查询，nums 中位于下标 removeQueries[i] 处的元素被删除，将 nums 分割成更小的子段。

// 一个 子段 是 nums 中连续 正 整数形成的序列。子段和 是子段中所有元素的和。

// 请你返回一个长度为 n 的整数数组 answer ，其中 answer[i]是第 i 次删除操作以后的 最大 子段和。

// 注意：一个下标至多只会被删除一次。

// 示例 1：

// 输入：nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1]
// 输出：[14,7,2,2,0]
// 解释：用 0 表示被删除的元素，答案如下所示：
// 查询 1 ：删除第 0 个元素，nums 变成 [0,2,5,6,1] ，最大子段和为子段 [2,5,6,1] 的和 14 。
// 查询 2 ：删除第 3 个元素，nums 变成 [0,2,5,0,1] ，最大子段和为子段 [2,5] 的和 7 。
// 查询 3 ：删除第 2 个元素，nums 变成 [0,2,0,0,1] ，最大子段和为子段 [2] 的和 2 。
// 查询 4 ：删除第 4 个元素，nums 变成 [0,2,0,0,0] ，最大子段和为子段 [2] 的和 2 。
// 查询 5 ：删除第 1 个元素，nums 变成 [0,0,0,0,0] ，最大子段和为 0 ，因为没有任何子段存在。
// 所以，我们返回 [14,7,2,2,0] 。
// 示例 2：

// 输入：nums = [3,2,11,1], removeQueries = [3,2,1,0]
// 输出：[16,5,3,0]
// 解释：用 0 表示被删除的元素，答案如下所示：
// 查询 1 ：删除第 3 个元素，nums 变成 [3,2,11,0] ，最大子段和为子段 [3,2,11] 的和 16 。
// 查询 2 ：删除第 2 个元素，nums 变成 [3,2,0,0] ，最大子段和为子段 [3,2] 的和 5 。
// 查询 3 ：删除第 1 个元素，nums 变成 [3,0,0,0] ，最大子段和为子段 [3] 的和 3 。
// 查询 5 ：删除第 0 个元素，nums 变成 [0,0,0,0] ，最大子段和为 0 ，因为没有任何子段存在。
// 所以，我们返回 [16,5,3,0] 。

/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */

// 超时
var maximumSegmentSum = function (nums, removeQueries) {
  let n = nums.length;
  let temp = Array(n).fill(0);

  let res = Array(n).fill(0);
  res[n - 1] = 0;
  temp[removeQueries[n - 1]] = nums[removeQueries[n - 1]];
  for (let i = n - 2; i >= 0; i--) {

    res[i] = max(temp);

    temp[removeQueries[i]] = nums[removeQueries[i]];
  }
  return res;
};

function max(nums) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      sum = 0;
    } else {
      sum += nums[i];
    }
    max = Math.max(max, sum);
  }
  return max;
}

// 2.
class UnionFind {
  constructor(size, nums) {
    this.parent = Array(size);
    this.sum = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.sum[i] = nums[i];
    }
  }

  findRoot(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }

    this.parent[pRoot] = qRoot;
    this.sum[qRoot] += this.sum[pRoot];
  }

  getMax(x) {
    let root = this.findRoot(x);
    return this.sum[root];
  }
}

var maximumSegmentSum = function (nums, removeQueries) {
  let n = nums.length;
  let temp = Array(n).fill(0);

  let res = Array(n).fill(0);

  let uf = new UnionFind(n, nums);
  let max = 0;
  for (let i = n - 1; i > 0; i--) {

    let x = removeQueries[i];
    if (x - 1 >= 0 && temp[x - 1] != 0) {
      uf.union(x, x - 1);
    }

    if (x + 1 < n && temp[x + 1] != 0) {
      uf.union(x, x + 1);
    }

    max = Math.max(max, uf.getMax(x));
    res[i - 1] = max;

    temp[x] = nums[x];
  }
  return res;
}
