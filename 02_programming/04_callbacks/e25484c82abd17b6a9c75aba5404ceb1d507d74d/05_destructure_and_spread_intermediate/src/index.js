// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

function formatStorage(storageHell) {
  // Code your function here
  return[1,2,3,4,5,6,7,8,9];
}
// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
// console.log(formatStorage(storageHell));
console.log(formatStorage(storageHell));
// Don't modify this, it is for the tests.
module.exports = formatStorage;
