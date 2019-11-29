const isBalancedBrackets = require("./balancedBrackets");

describe("it should return 1 when is balanced", () => {
  test('S = ""', () => {
    const S = "";
    expect(isBalancedBrackets(S)).toEqual(1);
  });
  test('S = "()"', () => {
    const S = "()";
    expect(isBalancedBrackets(S)).toEqual(1);
  });

  test('S = "{[()()]}"', () => {
    const S = "{[()()]}";
    expect(isBalancedBrackets(S)).toEqual(1);
  });

  test('S = "{[()]}"', () => {
    const S = "{[()]}";
    expect(isBalancedBrackets(S)).toEqual(1);
  });

  test('S = "{[()()]}"', () => {
    const S = "{[()()]}";
    expect(isBalancedBrackets(S)).toEqual(1);
  });

  test('S = "{{[[(())]]}}"', () => {
    const S = "{{[[(())]]}}";
    expect(isBalancedBrackets(S)).toEqual(1);
  });
});

describe("it should return 0 when is not balanced", () => {
  test('S = "(("', () => {
    const S = "((";
    expect(isBalancedBrackets(S)).toEqual(0);
  });

  test('S = "([)()]"', () => {
    const S = "([)()]";
    expect(isBalancedBrackets(S)).toEqual(0);
  });

  test('S = "{[(]}"', () => {
    const S = "{[(]}";
    expect(isBalancedBrackets(S)).toEqual(0);
  });

  test('S = "{[(])}"', () => {
    const S = "{[(])}";
    expect(isBalancedBrackets(S)).toEqual(0);
  });

  test('S = "{{[[(()]]}}"', () => {
    const S = "{{[[(()]]}}";
    expect(isBalancedBrackets(S)).toEqual(0);
  });
});
