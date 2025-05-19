import { MyResponse } from "./response.js";

const logRequest = (request) => {
  console.log(request);
  console.log(new URL(request.url));
};

const respond = (response, options) => new Response(response, options);

const serveNotFound = (request) => {
  return new MyResponse()
    .withResponse("NOT FOUND")
    .withOption("status", 404)
    .withHeader("content-type", "text/plain")
    .respond();
};

const serveResource = async (request, path, type) => {
  const response = await Deno.readFile(path);

  return respond(response, { headers: { "content-type": type } });
};

const addName = async (request, names) => {
  const formData = await request.formData();
  const name = formData.get("name");
  names.push(name);
  console.log(names);

  return respond("Name added successfully", {
    status: 201,
    headers: { "content-type": "text/plain" },
  });
};

const serveNames = (request, names) => {
  const response = JSON.stringify(names, null, 2);

  return respond(response, { headers: { "content-type": "application/json" } });
};

function handler(request) {
  logRequest(request);

  const url = new URL(request.url);

  if (url.pathname === "/")
    return serveResource(request, "./index.html", "text/html");

  if (url.pathname === "/addName") return addName(request, this.names);

  if (url.pathname === "/index.js")
    return serveResource(request, "./index.js", "application/javascript");

  if (url.pathname === "/getNames") return serveNames(request, this.names);

  return serveNotFound(request);
}

Deno.serve(
  {
    onListen({ port }) {
      console.log(`Server started on ${port}`);
    },
    port: 8000,
  },
  handler.bind({ names: [] })
);
