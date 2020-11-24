//función pura
const multiplyByThree = (num) => {
    return num * 3
}

console.log(multiplyByThree(3));
console.log(multiplyByThree(3));
console.log(multiplyByThree(3));

let accumulatedNumber = 0;

//función impura
const multiplyByThreeAccumulated = (num) => {
    accumulatedNumber += num;
    return accumulatedNumber * 3;
}

console.log(multiplyByThreeAccumulated(3));
console.log(multiplyByThreeAccumulated(3));
console.log(multiplyByThreeAccumulated(3));
