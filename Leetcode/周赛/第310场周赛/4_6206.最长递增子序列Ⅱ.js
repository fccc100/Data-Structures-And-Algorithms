// 6206. 最长递增子序列 II
// 给你一个整数数组 nums 和一个整数 k 。

// 找到 nums 中满足以下要求的最长子序列：

// 子序列 严格递增
// 子序列中相邻元素的差值 不超过 k 。
// 请你返回满足上述要求的 最长子序列 的长度。

// 子序列 是从一个数组中删除部分元素后，剩余元素不改变顺序得到的数组。

// 示例 1：

// 输入：nums = [4,2,1,4,3,4,5,8,15], k = 3
// 输出：5
// 解释：
// 满足要求的最长子序列是 [1,3,4,5,8] 。
// 子序列长度为 5 ，所以我们返回 5 。
// 注意子序列 [1,3,4,5,8,15] 不满足要求，因为 15 - 8 = 7 大于 3 。
// 示例 2：

// 输入：nums = [7,4,5,1,8,12,4,7], k = 5
// 输出：4
// 解释：
// 满足要求的最长子序列是 [4,5,8,12] 。
// 子序列长度为 4 ，所以我们返回 4 。
// 示例 3：

// 输入：nums = [1,5], k = 1
// 输出：1
// 解释：
// 满足要求的最长子序列是 [1] 。
// 子序列长度为 1 ，所以我们返回 1 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 最长递增子序列，O(n^2), 超时
var lengthOfLIS = function (nums, k) {
  if (nums.length == 0) {
    return 0;
  }
  let dp = Array(nums.length).fill(0);
  dp[0] = 1;
  let maxans = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && nums[i] - nums[j] <= k) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
};

// 2.线段树
var lengthOfLIS = function (nums, k) {
  // 先求出nums中的最大值
  let maxVal = nums[0];
  for (let i = 0; i < nums.length; i++) {
    maxVal = Math.max(maxVal, nums[i]);
  }

  // 创建线段树，线段树中保存以[0, maxVal]中每个树结尾的最长递增子序列

  let segmentTree = new SegmentTree(Array(maxVal + 1).fill(0), (a, b) => Math.max(a, b));

  // 以第一个数结尾的最长序列，长度为1
  segmentTree.set(nums[0], 1);
  for (let i = 1; i < nums.length; i++) {
    // 这里每遍历到一个数字e，求出以[e - k, e - 1]这段区间数字结尾最长递增子序列的最大值
    let e = nums[i];
    let l = Math.max(e - k, 0);
    let r = e - 1;
    let t = segmentTree.query(l, r);

    // 当前数字e是可以接在[e - k, e - 1]中任意一个数字后面的，所以以e结尾的最长递增子序列是 t + 1
    segmentTree.set(e, t + 1);
  }
  return segmentTree.query(0, maxVal);
}

// 线段树
class SegmentTree {
  // 线段树构造函数，存放树的数组需要开4n的空间
  // merger是传递的函数，用来指定应该怎样处理区间
  constructor(arr, merger) {
    this.data = arr.slice();
    this.tree = Array(4 * arr.length).fill(null);
    this.merger = merger;

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  // 在treeIndex位置创建[l, r]区间的线段树
  buildSegmentTree(treeIndex, l, r) {
    // 区间只有一个元素时，直接赋值
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    // l不等于r，说明是一段区间，递归的创建左右两段区间
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 找到区间的中点
    let mid = l + Math.floor((r - l) / 2);

    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    // 递归创建完左右区间后，合并两段区间
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  // 查询[l, r]区间的值
  query(l, r) {
    if (l < 0 || l >= this.data.length ||
      r < 0 || r >= this.data.length || l > r) {
      throw new Error("Index is illegal.");
    }

    // 从tree的0索引，从[0, n - 1]区间查找
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  // 在以treeIndex为根的线段树中的[l, r]区间中搜索[queryL, queryR]区间的值
  __query(treeIndex, l, r, queryL, queryR) {
    // 查找的区间与当前区间左右端点都相等，直接返回值
    if(l == queryL && r == queryR) {
      return this.tree[treeIndex];
    }
    
    // 获取区间的中点和左右孩子索引
    let mid = l + Math.floor((r - l) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 如果查询区间的左端点比中点还大，说明查询的整个区间在中点右边查询就可以了， 直接递归从右孩子中查询
    if (queryL >= mid + 1) {
      return this.__query(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {

      // 查询的区间右端点小于中点时，直接从左孩子中查找就可以了
      return this.__query(leftTreeIndex, l, mid, queryL, queryR);
    }

    // 查询区间跨越了中点，需要从两侧分别查找，从左侧查找[queryL, mid], 从右侧查找[mid + 1, queryR]
    let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
    let rightResult = this.__query(rightTreeIndex, mid + 1, r, mid + 1, queryR);

    // 查询左右两侧的值之后合并
    return this.merger(leftResult, rightResult);
  }

  set(index, val) {
    if(index < 0 || index >= this.data.length) {
      throw new Error("Index is illegal");
    }
    this.data[index] = val;
    this.__set(0, 0, this.data.length - 1, index, val);
  }

  // 在以treeIndex为根的线段树中更新index的值为val
  __set(treeIndex, l, r, index, val) {
    if (l == r) {
      this.tree[treeIndex] = val;
      return;
    }

    // 找到查询区间的中点和左右孩子索引
    let mid = l + Math.floor((r - l) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);
    
    // 如果更新的索引大于mid，说明更新的点在右区间，直接去右区间更新
    if (index >= mid + 1) {
      this.__set(rightTreeIndex, mid + 1, r, index, val);
    } else {
      // 如果更新的索引小于等于mid，说明更新的点在左区间，从左区间更新
      this.__set(leftTreeIndex, l, mid, index, val);
    }
    
    // 更新完左右区间后，递归回来的路上要更新treeIndex的值
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  // 获取size
  getSize() {
    return this.data.length;
  }

  // 获取index位置的值
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('invalid index');
    }
    return this.data[index];
  }

  // 用数组当作树时，左孩子的索引
  leftChild(index) {
    return 2 * index + 1;
  }

  // 右孩子的索引
  rightChild(index) {
    return 2 * index + 2;
  }
}