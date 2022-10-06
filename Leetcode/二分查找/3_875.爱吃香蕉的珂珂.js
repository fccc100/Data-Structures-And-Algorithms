// 875. 爱吃香蕉的珂珂
// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

// 示例 1：
// 输入: piles = [3,6,7,11], H = 8
// 输出: 4

function minEatingSpeed(piles, h) {
  let l = 1;
  let r = piles[0];
  for (let i = 0; i < piles.length; i++) {
    r = Math.max(r, piles[i]);
  }

  while(l < r) {
    let mid = l + (r - l >> 1);
    if (eatingTime(piles, mid) === h) {
      r = mid;
    } else if (eatingTime(piles, mid) > h) {
      l = mid + 1;
    } else if (eatingTime(piles, mid) < h) {
      r = mid;
    }
  }

  return l;
}

function eatingTime(piles, speed) {
  let time = 0;
  for (let i = 0; i < piles.length; i++) {
    time += Math.ceil(piles[i] / speed);
  }
  return time;
}