// Find the capitals

// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// - STRINGS,
// - ARRAYS,
// - FUNDAMENTALS

var capitals = function (word) {
    const capsArr = word.match(/[A-Z]/g);
    return capsArr.map( x => word.indexOf(x)); 
};