/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/

function isBalancedBrackets(S) {
  let stack = [];
  let chars = S.split("");
  let c, top;
  for (let i = 0; i < chars.length; i++) {
    c = chars[i];
    if (stack.length === 0) {
      stack.push(c);
    } else {
      top = stack[stack.length - 1];
      if (
        (c === "}" && top === "{") ||
        (c === "]" && top === "[") ||
        (c === ")" && top === "(")
      ) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }

  return stack.length ? 0 : 1;
}

module.exports = isBalancedBrackets;
