// 面试题 17.20. 连续中值
// 随机产生数字并传递给一个方法。你能否完成这个方法，在每次产生新值时，寻找当前所有值的中间值（中位数）并保存。

// 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。
// 示例：

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3) 
// findMedian() -> 2

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

  __swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 堆中添加元素
  offer(num) {
    this.data.push(num);
    this.__siftUp(this.size() - 1);
  }

  // 元素上浮
  __siftUp(index) {
    while(index > 0 && this.data[this.parent(index)] < this.data[index]) {
      this.__swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // 取出堆顶元素
  poll() {
    let ret = this.data[0];

    this.__swap(0, this.size() - 1);
    this.data.pop();
    this.__siftDown(0);

    return ret;
  }

  __siftDown(index) {
    while(this.leftChild(index) < this.size()) {
      let maxIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);
      if (rightIndex < this.size() && this.data[rightIndex] > this.data[maxIndex]) {
        maxIndex = rightIndex;
      }
      if (this.data[index] > this.data[maxIndex]) {
        break;
      }

      this.__swap(index, maxIndex);
      index = maxIndex;
    }
  }

  // 查看堆顶元素
  peek() {
    return this.data[0];
  }
}

class MinHeap {
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

  __swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  // 堆中添加元素
  offer(num) {
    this.data.push(num);
    this.__siftUp(this.size() - 1);
  }

  // 元素上浮
  __siftUp(index) {
    while(index > 0 && this.data[this.parent(index)] > this.data[index]) {
      this.__swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // 取出堆顶元素
  poll() {
    let ret = this.data[0];

    this.__swap(0, this.size() - 1);
    this.data.pop();
    this.__siftDown(0);

    return ret;
  }

  __siftDown(index) {
    while(this.leftChild(index) < this.size()) {
      let minIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);
      if (rightIndex < this.size() && this.data[rightIndex] < this.data[minIndex]) {
        minIndex = rightIndex;
      }
      if (this.data[index] < this.data[minIndex]) {
        break;
      }

      this.__swap(index, minIndex);
      index = minIndex;
    }
  }

  // 查看堆顶元素
  peek() {
    return this.data[0];
  }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  // 存放较小的元素
  this.small = new MaxHeap();

  // 存放较大的元素
  this.large = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let small = this.small;
  let large = this.large;

  if (small.size() < large.size()) {
    large.offer(num);
    small.offer(large.poll());
  } else {
    small.offer(num);
    large.offer(small.poll());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let small = this.small;
  let large = this.large;

  if (small.size() > large.size()) {
    return small.peek();
  } else if (large.size() > small.size()) {
    return large.peek();
  }

  return (small.peek() + large.peek()) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */