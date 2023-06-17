// Shortest Word

// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// -FUNDAMENTALS

function findShort(s){
    return s.split(" ").map(item => item.length).sort(function(a, b) { return a - b; })[0];
}