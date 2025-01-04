// here is importing chai
//expect
import { expect } from "chai";

describe("Basic Equality Test", function () {
  it("should check if a and b are equal", function () {
    let a = 1,
      b = 1;
    expect(a).to.be.equals(b, "a and b are not equal");
  });
  let a = 1,
    b = 1;
  expect(a).to.be.equals(b, "a and b are not equal");
  console.log("Test passed!");

    it("should check 2 object are equals", function () {

  //! expect - object/string/boolean
function myObj(){
  return{
    a: 100,
    b: 'Hello'
  }
}
x = new myObj(), y = new myObj();
expect(x).to.be.an('object')
});

  });
