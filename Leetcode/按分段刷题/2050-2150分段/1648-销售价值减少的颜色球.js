/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
 var maxProfit = function (inventory, orders) {
  let n = inventory.length
  let MOD = 1000000007n
  let max = inventory[0]
  for (let i = 0; i < n; i++) {
    max = Math.max(max, inventory[i])
  }

  let l = -1, r = max + 1
  while (l < r) {
    let mid = l + ((r - l) >> 1)
    if (check(inventory, mid, orders)) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  let res = 0n
  for (let i = 0; i < n; i++) {
    // 首项是l + 1, 末项是inventory[i],公差为1求和
    if (inventory[i] > l) {
      let cnt = BigInt(inventory[i] - l)
      let sum = BigInt(l + 1 + inventory[i])
      res += (sum * cnt) / 2n
      res %= MOD
      orders -= (inventory[i] - l)
    }
  }

  res += BigInt(l) * BigInt(orders)
  return res % MOD
};

function check(nums, mid, orders) {
  let res = 0
  for (let x of nums) {
    if (x > mid) {
      res += x - mid
    }
    if (res >= orders) return true
  }
  return false
}

// 输入：inventory = [2,8,4,10,6], orders = 20
// 输出：110