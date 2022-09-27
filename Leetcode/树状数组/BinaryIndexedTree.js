class BinaryIndexedTree{
  constructor(size) {
    this.size = size;
    this.tree = Array(size + 1).fill(0);
  }

  // 更新index位置的值为val
  update(index, val) {
    if (index > this.size) {
      throw new Error('Invalid Index');
    }
    while(index <= this.size) {
      this.tree[index] += val;
      index += this.lowbit(index);
    }
  }

  // 查询[l, r]区间的值
  query(index) {
    let res = 0;
    while(index > 0) {
      res += this.tree[index];
      index -= this.lowbit(index);
    }
    return res;
  }

  lowbit(t) {
    return t & -t;
  }
}
