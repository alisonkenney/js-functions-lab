// Question 1
function maxOfTwoNumbers(num1,num2) {
	if (num1 > num2) {
		return num1;
	}else if (num2 > num1) {
		return num2;
	}else {
		return null;
	}
}

console.log(maxOfTwoNumbers(5,12) === 12)

// Question 2
function maxOfThree(num1, num2, num3) {
	if ((num1 > num2) && (num1 > num3)) {
		return num1;
	} else if ((num2 > num1) && (num2 > num3)) {
		return num2;
	}else {
		return num3;
	}

}

console.log(maxOfThree (17,16,8));


// Question 3
function isCharacterAVowel(char) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	
	if(vowels.indexOf(char) !== -1) {
		return true;
	}else {
		return false;
	}
		
}

console.log(isCharacterAVowel('e'))

// Question 4
function sumArray(array) {
	sum = 0
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
 	return sum
}

sumArray([1,3,5,6]);


// Question 4
function multiplyArray(array) {
	product = array[0];
	for (var i = 1; i < array.length; i++) {
		product *= array[i];
	}
 	return product;
}

multiplyArray([1,3,5,6]);


// Question 5
var numberOfArguments = function(){
	return arguments.length;
}

numberOfArguments(3,4,6,7,2);

// Question 6
var reverseString = function (phrase){
	var sep = phrase.split("");
	sep.reverse();
	var reverseSep = sep.join("");
	return reverseSep;
};

reverseString("How are you?");


// Question 7
function findLongestWord (array) {
	longestWord = array[0];
  	for (var i = 1; i < array.length; i++) {
		if(array[i].length > longestWord.length) {
			longestWord = array[i];
		}
	}
	return longestWord;
}

findLongestWord(["hello", "goodbye", "thisisstupid"]);


// Question 8
function filterLongWords (array, i) {
	var longWords = [];
	for (x=0; x < array.length; x++) {
		if(array[x].length > i) {
			longWords.push(array[x]);
		}
			
	}
  		return longWords;
}

filterLongWords (["string", "seventeen", "hello"],4)


// Bonus 1
function charactersOccurencesCount() {
  
}

