class Client {
  constructor(port, username, password) {
    this.port = port;
    this.username = username;
    this.password = password;
    this.stdin = Deno.stdin;
    this.reader = this.stdin.readable.getReader();
  }

  decode(buffer, size) {
    const decoder = new TextDecoder();

    return decoder.decode(buffer.slice(0, size)).trim();
  }

  receive() {
    const buffer = new Uint8Array(1024);

    return this.connection.read(buffer).then((size) => {
      const message = this.decode(buffer, size);
      return { message, size };
    });
  }

  write() {
    this.reader
      .read()
      .then((message) => this.connection.write(message.value))
      .then(() => this.write());
  }

  printMessage(message) {
    console.log(message);
    return message;
  }

  close() {
    console.log("Connection closed!");
  }

  handleMessage(message, size) {
    if (size === null) {
      this.close();
      Deno.exit(0);
    }

    this.printMessage(message);
  }

  read() {
    this.receive()
      .then(({ message, size }) => this.handleMessage(message, size))
      .then(() => this.read());
  }

  validate(message) {
    return message === "true";
  }

  async connect() {
    this.connection = await Deno.connect({ port: 8000 });
    this.connection.write(
      new TextEncoder().encode(`${this.username},${this.password}`)
    );

    const response = await this.receive();
    const isValidUser = this.validate(response.message);

    if (!isValidUser) {
      console.log("You don't have access!");
      this.close();
      Deno.exit(1);
    }

    this.read();
    this.write();
  }
}

new Client(8000, ...Deno.args).connect();
