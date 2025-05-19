import users from "./users.json" with {type: "json"};

class Server {
  constructor(port, users) {
    this.port = port;
    this.users = users;
    this.listener = Deno.listen({ port: this.port });
    this.connections = [];
  }

  printMessage(message) {
    console.log(message);
    return message;
  }

  closeConnection(connection) {
    connection.close();
    connection.active = false;
  }

  encode(message) {
    const encoder = new TextEncoder();
    return encoder.encode(message);
  }

  send(connection, message) {
    connection.write(this.encode(message));
  }

  acknowledge(connection, message) {
    if (message.toLowerCase() === "exit") {
      this.send(connection, "Bye!\n");
      this.closeConnection(connection);
      return;
    }

    this.send(connection, `Server > received: ${message}\n`);
  }

  decode(buffer, size) {
    return new TextDecoder().decode(buffer.slice(0, size)).trim();
  }

  receive(connection) {
    const buffer = new Uint8Array(1024);
    return connection.read(buffer).then((size) => this.decode(buffer, size))
  }

  handleConnection(connection) {
    if (!connection.active) return;
    
    this.receive(connection)
    .then((message) => this.printMessage(message))
    .then((message) => this.acknowledge(connection, message))
    .then(() => this.handleConnection(connection));
  }

  isValidUser(username, password) {
    return this.users[username] && this.users[username].password === password;
  }

  async validateUser(connection) {
    const credentials = await this.receive(connection);
    const [username, password] = credentials.split(',');

    if (!this.isValidUser(username, password)) {
      this.send(connection, 'false')
      this.closeConnection(connection);
      return;
    }

    this.send(connection, 'true');
    this.establishConnection(username, connection);
    return username;
  }

  establishConnection(username, connection) {
    connection.active = true;
    this.connections[username] = connection;
  }

  async listen() {
    for await (const connection of this.listener) {
      await this.validateUser(connection);
      this.handleConnection(connection);
    }
  }
}

const main = () => {
  new Server(8000, users).listen();
};

main();
