const string = "Bienvenidos a BEWE";

const splitString = str => str.split(' ');

const countArray = arr => arr.length

const splitText = splitString(string);
console.log(splitText);

console.log(countArray(splitText));

const countWords = str => countArray(splitString(str))

console.log(countWords(string))