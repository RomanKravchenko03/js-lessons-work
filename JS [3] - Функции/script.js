//ОБЪЯВЛЕНИЕ ФУНКЦИИ, ЕЕ ВЫЗОВ./////////////////////////////////

/* <--

function showMessage () {
    let currentHello = "Приветствую Вас на нашем сайте!"
    alert(currentHello)
    
    console.log("Пользователь зашел на сайт!")
}

showMessage ();

function dataEntry () {
 
const currentName = prompt("Укажите Ваше имя?")
 console.log(`Пользователь указал имя: ${currentName}`)
 
 const currentAge = prompt("Укажите сколько Вам лет?")
 console.log(`Пользователь указал возраст: ${currentAge} год(лет)`)
}

dataEntry ();

--> */ 

///////////////////////////////////////////////////////////////////

///////Занятие 3 - Функции. Пункт - 1./////////////////////////////
const numberOne = prompt("Умножение: Введите первое число")
const numberTwo = prompt("Умножение: Введите второе число")

console.log(`Указали два числа ${numberOne} и ${numberTwo}`)

multiply (numberOne, numberTwo)

function multiply (a, b) {
    const multiplyResult = a * b
    alert(`Результат: ${multiplyResult}`)
    console.log(multiplyResult)
    return multiplyResult
}
///////Занятие 3 - Функции. Пункт - 2./////////////////////////////


function isAdult(age) {
    
    if (age >= 18) {
        console.log(`Совершеннолетний!`)
        return true;
    } else {
        console.log(`Не совершеннолетний!`)
        return false;
    }
}
console.log(isAdult(25)); 
console.log(isAdult(17));
console.log(isAdult(28)); 
console.log(isAdult(15));
///////Занятие 3 - Функции. Пункт - 3./////////////////////////////
function getSquare(number) {
    let sum = (number) => number * number;
    return sum(number)
}

console.log(`Квадрат: ` + getSquare(33))