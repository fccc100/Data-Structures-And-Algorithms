// 834. 树中距离之和
// 给定一个无向、连通的树。树中有 n 个标记为 0...n-1 的节点以及 n-1 条边 。

// 给定整数 n 和数组 edges ， edges[i] = [ai, bi]表示树中的节点 ai 和 bi 之间有一条边。

// 返回长度为 n 的数组 answer ，其中 answer[i] 是树中第 i 个节点与所有其他节点之间的距离之和。

// 示例 1:

// 输入: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// 输出: [8,12,6,10,10,10]
// 解释: 树如图所示。
// 我们可以计算出 dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5) 
// 也就是 1 + 1 + 2 + 2 + 2 = 8。 因此，answer[0] = 8，以此类推。
// 示例 2:

// 输入: n = 1, edges = []
// 输出: [0]
// 示例 3:

// 输入: n = 2, edges = [[1,0]]
// 输出: [1,1]

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 超时
var sumOfDistancesInTree = function(n, edges) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  
  function bfs(v) {
    let visited = Array(n).fill(false);

    let queue = [];
    queue.push(v);
    visited[v] = true;

    let res = 0;
    let dis = 0;
    while (queue.length) {
      let len = queue.length;

      res += len * dis;
      for (let i = 0; i < len; i++) {
        let curV = queue.shift();

        for (let j = 0; j < graph[curV].length; j++) {
          if (!visited[graph[curV][j]]) {
            queue.push(graph[curV][j]);
            visited[graph[curV][j]] = true;
          }
        }
      }
      dis++;
    }
    return res;
  }

  let res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = bfs(i);
  }

  return res;
};