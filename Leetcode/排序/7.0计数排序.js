// 统计元素个数再填充数组
function sortArray(nums) {
  let r = 10;
  let count = Array(r).fill(0);

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ++;
  }

  let index = Array(r + 1).fill(0);
  for (let i = 0; i < r; i++) {
    index[i + 1] = index[i] + count[i];
  }
  console.log(index, 'index')

  for (let i = 1; i < index.length; i++) {
    for (let j = index[i - 1]; j < index[i]; j++) {
      nums[j] = i - 1;
    }
  }
  return nums;
}

// 稳定的计数排序实现
function sortArray1(nums) {
  let r = 10;
  // 统计每个元素的个数,count[i] 表示i的个数
  let count = Array(r).fill(0);

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] ++;
  }

  console.log(count, 'count')

  // 计算每个元素填充的索引区间
  let index = Array(r + 1).fill(0);
  for (let i = 0; i < r; i++) {
    index[i + 1] = index[i] + count[i];
  }

  console.log(index, 'index')

  let temp = Array(r).fill(0);
  for (let i = 0; i < nums.length; i++) {
    temp[index[nums[i]]] = nums[i];
    index[nums[i]] ++;
  }
  console.log(temp, 'temp')

  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
}

function test() {
  let nums = [1,3,3,2,8,5,6,5,9,5];
  // for (let i = 0; i < 1000; i++) {
  //   let cur = 0 + Math.round(Math.random() * (750 - 0));
  //   nums.push(cur);
  // }
  console.log(sortArray1(nums));
}
test()