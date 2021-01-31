// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    // return false if there are no inputs
    if (!input) {
      return false;
    }
    let output = "";
    let numbers = [];
    // create an alphabet array with the position of each letter as an object
    const alphabet = [
      { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
      { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
      { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
      { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
      { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
    ];
   // loop through input to locate letter in input
   for (let i = 0; i < input.length; i ++) {
     let letter = input[i];
     // loop through alphabet to locate letter in the char of alphabet.
     for (let j = 0; j < alphabet.length; j ++) {
      let char = alphabet[j].char;
      let pos = alphabet[j].pos; 
      let numbers =[];
      if (encode) {
        // if lower case letter i is equal to char j, return pos j
        if (letter.toLowerCase() == char){
          output += pos;
          // if a space exist, include the space.
        } else if (letter[j] == " ") {
          output += letter;
          // if letter i does not equal any char j, return no space
        } else {
          output += "";
        }
       }
      }
     }
     if (!encode) {
       // if input lenght is not even, return false
      if (input.split(' ').join('').length % 2 !== 0) return false;
      input.split(' ').forEach(decryptedWord => {
        // pull input by groups of two's, exlcuding spaces.
        decryptedWord.match(/\d{1,2}/g).forEach(num => {
          if (parseInt(num) === 42) {
            output += `(i/j)`;
          } else {
            alphabet.forEach(match => parseInt(num) === match.pos ? output += match.char : output);
          }
        });
        numbers.push(output);
        output = '';
      });
      output = numbers.join(' ');
    }
   
   return output; 
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
