export class MyResponse {
  constructor() {
    this.options = {};
    this.options.headers = {};
  }

  withHeader(key, value) {
    this.options.headers[key] = value;
    return this;
  }

  withOption(key, value) {
    this.options[key] = value;
    return this;
  }

  withResponse(response) {
    this.response = response;
    return this;
  }

  respond() {
    return new Response(this.response, this.options);
  }
}
