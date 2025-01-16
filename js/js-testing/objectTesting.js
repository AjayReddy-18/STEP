const areEqual = (lhs, rhs) => {
  if (typeof lhs !== "object") return Object.is(lhs, rhs);

  const lhsKeys = Object.keys(lhs);
  const rhsKeys = Object.keys(rhs);

  if (lhsKeys.length !== rhsKeys.length) return false;
  
  return lhsKeys.every((key) => key in rhs && areEqual(lhs[key], rhs[key]));
}

const runTest = (testCase) => {
  const actual = testCase.fn(...testCase.args);
  const STATUS = areEqual(actual, testCase.expected) ? "PASS" : "FAIL";
  return { STATUS, ...testCase, actual };
}

export const testAll = (testCases) => {
  const allCases = testCases.map((testCase) => runTest(testCase));
  const passedCases = allCases.filter(({ STATUS }) => STATUS === "PASS");
  const failedCases = allCases.filter(({ STATUS }) => STATUS === "FAIL");
  
  return { passedCases, failedCases, allCases };
};
