# random-animal-name-generator

It's a random animal name generator!  
Originally from https://github.com/adzialocha/random-animal-name-generator

Made in Deno

```ts
  import { generateRandomAnimalName } from "https://raw.githubusercontent.com/lsagetlethias/random-animal-name-generator/main/mod.ts"
  const animalName = generateRandomAnimalName();
  const animalNameStartingWithS = generateRandomAnimalName("s");
  console.log(animalName);
  console.log(animalNameStartingWithS);
```

With funny animal names!

```
Geological gnu
Topazine toad
Overluxurious okapi
Easternmost eel
Unagrarian urus
Zombified zebrafinch
Dull dungbeetle
Jumping jaeger
Controversial chimneyswift
Fervid flies
Ethologic eidolonhelvum
Matronal mite
Allied achillestang
Palaeobiologic pinkriverdolphin
Glossophobic goldfish
Qualified queenconch
Exuberant eland
Timely tasmaniantiger
```

## Development

Clone the repository and install all dependencies:

```
git clone git@github.com:lsagetlethias/random-animal-name-generator.git
cd random-animal-name-generator
deno test -A test.ts
```
