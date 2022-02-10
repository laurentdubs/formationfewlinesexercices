import { sentenceJoiner } from './sentenceJoiner';
import { sentenceSplitter } from './sentenceSplitter';


export const context = (sentence: string): string => {
  // Code your function for context here
  const arrayWords = sentenceSplitter(sentence);

  const Filteredarray = arrayWords.filter((word) => !["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(word[0]));
  
  const result = sentenceJoiner(Filteredarray);
  return result;
};
