// 1. The receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }

  // 2. The returnsANamedFunction function
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }

  // 3. The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function () {
      console.log("This is an anonymous function.");
    };
  }

  // Testing the functions
  // For the first function, let's pass a simple callback
  receivesAFunction(() => console.log("Callback function called."));

  // For the second function, let's assign the returned function to a variable and call it
  const namedFunc = returnsANamedFunction();
  namedFunc();

  // For the third function, let's assign the returned anonymous function to a variable and call it
  const anonymousFunc = returnsAnAnonymousFunction();
  anonymousFunc();