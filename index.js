function introduction(name){
	const message = `Hi, my name is ${name}.`;
	return message;
}
function logTwoValues(value1, value2){
	console.log(`The two values are ${value1} and ${value2}.`);
}
function introductionWithLanguage(name, language){
	const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
	return message;
}
function introductionWithLanguageOptional(name, language = 'JavaScript'){
	const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
	return message;
}

