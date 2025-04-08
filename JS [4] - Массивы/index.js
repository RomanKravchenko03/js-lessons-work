// Массивы - Концепция //

/* <--

const array = [];

const cars = [`Lada`, `BMW`, `Hyndai`, `Toyota`]

console.log(`Элемент массива: ` + cars[0]) // Указывает номер, и показывается элемент "0" - Lada, `1` - BMW и тд. //
console.log(`Элемент массива: ` + cars[2])
console.log(`Элемент массива: ` + cars[3])
console.log(`Элемент массива: ` + cars[1])

console.log(`Кол-во элементов в массиве: ` + cars.length)
console.log(cars)

console.log(`Первый элемент массива: ` + cars.shift())
console.log(cars)

console.log(`Последний элемент массива: ` + cars.pop())
console.log(cars)

cars.push(`Mercedes`)
console.log(cars)

cars.unshift(`Honda`)
console.log(cars)

--> */

// Методы перебора массива ..

/* <--

const array = [];

const cars = [`Lada`, `BMW`, `Hyndai`, `Toyota`];

cars.forEach((car, index, array) => {
    console.log(car, index, array)
})

--> */

// Цикл forEach //

/* <--

const array = [];

const cars = [`Lada`, `BMW`, `Hyndai`, `Toyota`];

cars.forEach((car, index, array) => {
    if (index === 3)
        alert(`Хороший выбор машины: ${car}`)
})

--> */

// Перебор массива For // 

/* < --

const array = [];

const cars = [`Lada`, `BMW`, `Hyndai`, `Toyota`];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
--> */


const studentNames = ["Анна", "Борис", "Виктор"];
const studentAges = [18, 20, 19];
const studentGrades = [
  [5, 4, 5], // Анна
  [3, 4, 4], // Борис
  [5, 5, 5]  // Виктор
];

// Задание №4.1 //
const getAverage = (grades) => {
    const results = []
    grades.forEach(grade => {
        let sumAllGrade = 0
        
        grade.forEach((num) => {
            sumAllGrade = sumAllGrade + num
        })

        let midleGraid = sumAllGrade / grade.length
        results.push (midleGraid)
    });
    
    return results
}

const averages = getAverage(studentGrades) // timecode 46:18 //

const getStudentInformation = (averages) => {
    averages.forEach((average, index) => {
        console.log(`
            Студент: ${studentNames[index]}
            Полных лет: ${studentAges[index]}
            Средняя оценка: ${average}
            `)
    })
}

getStudentInformation (averages)

const getTopStudent = (names, grades) => {
    const averages = getAverage(grades)
    grades.forEach(grade => {
        console.log(grade)
    })
} 

getTopStudent (studentNames, studentGrades)