// 剑指 Offer II 037. 小行星碰撞
// 给定一个整数数组 asteroids，表示在同一行的小行星。

// 对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

// 找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

// 示例 1：

// 输入：asteroids = [5,10,-5]
// 输出：[5,10]
// 解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
// 示例 2：

// 输入：asteroids = [8,-8]
// 输出：[]
// 解释：8 和 -8 碰撞后，两者都发生爆炸。
// 示例 3：

// 输入：asteroids = [10,2,-5]
// 输出：[10]
// 解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
// 示例 4：

// 输入：asteroids = [-2,-1,1,2]
// 输出：[-2,-1,1,2]
// 解释：-2 和 -1 向左移动，而 1 和 2 向右移动。 由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。 

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (!stack.length) {
      stack.push(asteroids[i]);
    } else {
      
      // 当前行星是否存活
      let alive = true;
      while(alive && stack.length && asteroids[i] < 0 && stack[stack.length - 1] > 0) {
        let top = stack[stack.length - 1];

        if (Math.abs(top) == Math.abs(asteroids[i])) {
          alive = false;
          stack.pop();
        } else if (Math.abs(top) < Math.abs(asteroids[i])) {
          stack.pop();
        } else {
          alive = false;
          break;
        }
      }

      if (alive) {
        stack.push(asteroids[i]);
      }
    }
  }

  return stack;
};