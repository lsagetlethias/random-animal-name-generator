/// <reference path="./deploy.d.ts" />
import { generateRandomAnimalName } from "./generator.ts";

addEventListener("fetch", (event) =>
  event.respondWith(
    new Response(
      generateRandomAnimalName(
        new URL(event.request.url).searchParams.get("letter") ??
          void 0,
      ),
      {
        headers: { "content-type": "text/plain" },
      },
    ),
  ));
