// 731. 我的日程安排表 II
// 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内不会导致三重预订时，则可以存储这个新的日程安排。

// MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，
// 注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。

// 当三个日程安排有一些时间上的交叉时（例如三个日程安排都在同一时间内），就会产生三重预订。

// 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致三重预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

// 请按照以下步骤调用MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

// 示例：

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(50, 60); // returns true
// MyCalendar.book(10, 40); // returns true
// MyCalendar.book(5, 15); // returns false
// MyCalendar.book(5, 10); // returns true
// MyCalendar.book(25, 55); // returns true
// 解释： 
// 前两个日程安排可以添加至日历中。 第三个日程安排会导致双重预订，但可以添加至日历中。
// 第四个日程安排活动（5,15）不能添加至日历中，因为它会导致三重预订。
// 第五个日程安排（5,10）可以添加至日历中，因为它未使用已经双重预订的时间10。
// 第六个日程安排（25,55）可以添加至日历中，因为时间 [25,40] 将和第三个日程安排双重预订；
// 时间 [40,50] 将单独预订，时间 [50,55）将和第二个日程安排双重预订。

// 直接遍历，两个数组，一个记录重叠的区间
var MyCalendarTwo = function() {
  this.booked = [];
  this.overlaps = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
  for (let i = 0; i < this.overlaps.length; i++) {
    let l = this.overlaps[i][0];
    let r = this.overlaps[i][1];

    if (!(end <= l || start >= r)) {
      return false;
    }
  }

  for (let i = 0; i < this.booked.length; i++) {
    let l = this.booked[i][0];
    let r = this.booked[i][1];

    // 把重叠区间加到另一个数组中
    if (!(end <= l || start >= r)) {
      this.overlaps.push([Math.max(l, start), Math.min(r, end)]);
    }
  }
  this.booked.push([start, end]);
  return true;
};

// []
// [ [ 10, 20 ] ]
// [ [ 10, 20 ], [ 50, 60 ] ]
// [ [ 10, 20 ], [ 50, 60 ], [ 10, 40 ] ]
// [ [ 10, 20 ], [ 50, 60 ], [ 10, 40 ] ]
// [ [ 10, 20 ], [ 50, 60 ], [ 10, 40 ], [ 5, 10 ] ]


// 2.差分
var MyCalendarTwo = function() {
  this.count = {};
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
 
// {10: 1, 20: -1, 50: 1, 60: -1, 10: 1, 40: -1}
MyCalendarTwo.prototype.book = function(start, end) {
  let count = this.count;
  count[start] = count[start] ? count[start] + 1 : 1;
  count[end] = count[end] ? count[end] - 1 : -1;

  let maxBook = 0;
  for (let key in count) {
    let freq = count[key];
    maxBook += freq;
    
    if (maxBook > 2) {
      count[start] = count[start] ? count[start] - 1 : -1;
      count[end] = count[end] ? count[end] + 1 : 1;
      return false;
    }
  }
  return true;
};
