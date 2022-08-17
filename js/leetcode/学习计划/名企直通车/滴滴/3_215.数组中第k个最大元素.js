// 215. 数组中的第K个最大元素
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。

// 示例 1:

// 输入: [3,2,1,5,6,4], k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6], k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1.先排序再直接求第k个元素，O(nlogn);
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};


// 使用size为k的小顶堆维护最大的k个元素，返回堆顶元素
// 时间复杂度O(nlogk)，最坏情况O(nlogn), k远小于n时接近于O(n),大部分情况小于O(nlogn);
class MinHeap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  parent(index) {
    return (index - 1) >> 1;
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  add(val) {
    this.data.push(val);
    this.shiftUp(this.data.length - 1);
  }

  shiftUp(index) {
    while (this.parent(index) >= 0 && this.data[this.parent(index)] > this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  extractMin() {
    let ret = this.data[0];
    this.swap(0, this.data.length - 1);
    this.data.pop();
    this.shiftDown(0);
    return ret;
  }

  shiftDown(index) {
    while (this.leftChild(index) < this.size()) {
      let minIndex = this.leftChild(index);
      if (this.rightChild(index) < this.size() && this.data[this.rightChild(index)] < this.data[minIndex]) {
        minIndex = this.rightChild(index);
      }

      if (this.data[minIndex] > this.data[index]) {
        break;
      }

      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  poll() {
    return this.data[0];
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

var findKthLargest = function(nums, k) {
  let minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) {
      minHeap.add(nums[i]);
    } else {
      if (nums[i] <= minHeap.poll()) {
        continue;
      } else {
        minHeap.extractMin();
        minHeap.add(nums[i]);
      }
    }
  }
  return minHeap.poll();
}

// 基于快速选择
var findKthLargest = function(nums, k) {
  return selectK(nums, 0, nums.length - 1, nums.length - k);
}

function selectK(nums, l, r, k) {
  let p = partition(nums, l, r);

  if (p == k) {
    return nums[p];
  }

  if (p <= k) {
    return selectK(nums, p + 1, r, k);
  }

  return selectK(nums, l, p - 1, k);
}

function partition(nums, l, r) {
  let p = l + Math.round(Math.random() * (r - l));
  swap(nums, p, l);

  let i = l + 1;
  let j = r;
  while (true) {
    while (i <= j && nums[i] < nums[l]) {
      i++;
    }
    while (j >= i && nums[j] > nums[l]) {
      j--;
    }

    if (i >= j) {
      break;
    }
    
    swap(nums, i, j);
    i++;
    j--;
  }
  swap(nums, j, l);
  return j;
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}