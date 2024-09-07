// add whatever parameters you deem necessary
function longestFall(num) {
	let count = 1;
	let maxCount = 0;
	
	if (num.length === 0){
		return 0;
	}
	
	for (let a = 1; a < num.length; a++){
		if (num[a] < num[a - 1]){
			count++;
			maxCount = Math.max(count, maxCount);
		} else {
			count = 1;
		}
	}
	return maxCount || 1;
}
