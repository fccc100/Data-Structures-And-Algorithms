// 封装动态数组
// 由于js的数组本身就是动态数组了，这里假设js的数组为静态数组进行封装，仅用作练习
class ArrayList {

  // 构造函数，使用capacity为容量构造数组, capacity默认为10
  constructor(capacity = 10) {
    this.data = Array(capacity);
    this.size = 0; 
  }

  // 获取数组的容量
  getCapacity() {
    return this.data.length;
  }

  // 获取数组中的元素个数
  getSize() {
    return this.size;
  }

  // 数组是否为空
  isEmpty() {
    return this.size == 0;
  }

  // 在数组的index索引插入元素e
  add(index, e) {
    // if (this.size == this.data.length) {
    //   throw new Error('Add failed. Array is full.');
    // }
    if (index < 0 || index > this.size) {
      throw new Error('Invalid index');
    }

    if (this.size == this.data.length) {
      this.resize(2 * this.data.length);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size++;
  }

  // 在数组第一个位置添加元素
  addFirst(e) {
    this.add(0, e);
  }

  // 在数组最后一个位置添加元素
  addLast(e) {
    this.add(this.size, e);
  }

  // 获取index位置的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }

    return this.data[index];
  }

  // 修改index位置的元素
  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }
    this.data[index] = e;
  }

  // 查询数组中是否包含元素e
  contains(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return true;
      }
    }
    return false;
  }

  // 查找元素e所在的索引，不存在返回-1
  findIndex(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return i;
      }
    }
    return -1;
  }

  // 删除数组index位置的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Invalid index');
    }

    let ret = this.data[index];
    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.size --;

    if (this.size == this.data.length >> 1) {
      this.resize(this.data.length >> 1);
    }
    return ret;
  }

  // 删除数组的第一个元素
  removeFirst() {
    return this.remove(0);
  }

  // 删除数组的最后一个元素
  removeLast() {
    return this.remove(this.size - 1);
  }

  // 删除元素e
  removeElement(e) {
    let index = this.findIndex(e);
    if (index > -1) {
      this.remove(index);
      return true;
    }
    return false;
  }

  // 动态扩容，将数组容量变成newCapacity
  resize(newCapacity) {
    let newData = Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }
}