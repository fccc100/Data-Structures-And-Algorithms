// 658. 找到 K 个最接近的元素
// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。
// 返回的结果必须要是按升序排好的。

// 整数 a 比整数 b 更接近 x 需要满足：

// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b

// 示例 1：

// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]
// 示例 2：

// 输入：arr = [1,2,3,4,5], k = 4, x = -1
// 输出：[1,2,3,4]

// 使用堆，时间复杂度高，作练习用
class Heap {
  constructor(k, x) {
    this.k = k;
    this.x = x;
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
    
    if (this.size() >= this.k) {
      if (Math.abs(num - this.x) > Math.abs(this.peek() - this.x)) {
        return;
      }
      if (Math.abs(num - this.x) == Math.abs(this.peek() - this.x) && num > this.peek()) {
        return;
      }

      this.data.push(num);
      this.__siftUp(this.size() - 1);
      this.poll();
    } else {
      this.data.push(num);
      this.__siftUp(this.size() - 1);
    }
  }

  __siftUp(index) {
    while(index > 0 && this.checked(this.parent(index), index)) {
      this.__swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  // comIndex 是否 比curIndex 是离x更近的元素
  checked(comIndex, curIndex) {
    let parentDiff = Math.abs(this.data[comIndex] - this.x);
    let curDiff = Math.abs(this.data[curIndex] - this.x);
    if (parentDiff < curDiff) {
      return true;
    }
    if (parentDiff == curDiff && this.data[comIndex] < this.data[curIndex]) {
      return true;
    }

    return false;
  }

  // 取出堆顶元素
  poll() {
    let ret = this.peek();

    this.__swap(0, this.size() - 1);
    this.data.pop();
    this.__siftDown(0);

    return ret;
  }

  __siftDown(index) {
    while(this.leftChild(index) < this.size()) {
      let minIndex = this.leftChild(index);
      if (this.rightChild(index) < this.size() && this.checked(minIndex, this.rightChild(index))) {
        minIndex = this.rightChild(index);
      }

      if (this.checked(minIndex, index)) {
        break;
      }

      this.__swap(index, minIndex);
      index = minIndex;
    }
  }

  peek() {
    return this.data[0];
  }
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  let heap = new Heap(k, x);

  for (let i = 0; i < arr.length; i++) {
    heap.offer(arr[i]);
  }

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(heap.poll());
  }

  return res.sort((a, b) => a - b);
};


// 2.按距离排序
var findClosestElements = function(arr, k, x) {
  arr.sort((a, b) => {
    let s1 = Math.abs(a - x);
    let s2 = Math.abs(b - x);
    if (s1 < s2 || (s1 == s2 && a < b)) {
      return -1;
    } else if (s1 > s2 || (s1 == s2 && a > b)) {
      return 1;
    } else {
      return 0;
    }
  })
  return arr.slice(0, k + 1).sort((a, b) => a - b);
}


// 双指针
var findClosestElements = function(arr, k, x) {
  let n = arr.length;
  // 如果x小于最小值，说明最前面的k个就是答案
  if (x < arr[0]) {
    return arr.slice(0, k);
  } else if (x > arr[n - 1]) {
    // 如果x大于最大值，最后面k个就是答案
    return arr.slice(n - k, n);
  }

  // x在中间，距离最远的肯定在两头，从两头开始删，区间长度为k时就是答案
  let l = 0;
  let r = n - 1;

  while(r - l + 1 > k) {
    if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
      l++;
    } else {
      r--;
    }
  }

  return arr.slice(l, r + 1);
}

// 二分查找最优区间的左边界
var findClosestElements = function(arr, k, x) {
  let n = arr.length;

  let l = 0;
  // 最优左边界最大能到n - k位置
  let r = n - k;

  while(l < r) {
    let mid = l + (r - l >> 1);

    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return arr.slice(l, l + k);
}
