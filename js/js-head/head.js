import { head } from "./src/headLib.js";
import { parseArgs } from "./src/parseArgsLib.js";

const display = (data) => {
  console.log(data);
};

const displayError = (error) => {
  console.error(error);
};

const main = (args = Deno.args) => {
  try {
    const parsedArgs = parseArgs(args);
    const data = head(parsedArgs);
    display(data);
    Deno.exitCode = 0;
  } catch (error) {
    displayError(error);
    Deno.exitCode = 1;
  }
  Deno.exit(Deno.exitCode);
};

main();
