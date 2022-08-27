// 求解出每个节点在哪个联通分量中，放在visited数组中
// 根据visited数组，可以快速求出两个点是否在同一个联通分量中

function cc() {
  let n = 7;
  let edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 3], [2, 6]]

  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Set();
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].add(edges[i][1]);
    graph[edges[i][1]].add(edges[i][0]);
  }

  let visited = Array(n).fill(-1);

  let CCCount = 0;
  function dfs(v, ccid) {
    visited[v] = ccid;

    for (let w of graph[v]) {
      if (visited[w] == -1) {
        dfs(w, ccid);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] == -1) {
      dfs(i, CCCount);
      CCCount++;
    }
  }

  console.log(visited);
  // return visited;

  let res = Array(CCCount);
  for (let i = 0; i < res.length; i++) {
    res[i] = [];
  }

  for (let i = 0; i < visited.length; i++) {
    res[visited[i]].push(i);
  }

  console.log('具体的每个联通分量中的节点:')
  console.log(res);
}