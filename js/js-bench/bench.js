Deno.bench({
  name: "one second delay",
  fn: async () => await fetch("http://localhost:8000/1000"),
  bench: true,
});

Deno.bench({
  name: "two second delay",
  fn: async () => await fetch("http://localhost:8000/2000"),
  bench: true,
});