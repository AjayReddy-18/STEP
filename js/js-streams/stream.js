const oStream = await Deno.open("output.txt", { write: true, create: true });

const words = await Deno.open("words.txt");

const stdout = Deno.stdout;

const distributeChunks = async () => {
  const fWriter = oStream.writable.getWriter();
  const cWriter = stdout.writable.getWriter();

  let i = 0;
  for await (const chunk of words.readable) {
    const writer = i % 2 === 0 ? fWriter : cWriter;
  
    await writer.write(chunk);
    i++;
  }
};

distributeChunks();
