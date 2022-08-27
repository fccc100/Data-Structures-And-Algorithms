
// DFS时间复杂度O(V + E)

// 使用数组的邻接表
function graphDfs() {
  let n = 7;
  let edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 3], [2, 6]]

  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = Array(n).fill(false);

  // 先序遍历结果
  let preorder = [];
  // 后序遍历结果
  let postorder = [];
  function dfs(v) {
    visited[v] = true;
    preorder.push(v);

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        dfs(graph[v][i]);
      }
    }
    postorder.push(v);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  console.log(preorder, postorder);
  return null;
}

// 使用哈希表的邻接表
function graphDfsOfHashSet() {
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

  // 先序遍历结果
  let preorder = [];
  // 后序遍历结果
  let postorder = [];
  function dfs(v) {
    visited[v] = true;
    preorder.push(v);

    for (let w of graph[v]) {
      if (!visited[w]) {
        dfs(w);
      }
    }
    postorder.push(v);
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  console.log(preorder, postorder);
  return null;
}