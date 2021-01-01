// Givens nums, checks the amount of odd numbers in nums.

function sumOfAllOddNumbers(nums) {
	
	var x = 0; // Defines x as a function and it's given the value 0

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		if(nums[i] % 2 == 1){ // Checks if the value at nums' slot is odd
			x += 1; // Adds 1 to x
		}
	}

	return x; // Returns the amount of odd numbers in nums
}

/* Output:
     the sumOfAllOddNumbers(nums) function
    √ should return a finite value
    √ should return a value that indicates the total amount of numbers that are odd
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (53ms)
*/

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
