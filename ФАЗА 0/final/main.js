function getHashed(textA) {
	console.log(textA);
	if (textA.length > 3) {
		return textA.slice(0, textA.length - 3) + "...";
	}
	return textA;
} 
