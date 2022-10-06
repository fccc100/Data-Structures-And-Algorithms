// 求解出每个节点在哪个联通分量中，放在visited数组中
// 根据visited数组，可以快速求出两个点是否在同一个联通分量中

function singleSourcePath() {
  let n = 7;
  let s = 0;
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
  let pre = Array(n).fill(-1);

  function dfs(v, parent) {
    visited[v] = true;
    pre[v] = parent;

    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w, v);
      }
    }
  }

  dfs(s, s);

  // 从s出发到目标点t的具体路径
  let t = 6;
  let res = [];
  if (!visited[t]) {
    console.log(res);
    return;
  }

  let cur = t;
  while (cur != s) {
    res.push(cur);
    cur = pre[cur];
  }
  res.push(s);
  res.reverse();
  console.log(res);
}