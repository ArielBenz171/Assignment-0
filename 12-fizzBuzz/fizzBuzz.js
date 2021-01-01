/* Given a start and end value, the function places the values in an array and replaces the values in
   several scenarios:
   If the value is divisible by 3, replace the value with "Fizz".
   If the value is divisible by 5, replace the value with "Buzz".
   If the value is divisible by 3 & 5, replace the value with "FizzBuzz". */

function fizzBuzz(start, end) {
	
	var arr = []; // Defines arr as an array function

	for (var i = 0; i <= (end - start); i++){ // A loop running end - start - 1 times 
		
		arr[i] = start + i; // Sets the value of arr's position at i to the start value plus i 

		if (arr[i] % 15 == 0){ // Checks if the value is divisible by both 3 and 5
			arr[i] = "FizzBuzz"; // Sets the value of arr's position at i to "FizzBuzz"
		}

		else if (arr[i] % 5 == 0){ // Checks if the value is divisible by 5
			arr[i] = "Buzz"; // Sets the value of arr's position at i to "Buzz"
		}

		else if (arr[i] % 3 == 0){ // Checks if the value is divisible by 3
			arr[i] = "Fizz"; // Sets the value of arr's position at i to "Fizz"
		}

		else{
			arr[i] = start + i; // Keeps the value the same
		}
	}

	return arr; // Returns the FizzBuzz array

}

/* Output:
     the fizzBuzz(start, end) function
    √ should return an array
    √ should return an array whose length is equivalent to the difference between the `end` and `start` values plus one
    √ should return an array whose contents adhere to the conditions of fizzBuzz
    √ should pass auxillary test cases


  4 passing (63ms)
*/

// Do not edit this line;
module.exports = fizzBuzz;
