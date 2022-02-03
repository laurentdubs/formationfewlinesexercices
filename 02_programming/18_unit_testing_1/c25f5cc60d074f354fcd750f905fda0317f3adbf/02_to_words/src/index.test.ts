import { toWords } from "./index";

test("Towords should be split to words and return an array without exclamation point ", () => {
    expect.assertions(1);
    
    const result = toWords("two, words"!);

    expect(result).toEqual(["two", "words"]);
})

test("Towords should be split to words and return an array without hyphen", () => {
    expect.assertions(1);

    const result = toWords("two-words");

    expect(result).toEqual(["two", "words"]);
})