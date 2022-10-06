class SegmentTree {
  constructor(arr, merge) {
    this.data = arr;
    this.merge = merge;
    this.tree = Array(arr.length * 4);

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  // 从treeIndex构建[l, r]区间的线段树
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

  // 查询[l, r]区间的值
  query(l, r) {
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  // 从treeIndex的[l, r]区间查询[queryL, queryR]区间
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

  // 设置index 的值为val
  set(index, val) {
    this.__set(0, 0, this.data.length - 1, index, val);
  }

  // 从treeIndex的[l, r]区间设置index处的值为val
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

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }
}