import { ADJECTIVES_PATH, ANIMALS_PATH } from "./config.ts";
import { generateRandomAnimalName } from "./generator.ts";

const animalsPermissionStatus = await Deno.permissions.request({
  name: "read",
  path: ANIMALS_PATH,
});
const adjectivesPermissionStatus = await Deno.permissions.request({
  name: "read",
  path: ADJECTIVES_PATH,
});

if (
  animalsPermissionStatus.state !== "granted" ||
  adjectivesPermissionStatus.state !== "granted"
) {
  console.log("Can't read dictionary file. (--allow-read)");
  Deno.exit(1);
}

if (import.meta.main) {
  console.log(generateRandomAnimalName(Deno.args[0]));
}
