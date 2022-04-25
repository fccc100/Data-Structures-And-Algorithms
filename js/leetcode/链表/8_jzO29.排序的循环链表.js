// 剑指 Offer II 029. 排序的循环链表
// 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。

// 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

// 如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

// 如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

// 示例 1：
// 输入：head = [3,4,1], insertVal = 2
// 输出：[3,4,1,2]
// 解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。

/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
  if (head == null) {
    let res = new Node(insertVal);
    res.next = res;
    return res;
  }
  if (head.next == head) {
    head.next = new Node(insertVal, head);
    return head;
  }

  let cur = head;
  let visited = false;
  let same = true;
  while(true) {
    if (cur.visited) {
      visited = true;
      break;
    }
    if (cur.val != cur.next.val) {
      same = false;
    }
    cur.visited = true;
    if (cur.val < insertVal && cur.next.val >= insertVal) {
      cur.next = new Node(insertVal, cur.next);
      break;
    }
    cur = cur.next;
  }

  if (visited) {
    
    let cur1 = head;
    while(true) {

      if (cur1.val <= cur1.next.val && !cur1.next.used) {
        cur1.next.used = true;
        cur1 = cur1.next;
      } else {
        cur1.next = new Node(insertVal, cur1.next);
        break;
      }
    }
  }

  return head;
};