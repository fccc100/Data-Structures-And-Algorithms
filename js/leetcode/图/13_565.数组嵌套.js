// 565. 数组嵌套
// 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

// 假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。

// 示例 1:

// 输入: A = [5,4,0,3,1,6,2]
// 输出: 4
// 解释: 
// A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

// 其中一种最长的 S[K]:
// S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

// 暴力，超时
var arrayNesting = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let set = new Set();
    let cur = i;
    while (true) {
      if (!set.has(nums[cur])) {
        set.add(nums[cur]);
      } else {
        break;
      }
      cur = nums[cur];
    }
    if (set.size > res) {
      res = set.size;
    }
  }
  return res;
};


// 并查集
class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.count = Array(size).fill(1);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
    this.max = 1;
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
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
      this.count[qRoot] += this.count[pRoot];
      if (this.count[qRoot] > this.max) {
        this.max = this.count[qRoot];
      }
    }
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  getMax() {
    return this.max;
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let uf = new UnionFind(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (!uf.isConnected(i, nums[i])) {
      uf.union(i, nums[i]);
    }
  }
  return uf.getMax();
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let res = 0;
  let n = nums.length;
  let visited = Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    while (!visited[i]) {
      visited[i] = true;
      i = nums[i];
      cnt++;
    }
    res = Math.max(cnt, res);
  }
  return res;
}





// 周赛
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  let res = [0, 0];
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      res[0]++;
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  res[1] = set.size;
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let map = new Map();
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    let cur = f(nums[i]);
    if (map.has(cur)) {
      if (nums[i] + map.get(cur) > res) {
        res = nums[i] + map.get(cur);
      }
      if (map.get(cur) < nums[i]) {
        map.set(cur, nums[i]);
      }
    } else {
      map.set(cur, nums[i]);
    }
  }
  return res;
};

function f(num) {
  let res = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    res += Number(num[i]);
  }
  return res;
}


/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    let res = [];
    for (let i = 0; i < queries.length; i++) {
      let temp1 = [];
      // let temp2 = [];
      for (let j = 0; j < nums.length; j++) {
        let cur = nums[j].substring(nums[j].length - queries[i][1];

          temp1.push([cur, j]);
        }


        temp1.sort((a, b) => a[0] - b[0]);
        res.push(temp1[queries[i][0] - 1][1]);
      }
      return res;
    };


    /**
     * @param {number[]} nums
     * @param {number[]} numsDivide
     * @return {number}
     */

    var minOperations = function (nums, numsDivide) {
      let res = 0;
      while (true) {
        let min = Infinity;
        for (let i = 0; i < nums.length; i++) {
          min = Math.min(min, nums[i]);
        }
        let flag = true;
        for (let i = 0; i < numsDivide.length; i++) {
          if (numsDivide[i] % min != 0) {

            flag = false;
            break;
          }
        }

        if (!flag) {
          for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] == min) {
              nums.splice(i, 1);
              res++;
            }
          }

          console.log(res)
          if (nums.length == 0) {
            break;
          }
        } else {
          return res;
        }
      }
      return -1;
    };