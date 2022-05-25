class SegmentTree {
  constructor(arr, merge) {
    this.data = arr;
    this.merge = merge;
    this.tree = Array(4 * arr.length).fill(null);

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  // 从treeIndex构建[l, r]区间的线段树
  buildSegmentTree(treeIndex, l, r) {
    // 区间只有一个元素
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);
    let mid = l + (r - l >> 1);

    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  query(l, r) {
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  __query(treeIndex, l, r, queryL, queryR) {
    // 左区间与查询左区间、右区间与查询右区间相等时，找到了该区间，直接返回
    if (l == queryL && r == queryR) {
      return this.tree[treeIndex];
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 整个查询区间都在中点右边，往右边查询
    if (queryL > mid) {
      return this.__query(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {
      // 整个查询区间都在中点左边，往左边查询
      return this.__query(leftTreeIndex, l, mid, queryL, queryR);
    }

    // 查询区间分布在中点左右,从左右分别查找再合并    
    let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
    let rightResult = this.__query(rightTreeIndex, mid + 1, r, mid + 1, queryR);
    return this.merge(leftResult, rightResult);
  }

  set(index, val) {
    this.data[index] = val;
    this.__set(0, 0, this.data.length - 1, index, val);
  }

  // 从treeIndex这棵[l, r]区间的树中更新index索引的值为val
  __set(treeIndex, l, r, index, val) {
    if (l == r) {
      this.tree[treeIndex] = val;
      return;
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 右边更新
    if (index > mid) {
      this.__set(rightTreeIndex, mid + 1, r, index, val);
    } else {
      // 左边更新
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