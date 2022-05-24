// 线段树
class SegmentTree {
  // 线段树构造函数，存放树的数组需要开4n的空间
  // merger是传递的函数，用来指定应该怎样处理区间
  constructor(arr, merger) {
    this.data = arr.slice();
    this.tree = Array(4 * arr.length).fill(null);
    this.merger = merger;

    this.buildSegmentTree(0, 0, arr.length - 1);
  }

  // 在treeIndex位置创建[l, r]区间的线段树
  buildSegmentTree(treeIndex, l, r) {
    // 区间只有一个元素时，直接赋值
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    // l不等于r，说明是一段区间，递归的创建左右两段区间
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 找到区间的中点
    let mid = l + Math.floor((r - l) / 2);

    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    // 递归创建完左右区间后，合并两段区间
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  // 查询[l, r]区间的值
  query(l, r) {
    if (l < 0 || l >= this.data.length ||
      r < 0 || r >= this.data.length || l > r) {
      throw new Error("Index is illegal.");
    }

    // 从tree的0索引，从[0, n - 1]区间查找
    return this.__query(0, 0, this.data.length - 1, l, r);
  }

  // 在以treeIndex为根的线段树中的[l, r]区间中搜索[queryL, queryR]区间的值
  __query(treeIndex, l, r, queryL, queryR) {
    // 查找的区间与当前区间左右端点都相等，直接返回值
    if(l == queryL && r == queryR) {
      return this.tree[treeIndex];
    }
    
    // 获取区间的中点和左右孩子索引
    let mid = l + Math.floor((r - l) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 如果查询区间的左端点比中点还大，说明查询的整个区间在中点右边查询就可以了， 直接递归从右孩子中查询
    if (queryL >= mid + 1) {
      return this.__query(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {

      // 查询的区间右端点小于中点时，直接从左孩子中查找就可以了
      return this.__query(leftTreeIndex, l, mid, queryL, queryR);
    }

    // 查询区间跨越了中点，需要从两侧分别查找，从左侧查找[queryL, mid], 从右侧查找[mid + 1, queryR]
    let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
    let rightResult = this.__query(rightTreeIndex, mid + 1, r, mid + 1, queryR);

    // 查询左右两侧的值之后合并
    return this.merger(leftResult, rightResult);
  }

  set(index, val) {
    if(index < 0 || index >= this.data.length) {
      throw new Error("Index is illegal");
    }
    this.data[index] = val;
    this.__set(0, 0, this.data.length - 1, index, val);
  }

  // 在以treeIndex为根的线段树中更新index的值为val
  __set(treeIndex, l, r, index, val) {
    if (l == r) {
      this.tree[treeIndex] = val;
      return;
    }

    // 找到查询区间的中点和左右孩子索引
    let mid = l + Math.floor((r - l) / 2);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);
    
    // 如果更新的索引大于mid，说明更新的点在右区间，直接去右区间更新
    if (index >= mid + 1) {
      this.__set(rightTreeIndex, mid + 1, r, index, val);
    } else {
      // 如果更新的索引小于等于mid，说明更新的点在左区间，从左区间更新
      this.__set(leftTreeIndex, l, mid, index, val);
    }
    
    // 更新完左右区间后，递归回来的路上要更新treeIndex的值
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
  }

  // 获取size
  getSize() {
    return this.data.length;
  }

  // 获取index位置的值
  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error('invalid index');
    }
    return this.data[index];
  }

  // 用数组当作树时，左孩子的索引
  leftChild(index) {
    return 2 * index + 1;
  }

  // 右孩子的索引
  rightChild(index) {
    return 2 * index + 2;
  }
}

/**
 * 二
 */
class SegmentTree1 {
  constructor(arr, merger = this.defaultMerger) {
    if (merger && typeof merger != 'function') {
      throw new Error('merger must be a function')
    }

    this.data = arr.slice();
    this.tree = Array(arr.length * 4).fill(null);
    this.merger = merger;

    this.buildSegmentTree(0, 0, arr.length - 1);
  }
  
  // 在treeIndex位置创建[l, r]区间的线段树
  buildSegmentTree(treeIndex, l, r) {
    if (l == r) {
      this.tree[treeIndex] = this.data[l];
      return;
    }

    // 找到左右孩子的索引，递归创建左右线段树
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    let mid = l + (r - l >> 1);
    this.buildSegmentTree(leftTreeIndex, l, mid);
    this.buildSegmentTree(rightTreeIndex, mid + 1, r);

    // 线段树创建后，使用merger合并两个区间的值
    this.tree[treeIndex] = this.merger(this.tree[leftTreeIndex], this.tree[this.rightTreeIndex]);
  }

  // 从线段树中查询[l, r]区间的值
  query(l, r) {
    if (l < 0 || l >= this.data.length ||
      r < 0 || r >= this.data.length || l > r) {
      throw new Error("Index is illegal.");
    }

    this.__query(0, 0, this.data.length - 1, l, r);
  }
  
  // 从treeIndex的[l, r]区间查询[queryL, queryR]区间的值
  __query(treeIndex, l, r, queryL, queryR) {
    if (l == queryL && r == queryR) {
      return this.tree[treeIndex];
    }

    let mid = l + (r - l >> 1);
    let leftTreeIndex = this.leftChild(treeIndex);
    let rightTreeIndex = this.rightChild(treeIndex);

    // 如果查询区间的左端点大于mid，说明整个区间是在右区间， 递归从右区间查找
    if (queryL >= mid + 1) {
      return this.__query(rightTreeIndex, mid + 1, r, queryL, queryR);
    } else if (queryR <= mid) {
      return this.__query(leftTreeIndex, l, mid, queryL, queryR);
    }

    let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
    let rightResult = this.__query(rightTreeIndex, mid + 1, r, mid + 1, queryR);
    return this.merger(leftResult, rightResult);
  }

  // 返回左孩子的索引
  leftChild(index) {
    return 2 * index + 1;
  }

  // 返回右孩子的索引
  rightChild(index) {
    return 2 * index + 2;
  }

  defaultMerger(a, b) {
    return a + b;
  }
}