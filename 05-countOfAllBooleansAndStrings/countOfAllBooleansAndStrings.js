// Given arr, counts the amount of booleans and string in arr.

function countOfAllBooleansAndStrings(arr) {
	
	var x = 0; // Defines x as a function and sets it's value as 0
	
	for (var i = 0; i < arr.length; i++){ // A loop running arr's length - 1 times 
		// Checking if arr slot is either a boolean or string
		if(typeof arr[i] == "boolean" || typeof arr[i] == "string"){ 
			x += 1; // Add 1 to x
		}
	}

	return x; // Returns the amount of booleans and strings in arr
}

/* Output:
     the countOfAllBooleansAndStrings(arr) function
    √ should return a finite value
    √ should return a value that indicates the total amount of boolean and string values in the input array
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (39ms)
*/

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
