// 708. 循环有序列表的插入
// 给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环非降序的。

// 给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

// 如果有多个满足条件的插入位置，你可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

// 如果列表为空（给定的节点是 null），你需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

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
var insert = function (head, insertVal) {
  // 空节点，直接创建一个指向自己的节点
  if (head == null) {
    let res = new Node(insertVal);
    res.next = res;
    return res;
  }

  // 只有一个节点，直接接在这个节点后面
  if (head.next == head) {
    head.next = new Node(insertVal, head);
    return head;
  }

  // 找到一个位置，前面的数小于插入值，后面一个数大于等于插入值，如果找到了，插入在这个节点
  let cur = head;
  let visited = false;
  while(true) {

    // 如果走过一轮了还没有找到，跳出
    if (cur.visited) {
      visited = true;
      break;
    }
    
    cur.visited = true;

    // 找到了如上所说的位置，直接插入在这个位置
    if (cur.val < insertVal && cur.next.val >= insertVal) {
      cur.next = new Node(insertVal, cur.next);
      break;
    }
    cur = cur.next;
  }

  // 绕了一圈都没找到，说明是以下几种情况
  // 1.链表中所有节点值都相等
  // 2.插入的值比链表所有节点的值都大或者比链表所有节点的值都小
  if (visited) {
    let cur1 = head;

    // 这两种情况下：
    // 1.比所有节点值大或小：找到最大的那个元素插在它后面；
    // 2.所有节点值相等：这种情况找到最后面那个节点插在它后面；
    while(true) {
      if (cur1.val <= cur1.next.val && !cur1.next.used) {
        cur1.next.used = true;
        cur1 = cur1.next;
      } else {
        // 这里就是上面两种情况任一种，当前值大于下一个值了，说明找到了最大值，
        // 下一个值已经访问过了，说明找到了最后一个节点，此时都可以直接插入
        cur1.next = new Node(insertVal, cur1.next);
        break;
      }
    }
  }

  return head;
};