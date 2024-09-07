function averagePair(ar, nums) {
	let begin = 0;
	let end = ar.length - 1;
	
	while (begin < end){
		let average = (ar[begin] + ar[end]) / 2;
		if (average == nums){
			return true;
		} else if (average < nums){
			begin++;
		} else {
			end--;
		}
	}
	return false;
}
