// 最大堆
class MaxHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  // 根据index获取其父节点的索引
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // 根据index获取其左孩子的索引
  leftChild(index) {
    return 2 * index + 1;
  }

  // 根据index获取其右孩子的索引
  rightChild(index) {
    return 2 * index + 2;
  }

  // 添加元素
  add(val) {
    this.data[this.data.length] = val;
    this.siftUp(this.data.length - 1);
  }

  // 从index处上移， 维持堆的性质
  siftUp(index) {
    while(index > 0 && this.data[index] > this.data[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 获取最大值
  findMax() {
    if (this.size() == 0) {
      throw new Error('Max Heap is null')
    }
    return this.data[0];
  }

  // 从堆中提取最大值
  extractMax() {
    // 提取最大值后，将第一个元素与最后一个元素交换位置，并从第一个元素进行下沉操作，以维持最大堆的性质
    let max = this.findMax();
    this.swap(0, this.data.length - 1);
    this.data.splice(this.data.length - 1, 1);
    this.siftDown(0);
    return max;
  }

  // 从index索引处进行下沉操作
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

  // 取出堆中最大元素，并替换成传入的值
  replace(val) {
    let max = this.findMax();
    this.data[0] = val;
    this.siftDown(0);
    return max;
  }

  // 将arr数组转化为堆
  heapify(arr) {
    this.data = arr;
    for (let i = this.parent(this.data.length - 1); i >= 0;  i--) {
      this.siftDown(i);
    }
  }
}