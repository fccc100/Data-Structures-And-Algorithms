// 1836. 从未排序的链表中移除重复元素
// 给定一个链表的第一个节点 head ，找到链表中所有出现多于一次的元素，并删除这些元素所在的节点。

// 返回删除后的链表。

// 示例 1:
// 输入: head = [1,2,3,2]
// 输出: [1,3]
// 解释: 2 在链表中出现了两次，所以所有的 2 都需要被删除。删除了所有的 2 之后，我们还剩下 [1,3] 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
  // 用set记录存在的值，用delSet记录哪些是删除了的值
  let set = new Set();
  let delSet = new Set();

  let dummyHead = new ListNode(-1, head);
  let cur = dummyHead;
  while(cur.next != null) {
    if (set.has(cur.next.val)) {
      let next = cur.next;
      delSet.add(next.val);
      cur.next = next.next;
      next.next = null;
    } else {
      set.add(cur.next.val);
      cur = cur.next;
    }
  }

  let cur1 = dummyHead;
  while(cur1.next != null) {
    if (delSet.has(cur1.next.val)) {
      let next = cur1.next;
      cur1.next = next.next;
      next.next = null;
    } else {
      cur1 = cur1.next;
    }
  }
  return dummyHead.next;
};

// 递归
var deleteDuplicatesUnsorted = function(head) {
  let map = new Map();
  let cur = head;
  while(cur != null) {
    if (map.has(cur.val)) {
      map.set(cur.val, map.get(cur.val) + 1);
    } else {
      map.set(cur.val, 1);
    }
    cur = cur.next;
  }

  function _deleteDuplicatesUnsorted(head) {
    if (head == null) {
      return null;
    }

    head.next = _deleteDuplicatesUnsorted(head.next);
    if (map.get(head.val) > 1) {
      let next = head.next;
      head.next = null;
      return next;
    } else {
      return head;
    }
  }
  
  let dummyHead = new ListNode(-1, head);
  return _deleteDuplicatesUnsorted(dummyHead).next;
};