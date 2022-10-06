// 744. 寻找比目标字母大的最小字母
// 给你一个排序后的字符列表 letters ，列表中只包含小写英文字母。另给出一个目标字母 target，请你寻找在这一有序列表里比目标字母大的最小字母。

// 在比较时，字母是依序循环出现的。举个例子：

// 如果目标字母 target = 'z' 并且字符列表为 letters = ['a', 'b']，则答案返回 'a'
 
// 示例 1：
// 输入: letters = ["c", "f", "j"]，target = "a"
// 输出: "c"

// 二分查找
function nextGreatestLetter(letters, target) {
  let l = 0;
  let r = letters.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (letters[mid] === target) {
      l = mid + 1;
    } else if (letters[mid].charCodeAt() < target.charCodeAt()) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l >= letters.length ? letters[0] : letters[l];
};