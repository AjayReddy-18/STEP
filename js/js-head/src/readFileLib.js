export const lines = (text, count) =>
  text.split("\n").slice(0, count).join("\n");

export const chars = (text, count) => text.slice(0, count);

export const readFile = (filename) => {
  try {
    const content = Deno.readTextFileSync(filename);
    return { fileInfo: { content, filename } };
  } catch {
    return { error: { type: "file not found", token: `${filename}` } };
  }
};
