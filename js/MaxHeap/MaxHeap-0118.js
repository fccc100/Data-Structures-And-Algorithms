class MaxHeap {
  constructor(arr = []) {
    // 使用数组存储堆
    this.data = arr;

    // heapify
    if (arr.length > 1) {
      for (let i = this.parent(arr.length - 1); i > 0; i--) {
        this.siftDown(i);
      }
    }
  }

  size() {
    return this.data.length;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  // 往堆中添加元素
  add(val) {
    this.data.push(val);
    this.siftUp(this.size() - 1);
  }

  // 上浮
  siftUp(index) {
    while(index > 0 && this.data[this.parent(index)] < this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  peek() {
    return this.data[0];
  }

  // 提取最大值
  extractMax() {
    let max = this.peek();
    this.swap(0, this.size() - 1);
    this.data.pop();
    this.siftDown(0);
    return max;
  }

  // 下沉
  siftDown(index) {
    while(this.leftChild(index) < this.size()) {
      let maxIndex = this.leftChild(index);
      if (maxIndex + 1 < this.size() && this.data[maxIndex + 1] > this.data[maxIndex]) {
        maxIndex = this.rightChild(index);
      }
      if (this.data[index] > this.data[maxIndex]) {
        break;
      }
      this.swap(index, maxIndex);
      index = maxIndex;
    }
  }

  // 替换
  replace(val) {
    let max = this.peek();
    this.data[0] = val;
    this.siftDown(0);
    return max;
  }
}