const generateString = firstString =>{
    return secondString => `${firstString} ${secondString}`
}

const greeting = generateString('Hello');

const greetingJuan = greeting('Juan');
console.log(greetingJuan);
const greetingSebastian = greeting('Sebastian')
console.log(greetingSebastian);