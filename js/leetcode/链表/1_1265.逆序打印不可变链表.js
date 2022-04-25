// 1265. 逆序打印不可变链表
// 给您一个不可变的链表，使用下列接口逆序打印每个节点的值：

// ImmutableListNode: 描述不可变链表的接口，链表的头节点已给出。
// 您需要使用以下函数来访问此链表（您 不能 直接访问 ImmutableListNode）：

// ImmutableListNode.printValue()：打印当前节点的值。
// ImmutableListNode.getNext()：返回下一个节点。
// 输入只用来内部初始化链表。您不可以通过修改链表解决问题。也就是说，您只能通过上述 API 来操作链表。

// 示例 1：
// 输入：head = [1,2,3,4]
// 输出：[4,3,2,1]

/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
  let stack = [];
  while(head != null) {
    stack.push(head);
    head = head.getNext();
  }
  while(stack.length) {
    let cur = stack.pop();
    cur.printValue();
  }
};

// 递归
var printLinkedListInReverse = function(head) {
  if (head.getNext() == null) {
    head.printValue();
    return;
  }
  printLinkedListInReverse(head.getNext());
  head.printValue();
};