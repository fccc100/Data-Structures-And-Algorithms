// 480. 滑动窗口中位数
// 中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

// 例如：

// [2,3,4]，中位数是 3
// [2,3]，中位数是 (2 + 3) / 2 = 2.5
// 给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。
// 你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。

// 示例：

// 给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。

// 窗口位置                      中位数
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       1
//  1 [3  -1  -3] 5  3  6  7      -1
//  1  3 [-1  -3  5] 3  6  7      -1
//  1  3  -1 [-3  5  3] 6  7       3
//  1  3  -1  -3 [5  3  6] 7       5
//  1  3  -1  -3  5 [3  6  7]      6
//  因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力解法，超时
var medianSlidingWindow = function(nums, k) {
  let res = [];
  let l = 0;
  let r = k - 1;

  while(r < nums.length) {
    let temp = nums.slice(l, r + 1);
    temp.sort((a, b) => a - b);

    if (k % 2 == 0) {
      res.push((temp[k >> 1] + temp[(k >> 1) - 1]) / 2);
    } else {
      res.push(temp[k >> 1]);
    }
    l++;
    r++;
  }
  return res;
};

// 
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

// 
var medianSlidingWindow = function(nums, k) {
  
}
