
function separatePositive(nm) {
	let begin = 0;
	let end = nm.length - 1;
	
	while (begin < end){
		if (nm[begin] < 0 && nm[end] > 0){
			let tm = nm[begin];
			nm[begin] = nm[end];
			nm[end] = tm;
			begin += 1;
			end -= 1;
		} else {
			if (nm[begin] > 0) begin += 1;
			else end -= 1;
		}
	}
	return nm;
}
