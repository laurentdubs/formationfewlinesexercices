import { getRandomFace } from "./random-face";

function headOrTail(head: string, tail: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (getRandomFace() === head || tail) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
