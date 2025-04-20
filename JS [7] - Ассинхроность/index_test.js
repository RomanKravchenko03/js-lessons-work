/* < -- 

setTimeout(() => {
    console.log(`Прошло ровно 5 секунд!`)
    setTimeout(() => {
        alert(`Прошло уже 3 секунды!`)
        console.log(`Прошло уже 3 секунды!`)
    }, 3000)
}, 5000)

setInterval(() => {
    alert(`Каждые 30 секунд будет выводиться это сообщение!`)
    console.log(`Прошло уже 30 секунд!`)
}, 30000)

--> */

/* < -- 

async function fetchData() {
    try {
        const response = await fetch('https://www.swapi.tech/api/people/');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

--> */

/// swapi.dev - сайт для проверки запросов timecode 13:18 ///

/* < -- 

const api = 'https://www.swapi.tech/api/people/';

const xhr = new XMLHttpRequest();

xhr.open('get', api)

xhr.send()

xhr.onload = function() {
    console.log(xhr.response)
}

--> */

/* < -- 

function greet(name, callback) {
    
    setTimeout(() => {
        callback('Загрузка данных завершена!(4cek)');     
    },4000)

    alert('Loading: ' + name)
    console.log('Загрузка данных: ' + name); // Загрузка данных
    
}

greet('Александра', (response) => {
    alert(response)
    console.log(response)
})

--> */

/* < -- 
function greet(name, callback, wake) {
    
    setTimeout(() => {
        if (typeof callback === 'function')
            callback('Загрузка данных завершена!(5s)');     
    },5000)

    setTimeout(() => {
        if (typeof wake === 'function')
            wake('Загрузка данных завершена!(9s)');     
    },9000)
    
    alert('Loading: ' + name)
    console.log('Загрузка данных: ' + name); // Загрузка данных
    
}

greet('Александра', 
    
    (response) => {
        alert(response)
        console.log(response)
    },
    
    (wakes) => {
    alert(wakes)
    console.log(wakes)
})

--> */

/* < -- 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Данные загрузились!')
    }, 10000)
})

promise.then((response) =>{
    console.log(response)
    alert(response)
})

const api = 'https://www.swapi.tech/api/people/';

const swapi = fetch(api);

swapi.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response)
}).catch((error)=> {
    console.error(error)
})

--> */

/* < -- 
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Ошибка сервера 403!')
    }, 10000)
}) 

promise.then((response) =>{
    console.log(response)
    alert(response)
}).catch((error)=> {
    console.error(error)
}).finally(()=>{
    console.log(`Завершили работу!`)
})
--> */    


/* < -- 
const api = 'https://www.swapi.tech/api/people/';

const swapi = fetch(api);

swapi.then((response) => {
    return response.json()
}).then((response) => {
    const { planets } = response;
    return fetch(planets)
}).then((response)=> {
    return response.json()
}).then((response)=>{
    console.log(response)
})

--> */  

const api = 'https://www.swapi.tech/api/people/';

const getStarWarsPlanets = async () => {
    const response = await fetch(api);
    const { planets } = await response.json();
    
    const planetsResponse = await fetch(planets)
    const planetsData = await planetsResponse.json()
    console.log(planetsData.results)
} 

getStarWarsPlanets()