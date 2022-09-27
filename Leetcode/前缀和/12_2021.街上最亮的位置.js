// 2021. 街上最亮的位置
// 一条街上有很多的路灯，路灯的坐标由数组 lights 的形式给出。 
// 每个 lights[i] = [positioni, rangei] 代表坐标为 positioni 的路灯照亮的范围为 [positioni - rangei, positioni + rangei] （包括顶点）。

// 位置 p 的亮度由能够照到 p的路灯的数量来决定的。

// 给出 lights, 返回最亮的位置 。如果有很多，返回坐标最小的。

// 示例 1:

// 输入: lights = [[-3,2],[1,2],[3,3]]
// 输出: -1
// 解释:
// 第一个路灯照亮的范围是[(-3) - 2, (-3) + 2] = [-5, -1].
// 第二个路灯照亮的范围是 [1 - 2, 1 + 2] = [-1, 3].
// 第三个路灯照亮的范围是 [3 - 3, 3 + 3] = [0, 6].

// 坐标-1被第一个和第二个路灯照亮，亮度为2
// 坐标0，1，2都被第二个和第三个路灯照亮，亮度为2.
// 对于以上坐标，-1最小，所以返回-1
// 示例 2：

// 输入: lights = [[1,0],[0,1]]
// 输出: 1
// 示例 3：

// 输入: lights = [[1,2]]
// 输出: -1

/**
 * @param {number[][]} lights
 * @return {number}
 */
// 差分
var brightestPosition = function (lights) {
  let n = lights.length;

  let diff = {};
  for (let i = 0; i < n; i++) {
    let l = lights[i][0] - lights[i][1];
    let r = lights[i][0] + lights[i][1];
    
    diff[l] = diff[l + ''] !== undefined ? diff[l + ''] + 1 : 1;
    diff[r + 1] = diff[r + 1] !== undefined ? diff[r + 1] - 1 : -1;
  }

  let nums = [];
  for (let key in diff) {
    nums.push([key, diff[key]])
  }

  nums.sort((a, b) => a[0] * 1 - b[0] * 1);

  let sum = 0;
  let max = -Infinity;
  let res;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i][1];
    if (sum > max) {
      res = nums[i][0];
      max = sum;
    }
  }

  return res;
};


//             [[-3,2],[1,2],[3,3]]

//             -5: 1 , 0: -1
//             -1: 1,  4: -1
//             0: 0,   7: -1

// -5: 1, 0 : 0, -1: 1, 4: 0, 0: 0, 7: -1


//              [[1,0],[0,1]]
//              1: 1,  2: -1
//              -1: 1, 2: 0

//   -1: 1, 1: 2, 2: 2