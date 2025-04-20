// const helloWorld = () => {
//    const a = 101
//    console.log(a) 
// }

// // console.log(a) 

// helloWorld ()

// const wakeFunction = () => {
//     let topSecret = "-.-,./,,/.,"
//     return function wakeFunctionTwo() {
//         console.log("Вывод: ", topSecret)
//     }
// }

// const on = wakeFunction()
// on()

// const getVkUrl = () => {
//     const url = 'https://vk.com/'
    
//     return function (path) {
//         return `${url}${path}`
//     }
// }

// const vkGroup = getVkUrl()

// const vkFeed = vkGroup ('feed')

// const vkJoin = vkGroup ('vk.com/')

// console.log(vkFeed, vkJoin)
// console.log(vkJoin)
//////////////////////////////////////////////////////////////////////////////////////

const makeCounter = () => {
    let count = 0;
    return () => {
        count++; 
        return count;
    };
};

const counter = makeCounter();
console.log(counter()); 
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

//////////////////////////////////////////////////////////////////////////////////////

const makeCounterTwo = () => {
    let count = 0;
    return () => {
        count = count + 2; 
        return count;
    };
};

const counters = makeCounterTwo();
console.log(counters()); 
console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());
console.log(counters());

//////////////////////////////////////////////////////////////////////////////////////

createMultiplier = (factor) => {
    return (multiply) => {
        return multiply * factor
    }     
}

const usingCreateMultiplier = createMultiplier(3)
console.log('Умножение: ' + usingCreateMultiplier(33))

//////////////////////////////////////////////////////////////////////////////////////