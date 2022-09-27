// 23. 合并K个升序链表
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 示例 2：

// 输入：lists = []
// 输出：[]
// 示例 3：

// 输入：lists = [[]]
// 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  let list = lists[0];
  for (let i = 1; i < lists.length; i++) {
    list = merge(list, lists[i]);
  }

  return list;
};

function merge(list1, list2) {
  let i = list1;
  let j = list2;

  let dummyHead = new ListNode(-1);
  let curHead = dummyHead;
  while (i != null || j != null) {
    let cur;
    if (i == null) {
      cur = j;
      j = j.next;
    } else if (j == null) {
      cur = i;
      i = i.next;
    }

    if (i != null && j != null) {
      if (i.val <= j.val) {
        cur = i;
        i = i.next;
      } else {
        cur = j;
        j = j.next;
      }
    }

    curHead.next = new ListNode(cur.val);
    curHead = curHead.next;
  }
  return dummyHead.next;
}

// 2.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  let list = lists[0];
  for (let i = 1; i < lists.length; i++) {
    list = merge(list, lists[i]);
  }

  return list;
};

function merge(list1, list2) {
  let dummyHead = new ListNode(-1);
  let curHead = dummyHead;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      curHead.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      curHead.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    curHead = curHead.next;
  }
  if (list1 != null) {
    curHead.next = list1;
  }
  if (list2 != null) {
    curHead.next = list2;
  }
  return dummyHead.next;
}

// 3.递归
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  let list = lists[0];
  for (let i = 1; i < lists.length; i++) {
    list = merge(list, lists[i]);
  }

  return list;
};

// 合并两个升序链表，返回合并后的头节点
function merge(list1, list2) {
  if (list1 == null) {
    return list2;
  }
  if (list2 == null) {
    return list1;
  }

  if (list1.val <= list2.val) {
    list1.next = merge(list1.next, list2);
    return list1;
  } else {
    list2.next = merge(list1, list2.next);
    return list2;
  }
}