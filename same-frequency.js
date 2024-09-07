
function sameFrequency(firstNum, secondNum) {
	let firstString = firstNum.toString();
	let secondString = secondNum.toString();
	if (firstString.length !== secondString.length) return false;
	
	let counter1 = {};
	let counter2 = {};
	
	for (let a = 0; a < firstString.length; a++){
		counter1[firstString[a]] = (counter1[firstString[a]] || 0) + 1;
	}
	
	for (let b = 0; b < firstString.length; b++){
		counter2[secondString[b]] = (counter2[secondString[b]] || 0) + 1;
	}
	
	for (let k in counter1){
		if (counter1[k] !== counter2[k]) return false;
	}
	
	return true;
}
