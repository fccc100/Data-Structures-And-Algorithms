class SegmentTree {
  constructor(arr, merge) {
    this.data = arr;
    this.merge = merge;
    this.tree = Array(arr.length * 4).fill(null);

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  buildSegmentTree(treeIndex, l, r) {
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
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

  set() {
    
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }
}