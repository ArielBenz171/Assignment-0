// Given nums, the function checks the amount of variables in nums are equal to it's index value

function countOfAllIndexMatchingNumbers(nums) {
	
	var x = 0; // Defines x as a function and is given the value 0

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		if(nums[i] == i){ // Checking if nums' slot is the same as the index value
			x += 1; // Adds 1 to x
		}
	}

	return x; // Returns the amount of nums' values that are equal to their index number
}

/* Output:
     the countOfAllIndexMatchingNumbers(nums) function
    √ should return a finite value
    √ should return a value that indicates the total amount of numbers that are equivalent to their index value
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (43ms)
*/

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
