import { generateRandomAnimalName } from "./mod.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.108.0/testing/asserts.ts";

Deno.test("returns two words", () => {
  const result = generateRandomAnimalName();
  assert(typeof result === "string");
  assertEquals(result.split(" ").length, 2);
});

Deno.test("returns an alliteration", () => {
  const result = generateRandomAnimalName().split(" ");
  const firstLetter = result[0].charAt(0).toLowerCase();
  const secondLetter = result[1].charAt(0).toLowerCase();
  assertEquals(firstLetter, secondLetter);
});
