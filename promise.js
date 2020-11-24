const getNumberOne = Promise.resolve(1);

//console.log(getNumberOne)

const getValuePromiseNumberOne = _ => {
    getNumberOne.then( data => {
        return data + 5
    }).then( data => {
        console.log(data)
    })
};

const getValuePromiseNumberOneAwait = async _ => {
    const data = await getNumberOne;
    console.log(data+5)
}

//getValuePromiseNumberOne();
//getValuePromiseNumberOneAwait();

async function randomDelayedAsync(max = 10, expected = 5, delay =  1000){
    const validateNumber = await new Promise( (resolve,reject) => {
        const number = Math.floor(Math.random() * max);

        setTimeout(
            () => number > expected
                ? resolve(number)
                : reject(new Error(`Menor a ${expected}`)),
            delay
        );
    })

    return validateNumber
}

const promiseThen = () => {
    randomDelayedAsync(100,20,5000).then(data => console.log(data));
    console.log('No es asincrono')
}

const promiseAwait = async () => {
    const data = await randomDelayedAsync(100,20,5000);
    console.log(data)
    console.log('Es asincrono')
}

promiseThen();
promiseAwait();

