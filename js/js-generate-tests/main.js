import data from './testcases.json' with {type: 'json'};

const groupTemplate = (group, tabs = "") => {
  return `${tabs}describe("${group}", () => {`;
};

const testTemplate = (description, input, expected, fn, tabs) => {
  return `${tabs}test("${description}", () => {
${tabs+'\t'}assertEquals(${fn}(${input}), ${expected});
${tabs}});`;
};

const generateTest = (fn, testcase, tabs) => {
  const { description, input, expected } = testcase;
  return testTemplate(description, input, expected, fn, tabs);
};

const generateGroupTests = (fn, groups, nesting) => {
  const groupNames = Object.keys(groups);
  const tabs = "\t".repeat(nesting);

  const code = groupNames.map((groupName) => {
    const group = groups[groupName];

    if (!Array.isArray(group))
      return generateGroupTests(fn, group, nesting + 1);

    const tests = group
      .map((testcase) => generateTest(fn, testcase, tabs + "\t"))
      .join("\n\n");

    const groupCode = [groupTemplate(groupName, tabs), tests, `${tabs}});`];

    return groupCode.join("\n");
  });

  return code.join("\n\n");
};

const generateFunTests = (funName, groups) => {
  const code = [generateGroupTests(funName, groups, 1)];
  code.unshift(groupTemplate(funName));
  code.push("});");

  return code.join("\n");
};

const main = (data) => {
  const imports = data.meta.imports.join("\n");
  const funs = Object.keys(data.testcases);

  const code = funs.map((fun) => generateFunTests(fun, data.testcases[fun]));
  code.unshift(imports);

  Deno.writeTextFileSync(data.meta.path, code.join('\n\n'));
  return code.join("\n\n");
};

console.log(main(data));
