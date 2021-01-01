// Given args, the functions returns the product of all values in args 

function productOfAnyAmountOfNumbers(...args) {
  
	var answer = 1; // Defines answer as a function and gives it the value 1

	for(var i = 0; i < args.length; i++){ // A loop running args' length - 1
		answer = answer * args[i]; // Multiplies answer by the new args value
	}

	return answer; // Returns the product of args
	
}

/* Output:
     the productOfAnyAmountOfNumbers(...args) function
    √ should return a finite value
    √ should be able to take in an indefinite amount of arguments
    √ should return the product of all of the numbers that were passed in as arguments
    √ should pass auxillary test cases


  4 passing (43ms)
*/

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
