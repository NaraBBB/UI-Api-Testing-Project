



var assert = require("assert");
describe("Mathematical Operations - Test Suite", function () {
  var a = 10;
  var b = 10;
  it("2 variable-ийг нэмэх үйлдэл ", function () {
    var c = a + b;

    assert.equal(c, 15);
  });

  it("2 variable-ийг xacax үйлдэл ", function () {
    var c = a - b;

    assert.equal(c, 0);
  });

  it("2 variable-ийг үржих үйлдэл ", function () {
    var c = a * b;

    assert.equal(c, 100);
  });

  it("2 variable-ийг хуваах үйлдэл ", function () {
    var c = a / b;
    assert.equal(c, 1);
  });

  it("This is a test for Pending Test"); // PENDING TEST DOES NOT HAVE CALLBACK FUNCTIONS
});


