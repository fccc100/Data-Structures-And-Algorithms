// 单调栈：
// 单调递增或者递减的栈
// 利用单调栈，可以求解数组中每一位其左边比其小的最近的位置和其右边比其小的最近位置
// 如：[2,1,5,6,2,3]
//     [-1,-1,1,2,1,4]

// 不包含重复元素的情况
// 接收一个数组，求每个元素左边和右边比其小的元素第一次出现的位置
function f(nums) {
  let stack = [];
  // 左边比当前元素小的离当前元素最近的位置
  let leftMin = [];
  // 右边比当前元素小的离当前元素最近的位置
  let rightMin = [];

  // 依次往栈中推入元素，保持栈的单调递增性，当不满足单调递增时，将栈顶的元素推出
  // 被推出的元素右边比其小的离其最近的元素就是当前推入的元素
  // 被推出的元素左边比其小的离其最近的元素就是栈中被其压住的元素
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push(i);
    } else {
      while(stack.length && nums[stack[stack.length - 1]] >= nums[i]) {
        let cur = stack.pop();
        rightMin[cur] = i;
        leftMin[cur] = stack.length ? stack[stack.length - 1] : -1;
      }
      stack.push(i);
    }
  }
  while(stack.length) {
    let cur = stack.pop();
    rightMin[cur] = -1;
    leftMin[cur] = stack.length ? stack[stack.length - 1] : -1;
  }
  return [leftMin, rightMin];
}

// 包含重复元素
function f(nums) {
  let stack = [];
  let leftMin = [];
  let rightMin = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (!stack.length) {
      stack.push([i]);
    } else {
      while(stack.length && nums[stack[stack.length - 1][0]] > nums[i]) {
        let curList = stack.pop();
        for (let j = 0; j < curList.length; j++) {
          rightMin[curList[j]] = i;
          leftMin[curList[j]] = stack.length ? stack[stack.length - 1][stack[stack.length - 1].length - 1] : -1;
        }
      }
      if (stack.length && nums[i] == nums[stack[stack.length - 1][0]]) {
        stack[stack.length - 1].push(i);
      } else {
        stack.push([i]);
      }
    }
  }
  while(stack.length) {
    let curList = stack.pop();
    for (let i = 0; i < curList.length; i++) {
      rightMin[curList[i]] = -1;
      leftMin[curList[i]] = stack.length ? stack[stack.length - 1][stack[stack.length - 1].length - 1] : -1;
    }
  }

  return [leftMin, rightMin];
}