// 1168. 水资源分配优化
// 村里面一共有 n 栋房子。我们希望通过建造水井和铺设管道来为所有房子供水。

// 对于每个房子 i，我们有两种可选的供水方案：一种是直接在房子内建造水井，成本为 wells[i - 1] （注意 -1 ，因为 索引从0开始 ）；
// 另一种是从另一口井铺设管道引水，数组 pipes 给出了在房子间铺设管道的成本，其中每个 pipes[j] = [house1j, house2j, costj] 代表用管道将 house1j 和 house2j连接在一起的成本。
// 连接是双向的。

// 请返回 为所有房子都供水的最低总成本 。

// 示例 1：

// 输入：n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
// 输出：3
// 解释： 
// 上图展示了铺设管道连接房屋的成本。
// 最好的策略是在第一个房子里建造水井（成本为 1），然后将其他房子铺设管道连起来（成本为 2），所以总成本为 3。
// 示例 2：

// 输入：n = 2, wells = [1,1], pipes = [[1,2,1]]
// 输出：2
// 解释：我们可以用以下三种方法中的一种来提供低成本的水:
// 选项1:
// 在1号房子里面建一口井，成本为1
// 在房子2内建造井，成本为1
// 总成本是2。
// 选项2:
// 在1号房子里面建一口井，成本为1
// -花费1连接房子2和房子1。
// 总成本是2。
// 选项3:
// 在房子2内建造井，成本为1
// -花费1连接房子1和房子2。
// 总成本是2。
// 注意，我们可以用cost 1或cost 2连接房子1和房子2，但我们总是选择最便宜的选项。

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
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

  // 基于rank优化
  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }

    // 基于rank优化
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
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
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function(n, wells, pipes) {
  let uf = new UnionFind(n + 1);

  for (let i = 0; i < wells.length; i++) {
    pipes.push([0, i + 1, wells[i]]);
  }

  pipes.sort((a, b) => a[2] - b[2]);

  let res = 0;
  for (let i = 0; i < pipes.length; i++) {
    if (!uf.isConnected(pipes[i][0], pipes[i][1])) {
      res += pipes[i][2];
      uf.union(pipes[i][0], pipes[i][1]);
    }

    if (uf.getConnectedComponent() == 1) {
      return res;
    }
  }
  return -1;
};