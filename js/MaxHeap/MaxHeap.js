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

   // 获取index索引父节点的索引
   parent(index) {
    return Math.floor((index - 1) / 2);
   }

   // 获取index索引左孩子节点的索引
   leftChild(index) {
     return index * 2 + 1;
   }

   // 获取index索引右孩子节点的索引
   rightChild(index) {
     return index * 2 + 2;
   }

   // 往堆中添加元素
   add(val) {
     this.data[this.data.length] = val;
     this.siftUp(this.data.length - 1);
   }

   // 添加元素后，为保证堆的性质，进行上浮操作
   siftUp(index) {
    while(this.parent(index) >= 0 && this.data[this.parent(index)] < this.data[index]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
   }

   swap(i, j) {
     let temp = this.data[i];
     this.data[i] = this.data[j];
     this.data[j] = temp;
   }

   // 提取堆中的最大元素
   extractMax() {
     let max = this.data[0];
     this.swap(0, this.data.length - 1);
     this.data.splice(this.data.length - 1, 1);
     this.siftDown(0);
     return max;
   }

   // 提取完最大元素后，为保证堆的性质，进行下沉操作
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
}