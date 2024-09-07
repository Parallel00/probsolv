function isSubsequence(string1, string2) {
	let firstStringIndex = 0;
	let secondStringIndex = 0;
	if (!string1) return true;
	while (secondStringIndex < string2.length){
		if (string2[secondStringIndex] === string1[firstStringIndex]){
			firstStringIndex += 1;
		}
		if (firstStringIndex === string1.length) return true;
		secondStringIndex += 1;
	}
	return false;
}
