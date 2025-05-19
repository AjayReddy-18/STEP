import users from "./users.json" with {type: "json"}

const logRequest = (request) => {
  console.log(`${request.method} ${request.url}`);
};

const createOptions = (request) => {
  return { headers: { "content-type": "text/html" } };
};

const respond = (request, response) => {
  const options = createOptions(request);

  return new Response(response, options);
};

const serveLoginPage = async (request) => {
  const response = await Deno.readFile("./login.html");

  return respond(request, response);
};

const handleUser = async (username, password) => {
  if (username in users) return;

  users[username] = password;
  const usersData = JSON.stringify(users);
  await Deno.writeTextFile("users.json", usersData);
};

const serveHomePage = async (request) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  await handleUser(username, password);

  return new Response("Redirecting...", {
    status: 307,
    headers: { location: "/users.json", "content-type": "text/plain" },
  });
  // const response = `<h1>Hello ${username}</h1>`;

  // return respond(request, response);
};

const serveNotFoundPage = (request) => {
  const response = `<h1>NOT FOUND</h1>`;

  return respond(request, response);
};

const serveUsersData = (request) => {
  return new Response(JSON.stringify(users), {
    headers: { "content-type": "application/json" },
  });
};

const handler = (request) => {
  logRequest(request);
  const url = new URL(request.url);

  switch (url.pathname) {
    case "/login.html":
      return serveLoginPage(request);
    case "/home.html":
      return serveHomePage(request);
    case "/users.json":
      return serveUsersData(request);
    default:
      return serveNotFoundPage(request);
  }
};

const startSever = (port, handler) => {
  Deno.serve({ port }, handler);
};

const main = () => {
  startSever(8000, handler);
};

main();
