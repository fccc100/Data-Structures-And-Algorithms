// 345. 反转字符串中的元音字母
// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let arr = s.split('');
  let l = 0;
  let r = arr.length - 1;

  while(l < r) {
    while(
      l < r &&
      arr[l] != 'a' &&
      arr[l] != 'e' &&
      arr[l] != 'i' &&
      arr[l] != 'o' &&
      arr[l] != 'u' &&
      arr[l] != 'A' &&
      arr[l] != 'E' &&
      arr[l] != 'I' &&
      arr[l] != 'O' &&
      arr[l] != 'U'
    ) {
      l++;
    }
    while(
      l < r &&
      arr[r] != 'a' &&
      arr[r] != 'e' &&
      arr[r] != 'i' &&
      arr[r] != 'o' &&
      arr[r] != 'u' &&
      arr[r] != 'A' &&
      arr[r] != 'E' &&
      arr[r] != 'I' &&
      arr[r] != 'O' &&
      arr[r] != 'U'
    ) {
      r--;
    }

    if (l >= r) {
      break;
    }

    swap(arr, l, r);
    l++;
    r--;
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}