// Given nums, the function checks the amount of even numbers in nums

function sumOfAllEvenNumbers(nums) {
	
	var x = 0; //Defines x as a function and it's given the value 0

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		if(nums[i] % 2 == 0){ // Checks if the value at nums' slot is even
			x += 1; // Adds 1 to x
		}
	}
	return x; // Returns the amount of even numsbers in nums
}

/* Output:
     the sumOfAllEvenNumbers(nums) function
    √ should return a finite value
    √ should return a value that indicates the total amount of numbers that are even
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (35ms)
*/

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
