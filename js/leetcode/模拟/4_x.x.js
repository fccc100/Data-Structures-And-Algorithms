// LCP 03. 机器人大冒险
// 力扣团队买了一个可编程机器人，机器人初始位置在原点(0, 0)。小伙伴事先给机器人输入一串指令command，机器人就会无限循环这条指令的步骤进行移动。指令有两种：

// U: 向y轴正方向移动一格
// R: 向x轴正方向移动一格。
// 不幸的是，在 xy 平面上还有一些障碍物，他们的坐标用obstacles表示。机器人一旦碰到障碍物就会被损毁。

// 给定终点坐标(x, y)，返回机器人能否完好地到达终点。如果能，返回true；否则返回false。

// 示例 1：

// 输入：command = "URR", obstacles = [], x = 3, y = 2
// 输出：true
// 解释：U(0, 1) -> R(1, 1) -> R(2, 1) -> U(2, 2) -> R(3, 2)。
// 示例 2：

// 输入：command = "URR", obstacles = [[2, 2]], x = 3, y = 2
// 输出：false
// 解释：机器人在到达终点前会碰到(2, 2)的障碍物。
// 示例 3：

// 输入：command = "URR", obstacles = [[4, 2]], x = 3, y = 2
// 输出：true
// 解释：到达终点后，再碰到障碍物也不影响返回结果。
 
// 限制：

// 2 <= command的长度 <= 1000
// command由U，R构成，且至少有一个U，至少有一个R
// 0 <= x <= 1e9, 0 <= y <= 1e9
// 0 <= obstacles的长度 <= 1000
// obstacles[i]不为原点或者终点

/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// 一步步走，超时
var robot = function(command, obstacles, x, y) {
  if (x == 0 && y == 0) return true;

  let set = new Set();
  for (let i = 0; i < obstacles.length; i++) {
    set.add(obstacles[i][0] + ',' + obstacles[i][1]);
  }

  if (set.has('0,0')) return false;

  let index = 0;

  let curX = 0;
  let curY = 0;

  while (true) {
    let c = command[index];

    if (c == 'U') {
      curY ++;
    } else {
      curX ++;
    }

    if (set.has(curX + ',' + curY)) {
      return false;
    }

    if (curX == x && curY == y) {
      return true;
    }

    if (curX > x || curY > y) {
      return false;
    }

    index = (index + 1) % command.length;
  }
};

// 2.
var robot = function(command, obstacles, x, y) {
  if (x == 0 && y == 0) return true;

  let set = new Set();
  for (let i = 0; i < obstacles.length; i++) {
    set.add(obstacles[i][0] + ',' + obstacles[i][1]);
  }

  if (set.has('0,0')) return false;

  let curX = 0;
  let curY = 0;
  for (let i = 0; i < command.length; i++) {
    if (command[i] == 'U') {
      curY++;
    } else {
      curX++;
    }
  }

  if (!canArrive(command, curX, curY, x, y)) {
    return false;
  }

  for (let i = 0; i < obstacles.length; i++) {
    let cx = obstacles[i][0];
    let cy = obstacles[i][1];

    if (cx < x && cy < y && canArrive(command, curX, curY, x, y)) {
      return false;
    }
  }
  return true;
};