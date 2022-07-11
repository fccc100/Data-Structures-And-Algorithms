// MaxHeap
class MaxHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  parent(index) {
    return (index - 1) >> 1;
  }

  swap(i, j) {
    let temp = this.data[index]
  }

  // 往堆中添加元素
  offer(num) {
    this.data[this.size()] = num;

    this.__siftUp(this.size() - 1);
  }

  __siftUp(index) {
    while(this.parent(index) > 0 && this.data[this.parent(index)] < this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
  

  // 取出堆顶元素
  poll() {

  }

  // 瞥一眼堆顶元素
  peek() {
    return this.data[0];
  }
}