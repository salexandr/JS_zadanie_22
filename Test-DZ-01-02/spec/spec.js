var app = require('../js/script.js');

describe("app", function() {
  it("test4", function() {
	  // prepare
	  var result;
	  
	  // act
	  result = app.power(2, 2);
	  
	  // assert
    expect(result).toBe(4);
  });
  
  it("test27", function() {
	  // prepare
	  var result;
	  
	  // act
	  result = app.power(3, 3);
	  
	  // assert
    expect(result).toBe(27);
  });
  
    it("test32", function() {
	  // prepare
	  var result;
	  
	  // act
	  result = app.power(2, 5);
	  
	  // assert
    expect(result).toBe(32);
  });
  
      it("test125", function() {
	  // prepare
	  var result;
	  
	  // act
	  result = app.power(5, 3);
	  
	  // assert
    expect(result).toBe(125);
  });
});

