//Commit 1 - Verbal Questions

//A parameter is the variable you want to change in a function
//ex. const myFunction = (parameter) => {}
//An argument is the word you put inside the parameters when you call the function
//ex. myFunction(argument);

//When you type console.log(value). It will show you the value in the console.
//When you type return it will actually spit out the value in the program instead of resulting undefined. 

//Commit 2 - Palindrome

// const isPalindrome = (word) => {
// 	if (word === word.split('').reverse().join('')) {
// 		return true;
// 	}
// 	else if (word !== word.split('').reverse().join('')) {
// 		return false;
// 	}
// };

// isPalindrome("anka");

//Commit 3 - Digit Sum

// const sumDigits = (number) => {
// 	let numberString = number.toString();
// 	let sum = 0
	
// 	for (i = 0; i < numberString.length; i++) {
// 	  sum += Number(numberString[i]); 
// 	}
	  
// 	return (sum);
	
// };

// sumDigits(42);

//Commit 4 - Pythagoras

const calculateSide = (sideA, sideB) => {
	let sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
	
	return (sideC);
}

calculateSide(8, 6);