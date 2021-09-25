import { ADJECTIVES_PATH, ANIMALS_PATH } from "./config.ts";

const readJson = async (path: string) =>
  JSON.parse(await Deno.readTextFile(path));

const groupByFirstLetter = (wordCollection: string[]) =>
  wordCollection.reduce((result, word) => {
    const firstLetter = word.charAt(0);
    if (!result.has(firstLetter)) {
      result.set(firstLetter, []);
    }
    result.get(firstLetter)?.push(word);
    return result;
  }, new Map<string, string[]>());

const pickRandomly = (wordCollection: string[]) =>
  wordCollection[Math.floor(Math.random() * wordCollection.length)];

const findCommonLetters = (lettersA: string[], lettersB: string[]) => {
  return lettersA.reduce<string[]>((result, letter) => {
    if (lettersB.indexOf(letter) > -1) {
      result.push(letter);
    }
    return result;
  }, []);
};

const animals = groupByFirstLetter(await readJson(ANIMALS_PATH));
const adjectives = groupByFirstLetter(await readJson(ADJECTIVES_PATH));

const possibleLetters = findCommonLetters(
  [...adjectives.keys()],
  [...animals.keys()],
);

const findRandomAdjective = (letter: string) => {
  const wordCollection = adjectives.get(letter);
  return wordCollection ? pickRandomly(wordCollection) : null;
};

const findRandomAnimalName = (letter: string) => {
  const wordCollection = animals.get(letter);
  return wordCollection
    ? pickRandomly(wordCollection).split(" ").join("-")
    : null;
};

export const generateRandomAnimalName = (
  letter = pickRandomly(possibleLetters),
) => {
  const adjective = findRandomAdjective(letter);
  const animal = findRandomAnimalName(letter);

  return `${adjective} ${animal}`;
};
