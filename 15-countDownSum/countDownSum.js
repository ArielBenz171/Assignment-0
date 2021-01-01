// Given num, the function recusively sums all of the values from num to 1 by subtracting num - 1

class MySolution {
  
	countDownSum(num) {
	
		if(num <= 1){ // Checks if num is less than or equal to num 
			return num; // Returns num
		}	
	
	
		else{ // If num is greater than 1
			return num + this.countDownSum(num-1); // Returns nums + (num - 1)
		}
  	}
}

/* Output:
     the countDownSum(num) function
    √ should return a number
    √ should return the sum of all numbers from `num` down to and including 1
    √ should be implemented recursively
    √ should pass auxillary test cases


  4 passing (47ms)
*/

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
