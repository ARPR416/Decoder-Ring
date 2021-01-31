// Write your tests here!
const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitutionModule", () =>{
  it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () =>{
    const actual = substitutionModule("Hello World" , "zyx. ut$rqponm!kjihgfedcba");
    expect(actual).to.eql("$ oo! d!io.");  
    
  })
  it("Spaces should be maintained throughout.", () =>{
    const actual = substitutionModule("Hello World" , "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.eql("svool dliow");  
  
  })
  it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () =>{
    const actual = substitutionModule("Hello World" , "abcdefghijklmnopqrstuvwxy");
    expect(actual).to.be.false;
  })
  it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () =>{
    const actual = substitutionModule("Hello World" , "abcdefghijklmnopqrstuvwxya");
    expect(actual).to.be.false;
  })
})  