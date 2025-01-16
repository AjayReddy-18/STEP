import testcases from './testcases.json' with {type: 'json'};

const groupTemplate = (group) => `describe("${group}", () => {`;

const testTemplate = (description, input, expected, fn) => {
  return `  test("${description}", () => {
    assertEquals(${fn}(${input}), ${expected});
  });`;
};

const generateGroupTests = (groupName, group) => {
  const code = [groupTemplate(groupName)];

  code.push(
    group.map(({ description, input, expected, fn }) => {
      return `${testTemplate(description, input, expected, fn)}`;
    })
  );

  code.push("})");

  return code.flat().join("\n");
};

const main = (testcases, path = "./test.js") => {
  const groups = Object.keys(testcases.groups);

  const code = groups.map((group) =>
    generateGroupTests(group, testcases.groups[group])
  );

  const imports = testcases.imports;
  code.unshift(imports);

  Deno.writeTextFileSync(path, code.join("\n\n"));
};

main(testcases);
