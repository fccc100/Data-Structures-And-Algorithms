// 1101. 彼此熟识的最早时间
// 在一个社交圈子当中，有 n 个人。每个人都有一个从 0 到 n - 1 的唯一编号。我们有一份日志列表 logs，
// 其中 logs[i] = [timestampi, xi, yi] 表示 xi 和 yi 将在同一时间 timestampi 成为朋友。

// 友谊是 相互 的。也就是说，如果 a 和 b 是朋友，那么 b 和 a 也是朋友。同样，如果 a 和 b 是朋友，或者 a 是 b 朋友的朋友 ，那么 a 和 b 是熟识友。

// 返回圈子里所有人之间都熟识的最早时间。如果找不到最早时间，就返回 -1 。

// 示例 1：

// 输入：logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], N = 6
// 输出：20190301
// 解释：
// 第一次结交发生在 timestamp = 20190101，0 和 1 成为好友，社交朋友圈如下 [0,1], [2], [3], [4], [5]。
// 第二次结交发生在 timestamp = 20190104，3 和 4 成为好友，社交朋友圈如下 [0,1], [2], [3,4], [5].
// 第三次结交发生在 timestamp = 20190107，2 和 3 成为好友，社交朋友圈如下 [0,1], [2,3,4], [5].
// 第四次结交发生在 timestamp = 20190211，1 和 5 成为好友，社交朋友圈如下 [0,1,5], [2,3,4].
// 第五次结交发生在 timestamp = 20190224，2 和 4 已经是好友了。
// 第六次结交发生在 timestamp = 20190301，0 和 3 成为好友，大家都互相熟识了。
// 示例 2:

// 输入: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
// 输出: 3

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

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }
    this.parent[pRoot] = qRoot;
  }

  getConnectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}

/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
  let uf = new UnionFind(n);

  logs.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < logs.length; i++) {
    if (!uf.isConnected(logs[i][1], logs[i][2])) {
      uf.union(logs[i][1], logs[i][2]);
    }

    if (uf.getConnectedComponent() == 1) {
      return logs[i][0];
    }
  }
  return -1;
};