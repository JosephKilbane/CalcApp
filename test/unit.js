let chai = require("chai");
let logic = require("../logic");

suite("Test coin flip", function() {

  test("Test the coin flips properly", function() {
    // Initialise a counter.
    let counter = 0;

    for (let i=0; i<100; i++) {
      // Flip the coin.
      let flip = logic.flipCoin();

      // Test return type.
      chai.assert.isBoolean(flip, "Should be a Boolean");

      if (flip) {
        counter++;
      }
    }

    chai.assert.approximately(50, counter, 10);
  });

});

suite("add numbers", function() {

  test("add properly", function() {
    // Initialise a counter.
  
      // Flip the coin.
      let ans = logic.addNumbers(1,1);

      // Test return type.
      chai.assert.isEqual(ans, 2);


  });

});