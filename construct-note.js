
function constructNote(msg, ltr) {
	const letters = {};
	const noteFrequency = {};
	
	for (let charac of ltr){
		letters[charac] = ++letters[charac] || 1; 
	}
	
	for (let charac of msg){
		noteFrequency[charac] = ++noteFrequency[charac] || 1;
	}
	
	for (let charac in noteFrequency){
		if (!letters[charac]){
			return false;
		}
		if (noteFrequency[charac] > letters[charac]){
			return false;
		}
	}
	return true;
}
