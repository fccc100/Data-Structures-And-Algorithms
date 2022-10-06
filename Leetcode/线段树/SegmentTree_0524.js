class SegmentTree {
  constructor(arr, merger = this.defaultMerger) {
    this.data = arr;
    this.tree = Array(arr.length * 4).fill(null);
    this.merge = merger;

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  buildSegmentTree(treeIdnex, l, r) {
    if (l == r) {
      this.tree[treeIdnex] = this.data[l];
      return;
    }

    let leftTreeIndex = this.leftChild(treeIdnex);
    let rightTreeIndex = this.rightChild(treeIdnex);
    let mid = l + (r - l >> 1);

    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    this.tree[treeIdnex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  query(l, r) {
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  __query(treeIndex, l, r, queryL, queryR) {
    if (l == queryL && r == queryR) {
      return this.tree[treeIndex];
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);
    if (queryL > mid) {
      return this.__query(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {
      return this.__query(leftTreeIndex, l, mid, queryL, queryR);
    }

    let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
    let rightResult = this.__query(rightTreeIndex, mid + 1, r, mid + 1, queryR);
    return this.merge(leftResult, rightResult);
  }

  set(index, val) {
    this.__set(0, 0, this.data.length - 1, index, val);
  }

  __set(treeIndex, l, r, index, val) {
    if (l == r) {
      this.tree[treeIndex] = val;
      return;
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    if (index > mid) {
      this.__set(rightTreeIndex, mid + 1, r, index, val);
    } else {
      this.__set(leftTreeIndex, l, mid, index, val);
    }

    this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  defaultMerger(a, b) {
    return a + b;
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }
}