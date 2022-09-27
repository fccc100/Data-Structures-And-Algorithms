class UnionFind {
  constructor(size) {
    this.parent = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  size() {
    return this.parent.length;
  }

  find(p) {
    while(p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) == this.find(q);
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot == qRoot) {
      return;
    }

    this.parent[pRoot] = qRoot;
  }
}