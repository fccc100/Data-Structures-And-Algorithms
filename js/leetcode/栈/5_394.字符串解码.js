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

  /**
     * 双栈解法：
     * 准备两个栈，一个存放数字，一个存放字符串
     * 遍历字符串分4中情况
     * 一、如果是数字 将字符转成整型数字 注意数字不一定是个位 有可能是十位，百位等 所以digit = digit*10 + ch - '0';
     * 二、如果是字符 直接将字符放在临时字符串中
     * 三、如果是"[" 将临时数字和临时字符串入栈
     * 四、如果是"]" 将数字和字符串出栈 此时临时字符串res = 出栈字符串 + 出栈数字*res
     */
   public String decodeString(String s) {
    //创建数字栈，创建字符串栈 及临时数字和临时字符串
    Deque<Integer> stack_digit = new LinkedList<>();
    Deque<StringBuilder> stack_string = new LinkedList<>();
    int digit = 0;
    StringBuilder res = new StringBuilder();
    //遍历字符串 分4中情况
    for (int i = 0; i < s.length(); i++) {
        char ch = s.charAt(i);
        if (ch == '[') {
            //如果是"[" 将临时数字和临时字符串入栈
            stack_digit.push(digit);
            stack_string.push(res);
            digit = 0;
            res = new StringBuilder();
        }else if (ch == ']') {
            //如果是"]" 将数字和字符串出栈 此时临时字符串res = 出栈字符串 + 出栈数字*res
            StringBuilder temp = stack_string.poll();
            int count = stack_digit.poll();
            for (int j = 0; j < count; j++) {
                temp.append(res.toString());
            }
            res = temp;
        }else if (Character.isDigit(ch)) {
            //如果是数字 将字符转成整型数字 ch-‘0’。 注意数字不一定是个位 比如100[a] 所以digit要*10
            digit = digit*10 + ch - '0';
        }else {
            //如果是字符 直接将字符放在临时字符串中
            res.append(ch);
        }
    }
    return res.toString();
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