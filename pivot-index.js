
function pivotIndex(nm) {
	let rtSum = nm.reduce((a, b) => a + b, 0);
	let lftSum = 0;
	let indexx = -1;
	for (let a = 0; a < nm.length; a++){
		lftSum += nm[a];
		if (lftSum === rtSum){
			indexx = a;
			break;
		}
		rtSum -= nm[a];
	}
	return indexx;
}
