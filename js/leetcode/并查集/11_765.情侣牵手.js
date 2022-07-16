// 765. 情侣牵手
// n 对情侣坐在连续排列的 2n 个座位上，想要牵到对方的手。

// 人和座位由一个整数数组 row 表示，其中 row[i] 是坐在第 i 个座位上的人的 ID。情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2n-2, 2n-1)。

// 返回 最少交换座位的次数，以便每对情侣可以并肩坐在一起。 每次交换可选择任意两人，让他们站起来交换座位。

// 示例 1:

// 输入: row = [0,2,1,3]
// 输出: 1
// 解释: 只需要交换row[1]和row[2]的位置即可。
// 示例 2:

// 输入: row = [3,2,0,1]
// 输出: 0
// 解释: 无需交换座位，所有的情侣都已经可以手牵手了。


// 并查集
/**
 * @param {number[]} row
 * @return {number}
 */
 var minSwapsCouples = function(row) {
  let m = row.length >> 1;

  // 因为每对情侣的编号 / 2 是等于同一个值，认为是一个情侣组
  // 只需要把相邻两个位置用并查集连接
  // 最后结果就是总情侣对数 - 并查集中联通分量的个数
  let uf = new UnionFind(m);
  for (let i = 0; i < row.length; i += 2) {
    uf.union(row[i] >> 1, row[i + 1] >> 1);
  }

  return m - uf.getCount();
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
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
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }

  getCount() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (i == this.parent[i]) {
        res ++;
      }
    }
    return res;
  }
}

