import { head } from "../src/headLib.js";
import { files } from "../data/fakeFiles.js";

describe("test head()", () => {
  it("should return first 10 lines of file content", () => {
    assertEquals(
      head({ file: "20_lines.txt", option: "n", count: 10 }),
      "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
    );
  });
});
