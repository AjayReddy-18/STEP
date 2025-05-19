const handler = (request) => {
  const time = +request.url.split("/").at(-1);
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Response(`Output after ${time} ms!`));
    }, time);
  });

  return response;
};

const main = () => {
  Deno.serve({ port: 8000 }, handler);
};

main();
