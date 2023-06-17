// Insert dashes

// DESCRIPTION:
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// - STRINGS,
// - ARRAYS, 
// - FUNDAMENTALS

function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}


function insertDash(num) {
    var numArr = num.toString().split('');
    var len = numArr.length;
    var result = [];
    
    for (var i = 0; i < len; i++) {
      result.push(numArr[i]);
      if (numArr[i] % 2 != 0) {
          if ((i+1 < len) && (numArr[i+1] % 2 != 0)) {
              result.push("-");
          }
      }
    }  
    return result.join("");
}