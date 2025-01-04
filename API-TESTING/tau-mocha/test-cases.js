// TEST SUITE - MATHEMATICAL OPERATIONS

//TEST CASES
//1. ADDITION
//2. SUBSTRACION
//3. MULTIPLICATION
//4. DIVISION

//TEST HIIHIIN HAMGIIN CHUHAL ZUIL NI ASSERSION END BID NODE-ND UURT NI BUILD BDAG ASSERTION-G HEREGLENE

var assert = require('assert');
describe('Mathematical Operations - Test Suite', function(){

it('2 variable-ийг нэмэх үйлдэл ' , function(){

var a = 10
var b = 10

var c = a+b;

assert.equal(c,20);
});


it('2 variable-ийг xacax үйлдэл ' , function(){
    var a = 10
    var b = 10
    
    var c = a - b;

    assert.equal(c,0);
});

it('2 variable-ийг үржих үйлдэл ' , function(){
    var a = 10
    var b = 10
    
    var c = a * b;

    assert.equal(c,100);
});

it('2 variable-ийг хуваах үйлдэл ' , function(){
    var a = 10
    var b = 10
    
    var c = a / b;
assert.equal(c,1);
});
})
