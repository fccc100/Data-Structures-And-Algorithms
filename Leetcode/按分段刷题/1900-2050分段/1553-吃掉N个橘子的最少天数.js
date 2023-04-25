/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  let map = new Map()
  function f(n) {
    if (n == 0) return 0
    if (n == 1) return 1

    if (map.has(n)) {
      return map.get(n)
    }

    let res = Math.min(minDays(n >> 1) + n % 2 + 1, minDays(Math.floor(n / 3)) + n % 3 + 1)
    map.set(n, res)
    return res
  }

  return f(n)
};