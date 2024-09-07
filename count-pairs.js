// add whatever parameters you deem necessary
function countPairs(ar, nums) {
	ar.sort((a, b) => a - b);
	let counter = 0;
	let begin = 0;
	let end = ar.length - 1;
	while (begin < end){
		let sum = ar[begin] + ar[end];
		if (sum === nums){
			counter++;
			begin++;
			end--;
		} else if (sum < nums){
			begin++;
		} else {
			end--;
		}
	}
	return counter;
}
