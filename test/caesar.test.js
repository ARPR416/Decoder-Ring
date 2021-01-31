// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

  
describe("caesarModule()",() =>{  
         
  it("Return false if shift value is not present, equal to 0, less than -25, or greater than 25.", () =>{
    let actual = caesarModule("Hello World !", 26);
    console.log(actual);
    expect(actual).to.false;
  })
  it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () =>{
  const actual = caesarModule("hello ?!?!23", 3);
  
  expect(actual).to.eql("khoor ?!?!23");  
  
  })
  
  it("Capital letters can be ignored.", () =>{
    let actual = caesarModule("HELLO WORLD !", 3);
    let expected = caesarModule("hello world !", 3);
    expect(actual).to.eql(expected);

  })
  it("If a letter is shifted so that it goes 'off' the alphabet (e.g. a shift of 3 on the letter 'z'), it should wrap around to the front of the alphabet (e.g. 'z' becomes 'c').", () =>{
    let actual = caesarModule("aaaa" , -1);
    expect(actual).to.include("zzzz");
  })
})