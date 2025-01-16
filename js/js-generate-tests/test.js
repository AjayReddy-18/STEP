import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals} from "jsr:@std/assert";

describe("even numbers", () => {
  test("zero", () => {
    assertEquals(square(0), 0);
  });
  test("two", () => {
    assertEquals(square(2), 4);
  });
  test("four", () => {
    assertEquals(square(4), 16);
  });
})

describe("odd numbers", () => {
  test("one", () => {
    assertEquals(square(1), 1);
  });
  test("three", () => {
    assertEquals(square(3), 9);
  });
  test("five", () => {
    assertEquals(square(5), 25);
  });
})