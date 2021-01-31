// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6



const caesarModule = (function () {
  // you can add any code you want within this function scope  

  function caesar(input, shift, encode = true) {
    // your solution code here
    let a
    //return false if shift value is not present, equal to 0, greater than 25, or less than -25. 
    if(!shift || shift == 0 || shift < -25 || shift > 25){
      return false;
    }
    //make an output variable
    let output = "";
    //go through each character of input to encode
    for (let i = 0; i < input.length; i++) {
      // handle uppercase letters by changing to lower case
      let code = input.toLowerCase().charCodeAt(i);
      let index = ""; 
      if (encode) { 
        if (code >= 97 && code <= 122) {
          // create variable of shift + character code
          index = code + shift; 
          // if index goes after letter z, substract by length of alphabet
          if (index > 122) {
            output += String.fromCharCode(index - 26);
            // if index goes before letter a, add the length of alphabet
          } else if (index < 97) {
            output += String.fromCharCode(index + 26);
          } else {
            output += String.fromCharCode(index)
          }
          // if its not a letter, let it through
        } else {
          output += input.charAt(i);
       }
      } else {
          // create variable of shift - character code
          index = code - shift; 
          if (code >= 97 && code <= 122) {
            // if index goes after letter z, substract by length of alphabet
            if (index > 122) {
            output += String.fromCharCode(index - 26);
            // if index goes before letter a, add the length of alphabet
            } else if (index < 97) {
              output += String.fromCharCode(index + 26);
            } else {
              output += String.fromCharCode(index)
            }
          // its not a letter, let it through
        } else {
          output += input.charAt(i);
        }
      }
    } 
    return output;
  }
  

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
