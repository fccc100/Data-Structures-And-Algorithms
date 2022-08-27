// 深度优先遍历的应用

function graphDfs() {
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

  let visited = Array(n).fill(false);

  let CCCount = 0;
  function dfs(v) {
    visited[v] = true;

    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      CCCount++;
    }
  }

  console.log(CCCount);
  return CCCount;
}