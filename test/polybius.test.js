// Write your tests here!
const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;



  describe("polybiusModule()", () =>{
  it("You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.", () =>{
    const actual = polybiusModule("$ Dollar $");
    const expected = "414313131124";
    console.log(actual);
    expect(actual).to.include(expected);
    
    
  })
  it("When encoding, your output should still be a string.", () =>{
    let actual = polybiusModule("ABCD")
    expect(actual).to.be.a('string')
  })
  
  it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () =>{
    let actual = polybiusModule("11 21 31 41512", false);
    expect(actual).to.be.false;
  })
  it("Spaces should be maintained throughout.", () =>{
    const actual = polybiusModule("How Are You");
    expect(actual).to.eql("324325 112451 454354");  
  })

  it("Capital letters can be ignored.",() =>{
    let actual = polybiusModule("HELLO");
    expect(actual).to.eql("3251131343");
  })

  it("The letters 'I' and 'J' share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.", () =>{
    let actual = polybiusModule("42 42", false);
    expect(actual).to.eql("(i/j) (i/j)");    
  })
  
})

