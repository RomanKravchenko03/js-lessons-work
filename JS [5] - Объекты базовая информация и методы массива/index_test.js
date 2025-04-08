/////// test //////////

/* 1) <--

const shoes = {
    name: `Голоши обыкновенные` ,
    type: `Голоша` ,
}

const tShirt = {
    name: `Россия Вперед!` ,
    type: `Футболка` ,
}

const userInfo = {
    name: `Вася` ,
    lastName: `Пупкин` ,
    age: 18 ,
    wear: [tShirt, shoes] ,
    sayHello: function () {
        alert(`Привет!`)
    }
}

console.log(userInfo.name)
console.log(userInfo.lastName)
console.log(userInfo.age)
console.log(userInfo.wear)

console.log(`-------------------------`)

console.log(userInfo[`name`])
console.log(userInfo[`lastName`])
console.log(userInfo[`age`])
console.log(userInfo[`wear`])

userInfo.sayHello()

--> 1. */

//////////////////////////////////////////////////////////////////////////

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* 2) < -- 

const arrayOne = array.splice(0, 4)

console.log(array)
console.log(arrayOne)

const arrayTwo = array.slice(0, 3)

console.log(array)
console.log(arrayTwo)

--> 2. */

//////////////////////////////////////////////////////////////////////////

/* 3) < -- 

delete array[5]
console.log(array)
console.log(array.length)

--> */

/* < -- 

const arrayOne = array.map((element, index) => {

    return element * 6 / 3;
    
})

console.log(arrayOne)

--> */

/* <--

array.forEach ((elem) => {
    console.log(elem)
})

--> 3. */    

//////////////////////////////////////////////////////////////////////////

/* 4) <-- 

const cars = [`Lada`, `BMW` , `Lifan` , `Mercedes`, `Lifan`, `Gaz`] 

const resultsCar = cars.find((car) => {
    return car === `Lifan`;
    
})

const resultsIndex = cars.findIndex((car) => { // Проводит поиск с лева на право --> //
    return car === `Lifan`;
    
})

const resultsLastIndex = cars.findLastIndex((car) => { // Проводит поиск с права на лево <-- //
    return car === `Lifan`;
    
})

console.log(resultsCar)
console.log(resultsIndex)
console.log(resultsLastIndex)

--> 4. */

//////////////////////////////////////////////////////////////////////////

/* 5) <--

const cars = [`Lada`, `BMW` , `Lifan` , `Mercedes`, `Gaz`] 

const resultsLada = cars.indexOf(`Lada`, 1) // Начинает поиск `Lada` с лева на право с индекса 1 - `BMW`, и выводит -1, то есть не нашел //
console.log(resultsLada)

const resultsGaz = cars.indexOf(`Gaz`, 2) // Начинает поиск `Gaz` с лева на право с индекса 2 - `Lifan`, и выводит его индекс 4, и находит //
console.log(resultsGaz)

const resultsLifan = cars.lastIndexOf(`Lifan`, 3) // Начинает поиск `Lifan` с права на лево с индекса 3 - `Mercedes`, и выводит 2, то есть нашел //
console.log(resultsLifan)

const results = cars.includes(`Lifan`) // Если в массиве будет элемент Lifan, то выводит булин-тип --> true, если нет то false //
console.log(results)

--> 5. */

//////////////////////////////////////////////////////////////////////////

/* 6) <-- 

const cars = [`Lada`, `BMW` , `Lifan` , `Mercedes`, `Gaz`, `Niva`] 

const russianCars = cars.filter((car) => {
    if (car === `Lada`) {
        return true
    }
    if (car === `Niva`) {
        return true
    }
    if (car === `Gaz`) {
        return true
    }
    return false 
})

console.log(russianCars)

--> 6. */

//////////////////////////////////////////////////////////////////////////

/* 7) <--

const lada = {
    name: `Lada`,
    country: `Russian`
}

const niva = {
    name: `Niva`,
    country: `Russian`
}

const gaz = {
    name: `Gaz`,
    country: `Russian`
}

const bmw = {
    name: `BMW`,
    country: `Germany`
}

const mercedes = {
    name: `Mercedes`,
    country: `Germany`
}

const lifan = {
    name: `Lifan`,
    country: `China`
}

const cars = [lada, lifan, mercedes, gaz, niva, bmw] 

const russianCars = cars.filter((car) => {
    if (car.country === `Russian`) {
        return true
    }
    return false
})
console.log(russianCars)

const germanyCars = cars.filter((car) => {
    if (car.country === `Germany`) {
        return true
    }
    return false
})
console.log(germanyCars)

const chinaCars = cars.filter((car) => {
    if (car.country === `China`) {
        return true
    }
    return false
})
console.log(chinaCars)

/// Упрощеная стрелочная версия ///

const russianCarsInversion = cars.filter((car) => car.country === `Russian`)

const russianCarsName = russianCarsInversion.map((car) => car.name)
console.log(russianCarsName)


const germanyCarsInversion = cars.filter((car) => car.country === `Germany`) 

const germanyCarsName = germanyCarsInversion.map((car) => car.name)
console.log(germanyCarsName)


const chinaCarsInversion = cars.filter((car) => car.country === `China`) 

const chinaCarsName = chinaCarsInversion.map((car) => car.name)
console.log(chinaCarsName)

/// Упрощеная версия c reduce// time 57:35 //

const russianCarsNameReduce = cars.reduce((accumulator, car) => {
    if (car.country === `Russian`) {
        accumulator.push(car.name)
    }

    return accumulator

}, [])

console.log(russianCarsNameReduce)

--> 7. */ 
 
//////////////////////////////////////////////////////////////////////////

// const arrays = [1, 3, 5, 7, 9, 11]
// console.log(arrays.reverse()) 

const sentences = 'Дима, Катя, Саша'

const result = sentences.split('.') // Преврщает строчку в массив с элементами.

const withDot = result.join(',') // Превращает массив с элементами в строчку.

console.log(withDot)

const a = 999
const b = [222, 444, 666, 888, 998]
const resultA = Array.isArray(a) // Проверяет есть ли 999 в массиве B, выводит false - так как его там нет.
console.log(resultA)