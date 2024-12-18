function isFailing(args) {
  const [functionName, parameters, expected] = args;
  const actual = functionName(...parameters);

  return actual !== expected;
}

function testAll() {
  testCases = [
    [functionName, [parameters], expected],
    [functionName, [parameters], expected]
  ]

  return testCases.filter(isFailing);
}