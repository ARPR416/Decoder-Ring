// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // if there is no input, alphabet, or if input, alphabet isnt a string, or if the lenght of the alphabet isnt 26, return false 
    if (!alphabet || alphabet.length !== 26 || !input || (typeof alphabet !== 'string') || (typeof input !== 'string')) {
      return false;
    }
    // create a string of the original alphabet to loop through, split the string. 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // let the input of the alphabet be a user-defined object type
    const alphabetSet = new Set();
    // loop throuhg the indexes of the alphabet string
    for (let letter of alphabet) {
      // if the user defined object type doesnt have a letter, add a letter into the set. 
      if (!alphabetSet.has(letter)) {
        alphabetSet.add(letter);
      } else {
        return false;
      }
    }
    // create a variable that splits the input for the user defined alphabet.
    const alphabetArr = alphabet.split('');
    const result = [];
    // if encode, change the orginal alphabet to the user defined alphabet.
    if (encode) {
      input.toLowerCase().split(' ').forEach(word => {
        let encrypt = '';
        // split the user defined object by index/character
        word.split('').forEach(character => {
          // change index of user original alphabet to index of user defined alphabet
          const index = alphabetString.indexOf(character);
          encrypt += alphabetArr[index];
        });
        result.push(encrypt);
      });
    } else {
      // create a new variable of input with spaces removed. 
      const alphabetTest = input.split(' ').join('');
      // loop through index of new variable, return false if the variable does not have a character from input.
      for (let character of alphabetTest) {
        if (!alphabetSet.has(character)) {
          return false;
        }
      }
      
      input.toLowerCase().split(' ').forEach(word => {
        let decrypt = '';
        // change the defined alphabet to the original alphabet.
        word.split('').forEach(character => {
          // change index of user defined object to index of orginal alphabet
          const index = alphabetArr.indexOf(character);
          decrypt += alphabetString[index];
        });
        result.push(decrypt);
      });
    }
    return result.join(' ');
  }
  

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
