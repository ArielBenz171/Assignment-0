// Given word, the function checks if the word is a palindrome

function isPalindrome(word) {

	// Checks if word is equal to word that is split, the put into reverse order, then joined back
	return word === word.split('').reverse().join('');
}

/* Output:
     the isPalindrome(word) function
    √ should return a boolean value
    √ should return true if the input `word` is a palindrome
    √ should return false if the input `word` is not a palindrome
    √ should pass auxillary test cases


  4 passing (45ms)
*/

// Do not edit this line;
module.exports = isPalindrome;
