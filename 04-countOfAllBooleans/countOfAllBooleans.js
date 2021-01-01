// Given var arr, the output will be the amount of times a boolean value is used.

function countOfAllBooleans(arr) {

	var x = 0; // Defines x as a function and gives it the value 0
	
	for (var i = 0; i < arr.length; i++){ // A loop running arr's length -1 times
	  if(typeof arr[i] == "boolean"){ // Checking if the type of the array slot is a boolean
		  x += 1; // If it's true, the function will add 1 to x
	  }
	}
	
	return x; // Returns the value of how many booleans are in arr
}

/* Output:
     the countOfAllBooleans(arr) function
    √ should return a finite value
    √ should return a value that indicates the total amount of boolean values in the input array
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (35ms)
*/

// Do not edit this line;
module.exports = countOfAllBooleans;
