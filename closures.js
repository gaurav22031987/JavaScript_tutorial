//inner function

function add(value1, value2) {
    function doAdd(operand1, operand2) {
      return operand1 + operand2;
    }
  
    return doAdd(value1, value2);
  }
  
  add(1, 2);
  //  3



  function add(value1) {
    return function doAdd(value2) {
      return value1 + value2;
    };
  }
  
  var increment = add(1);
  var foo = increment(2);
  // call foo will return 3. bcz foo is value not a function
  //console.dir(increment()) to check closure in scope.