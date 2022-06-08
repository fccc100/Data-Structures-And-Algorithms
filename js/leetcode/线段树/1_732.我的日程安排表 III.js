// 732. 我的日程安排表 III
// 当 k 个日程安排有一些时间上的交叉时（例如 k 个日程安排都在同一时间内），就会产生 k 次预订。

// 给你一些日程安排 [start, end) ，请你在每个日程安排添加后，返回一个整数 k ，表示所有先前日程安排会产生的最大 k 次预订。

// 实现一个 MyCalendarThree 类来存放你的日程安排，你可以一直添加新的日程安排。

// MyCalendarThree() 初始化对象。
// int book(int start, int end) 返回一个整数 k ，表示日历中存在的 k 次预订的最大值。


// 示例：

// 输入：
// ["MyCalendarThree", "book", "book", "book", "book", "book", "book"]
// [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]]
// 输出：
// [null, 1, 1, 2, 3, 3, 3]

// 解释：
// MyCalendarThree myCalendarThree = new MyCalendarThree();
// myCalendarThree.book(10, 20); // 返回 1 ，第一个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
// myCalendarThree.book(50, 60); // 返回 1 ，第二个日程安排可以预订并且不存在相交，所以最大 k 次预订是 1 次预订。
// myCalendarThree.book(10, 40); // 返回 2 ，第三个日程安排 [10, 40) 与第一个日程安排相交，所以最大 k 次预订是 2 次预订。
// myCalendarThree.book(5, 15); // 返回 3 ，剩下的日程安排的最大 k 次预订是 3 次预订。
// myCalendarThree.book(5, 10); // 返回 3
// myCalendarThree.book(25, 55); // 返回 3

// [null,0,1,1,1,3,3]
// 预期结果
// [null,1,1,2,3,3,3]
var MyCalendarThree = function () {
  this.map = new Map();
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  // let res = 0;
  // let max = 0;
  // if (this.map.has(start)) {
  //   this.map.set(start, this.map.get(start) + 1);
  // } else {
  //   this.map.set(start, 1);
  // }

  // if (this.map.has(end)) {
  //   this.map.set(end, this.map.get(end) - 1);
  // } else {
  //   this.map.set(end, -1);
  // }

  // for (let val of this.map.values()) {
  //   max += val;
  //   res = Math.max(max, res);
  // }
  // return res;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

// java TreeMap实现，js只有一个map，底层是hashMap，无法用map实现
class MyCalendarThree {
  TreeMap < Integer, Integer > map;

  public MyCalendarThree() {
    map = new TreeMap < Integer, Integer > ();
  }

  public int book(int start, int end) {
    map.put(start, map.getOrDefault(start, 0) + 1);
    map.put(end, map.getOrDefault(end, 0) - 1);

    int freq = 0;
    int res = 0;
    for (int val: map.values()) {
      System.out.print(val + ",");
      freq += val;
      res = Math.max(res, freq);
    }
    return res;
  }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree obj = new MyCalendarThree();
 * int param_1 = obj.book(start,end);
 */