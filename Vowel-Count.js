// Vowel Count

// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// -STRINGS,
// -FUNDAMENTALS

function getCount(str) {
    let count = str.match(/[aeiou]/gi);
    return count === null ? 0 : count.length;
}


function getCount(str) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let letter of str) {
      if (vowels.includes(letter)) {
          count++;
      }
  }
  return count;
}