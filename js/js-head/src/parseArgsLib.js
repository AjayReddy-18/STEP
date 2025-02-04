const errorFormat = (type, token) => {
  return { error: { type, token } };
};

const isValidOption = (candidate) => ["-n", "-c"].includes(candidate);

const isValidCount = (candidate) => +candidate > 0;

const validateTokens = (option, count) => {
  if (!isValidOption(option)) {
    return errorFormat("invalid option", option);
  }

  if (!isValidCount(count)) {
    return errorFormat("invalid count", count);
  }
};

const processor = ([...elements]) => {
  return {
    next: () => elements.shift(),
  };
};

export const parseArgs = (args) => {
  if (args.length === 0) return errorFormat("file expected", "head");

  const tokens = processor(args);
  const parsedArgs = { option: "n", count: 10 };

  const currentToken = tokens.next();

  if (currentToken[0] !== "-") {
    return { ...parsedArgs, file: currentToken };
  }

  const option = currentToken.slice(0, 2);
  const count = currentToken.slice(2) || tokens.next();

  const error = validateTokens(option, count);

  if (error) return error;

  return { option: option[1], count: +count, file: tokens.next() };
};

// console.log(parseArgs(["-n", "file.txt" , "20"]));
