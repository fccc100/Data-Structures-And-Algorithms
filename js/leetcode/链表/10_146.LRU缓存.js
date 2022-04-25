// 146. LRU 缓存
// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
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

// 这道题使用双向链表，使得get put操作均为O(1)时间复杂度

// 链表节点，含有next 和 prev的双向链表
class ListNode {
  constructor(key, value, prev = null, next = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

// 链表
class LinkedList {
  // 初始时头尾指针均为null
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  // 在链表的尾巴加一个节点
  addLast(node) {
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size ++;
  }

  // 删除链表的头节点，在缓存满了时，需要将最久未使用的头节点删除
  removeHead() {
    let res;
    if (this.head == null || this.head.next == null) {
      res = this.head;
      this.head = null;
      this.tail = null;
    } else {
      res = this.head;
      let head = this.head;
      this.head = head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.size --;
    return res;
  }

  // 把一个节点移动到链表的尾巴，在操作了缓存中的某条数据时，需要将这个节点移动到链表的尾巴
  moveToTail(node) {
    if (this.head == null || this.head.next == null) return;
    if (this.tail == node) return;
    if (this.head == node) {
      this.head = node.next;
      node.next.prev = null;
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
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.list = new LinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
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
LRUCache.prototype.put = function(key, value) {
  // 如果map里有这条记录了，那么更新这个节点的值，并且把他移动到链表的尾巴
  if (this.map.has(key)) {
    let node = this.map.get(key);
    node.key = key;
    node.value = value;
    this.list.moveToTail(node);
  } else {

    // map中没有这个key，新增一个节点假如链表中，如果容量超出，就把链表的头节点删了
    let node = new ListNode(key, value);
    this.list.addLast(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
      let head = this.list.removeHead()
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