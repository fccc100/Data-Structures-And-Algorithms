// 146. LRU 缓存
// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；
// 如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

// 示例：

// 输入
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// 输出
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// 解释
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // 缓存是 {1=1}
// lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
// lRUCache.get(1);    // 返回 1
// lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
// lRUCache.get(2);    // 返回 -1 (未找到)
// lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
// lRUCache.get(1);    // 返回 -1 (未找到)
// lRUCache.get(3);    // 返回 3
// lRUCache.get(4);    // 返回 4

// 先写一个双向链表
class ListNode {
  constructor(key, value, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // 初始时头尾节点均为null
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  addLast(node) {
    // 添加一个节点，如果头节点就是空，让头尾节点都指向新节点
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      // 头节点不为空，把新节点加到尾节点的后面
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size ++;
  }

  // 删除头节点并返回该节点
  removeHead() {
    let removeNode = null;
    if (this.head == null || this.head.next == null) {
      removeNode = this.head;
      this.head = null;
      this.tail = null;
    } else {
      let head = this.head;
      removeNode = head;
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.size--;
    return removeNode;
  }

  moveToTail(node) {
    if (this.head == null || this.head.next == null) {
      return;
    }

    // 头尾 节点一样，只有一个节点，不需要移动
    if (this.head == this.tail) {
      return;
    }

    // 已经是尾节点，不需移动
    if (this.tail == node) {
      return;
    }

    // 要移动的节点是头节点跟不是头节点分开处理
    if (this.head == node) {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.list = new LinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  // map中存在key，本次访问需要将其移动到链表的尾节点
  if (this.map.has(key)) {
    let node = this.map.get(key);
    let ret = node.value;
    this.list.moveToTail(node);
    return ret;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    // map中已经存在这个key了，更新节点的值，并且将其移动到链表的尾节点
    let node = this.map.get(key);
    node.key = key;
    node.value = value;
    this.list.moveToTail(node);
  } else {
    let node = new ListNode(key, value);
    this.list.addLast(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
      let head = this.list.removeHead();
      this.map.delete(head.key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */