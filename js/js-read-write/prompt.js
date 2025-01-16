const main = () => {
  const filePath = Deno.args[0];
  const message = prompt("Enter your message:");

  Deno.writeTextFileSync(filePath, message);
};

main();