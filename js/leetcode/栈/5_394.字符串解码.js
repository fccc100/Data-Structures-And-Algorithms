// 394. 字符串解码
// 给定一个经过编码的字符串，返回它解码后的字符串。

// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

// 示例 1：
// 输入：s = "3[a]2[bc]"
// 输出："aaabcbc"

// "3[a2[c]]"

function decodeString(s) {

}

function decodeString(s) {
  // let numStack = [];
  // let charStack = [];
  // let res = '';
  // let end = false;

  // for (let i = 0; i < s.length; i++) {
  //   if (!isNaN(s[i])) {
  //     if (!end) {
  //       let top = numStack.length ? numStack[numStack.length - 1] : 0;
  //       numStack.push(top * 10 + Number(s[i]));
  //     } else {
  //       numStack.push(Number(s[i]));
  //       end = false;
  //     }
  //   } else {
  //     if (s[i] == ']') {
  //       let curStr = '';
  //       while(charStack.length && charStack[charStack.length - 1] != '[') {
  //         let char = charStack.pop();
  //         curStr = char + curStr;
  //       }
  //       charStack.pop();

  //       let sequence = numStack.pop();
  //       let repeatStr = ''
  //       for (let i = 0; i < sequence; i++) {
  //         repeatStr += curStr;
  //       }
  //       res += repeatStr;
  //     } else {
  //       charStack.push(s[i]);
  //       if (s[i] == '[') {
  //         end = true;
  //       }
  //     }
  //   }
  // }
  // return res;
}

function decodeString(s) {
  // let numStack = [];
  // let strStack = [];

  // let num = 0;
  // let str = '';

  // for (let i = 0; i < s.length; i++) {
  //   let char = s[i];
  //   if (char == '[') {
  //     numStack.push(num);
  //     strStack.push(str);
  //     num = 0;
  //     str = '';
  //   } else if (char == ']') {
  //     let temp = strStack[strStack.length - 1];
  //     let sequence = numStack[numStack.length - 1];

  //     for (let j = 0; j < sequence; j++) {
  //       temp += str;
  //     }
  //     str = temp;
  //   } else if (!isNaN(char)) {
  //     num = num * 10 + Number(char);
  //   } else {
  //     str += char;
  //   }
  // }
  // return str;
}