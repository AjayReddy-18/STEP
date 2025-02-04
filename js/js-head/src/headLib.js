import { chars, lines, readFile } from "./readFileLib.js";

const options = {
  n: lines,
  c: chars,
};

export const head = ({ file, option, count }) => {
  const { error, fileInfo } = readFile(file);
  if (error) throw { error };
  return options[option](fileInfo.content, count);
};
