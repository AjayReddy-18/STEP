const extractUserData = async (request) => {
  const fd = await request.formData();
  return { username: fd.get("username"), age: fd.get("age") };
};

const createCookies = ({ username: user, age }) => {
  const usernameCookie = `username=${user}; Max-Age=1000`;
  const ageCookie = `age=${age}; Max-Age=2000`;

  return { usernameCookie, ageCookie };
};

const cookieHandler = async (request) => {
  const data = await extractUserData(request);
  const cookies = createCookies(data);

  const headers = new Headers();
  headers.append("Set-Cookie", cookies.usernameCookie);
  headers.append("Set-Cookie", cookies.ageCookie);

  return new Response(`Hi ${data.username}`, {
    headers,
  });
};

const serveHome = async (request) => {
  const response = await Deno.readFile("./index.html");

  return new Response(response, { headers: { "content-type": "text/html" } });
};

export const createHandler = () => {
  return (request) => {
    const url = new URL(request.url);
    console.log(request.headers);

    if (url.pathname === "/") return serveHome(request);

    return cookieHandler(request);
  };
};
