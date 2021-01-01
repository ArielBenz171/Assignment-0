/* Given word, the function should create an object that splits up the letters and count the amount
   time each letter was used. */ 

function frequencyCounter(word) {
	
	var object = {} // Defines object as an object function
	
	for(var i = 0;i < word.length; i++){ // A loop running word's length - 1 times
		// Checks if the character at word's position i isn't equal to another char in word
		if(!object[word.charAt(i)])
			object[word.charAt(i)] = 1; // Sets the letter in position i to 1
		
		else{ // If the function has a letter that is used more than once
			// Add the value of letters at the ith position by one
			object[word.charAt(i)] = object[word.charAt(i)] + 1;

		}

	}
	return object; // Return the object with the letter count
}

/* Output:
     the frequencyCounter(word) function
    √ should return an object
    √ should output an `object` whose amount of keys is equivalent to the amount of unique letters in the word
    √ should output an `object` that contains key:value pairs which indicate accurate frequencies of each letter in the input `word`
    √ should pass auxillary test cases


  4 passing (45ms)
*/

// Do not edit this line;
module.exports = frequencyCounter;
