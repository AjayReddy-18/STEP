import { createHandler } from "./app.js";

const main = () => {
  Deno.serve({ port: 8000 }, createHandler());
};

main();
