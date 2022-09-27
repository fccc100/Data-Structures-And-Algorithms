/**
 * 0526线段树
 */

class SegmentTree {
  constructor(arr, merge) {
    this.data = arr;
    this.merge = merge;
    this.tree = Array(4 * arr.length);

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  // 在treeIndex处创建[l, r]区间的线段树
  buildSegmentTree(treeIndex, l, r) {
    // 区间左右端点相等，只有一个数了，直接填值
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 从中点处分别创建左右线段树
    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    // 创建完左右区间后合并
    this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  query(l, r) {
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  // 从treeIndex的[l, r]区间中查找[queryL, queryR]区间
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

  // 从treeIndex[l, r]区间更新
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