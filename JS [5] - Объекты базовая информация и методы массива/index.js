
const tasks = ["Купить продукты", "Сделать зарядку", "Позвонить другу", "Написать код"];

//1️⃣ Добавление и удаление задач  
//- Добавь новую задачу "Прочитать книгу" в конец списка.  
//- Удали последнюю задачу.  
//- Добавь "Записаться на курс" в начало списка.  
//- Удали первую задачу.  
//- Вставь "Сделать уборку" на второе место в списке.   


/* 1 */    
    
    /* 1.1 */  tasks.push(`Прочитать книгу`)
                console.log(tasks)
    
    /* 1.2 */ tasks.splice(4, 5)
                console.log(tasks)

    /* 1.3 */ tasks.unshift(`Записаться на курс`)
                console.log(tasks)

    /* 1.4 */ tasks.splice(0, 1)
                console.log(tasks)
    
    /* 1.5 */ tasks.splice(1, 0, `Сделать уборку`)
                console.log(tasks)

//2️⃣ Поиск задач  
//- Найди индекс задачи "Позвонить другу".  
//- Проверь, есть ли в списке задача "Сходить в зал".  
//- Найди первую задачу, содержащую слово "код".  

/* 2 */

     /* 2.1 */ const resultIndex = tasks.findIndex((task) => task === `Позвонить другу`)
                console.log(resultIndex)

    /* 2.2 */  const resultsIndex = tasks.find((task) => {
        return task === `Сходить в зал`
    })
                console.log(resultsIndex)

    /* 2.3 */  const findTask = tasks.find((task => task.includes(`код`)))
    console.log(findTask)

    
// 3️⃣ Перебор задач  
// - Выведи все задачи в консоль с их порядковым номером (используй `forEach`).

/* 3 */
   
    /* 3.1 */  tasks.forEach((task, number) => {
    console.log(`Индекс: ${number}, Порядковый номер: ${number + 1}, Задача: ${task}`)
   })

/* 4 */

   /* 4.1 */  const importTask = tasks.map(task => `${task} (выжно)`)
   console.log(importTask)
   
    /* 4.2 */  tasks.sort((a, b) => a.localeCompare(b), 'rus');
    console.log(`Сортировка по алфавиту: ${tasks}`);

    /* 4.3 */  tasks.sort((a, b) => b.localeCompare(a, 'rus')); // Возможно этот способ тоже подойдет
    console.log(`Перевертыш: ${tasks}`);

    /* 4.3.1 */ tasks.reverse()
    console.log(tasks);
    
    /* 4.4 */   const taskJoin = tasks.join(',')
    console.log(taskJoin)

    /* 4.5 */   const taskSplit = taskJoin.split('//')
    console.log(taskSplit)

    /* 4.5 */  const tasksSum = tasks.reduce((a, b) => a + b.length ,0 ,0)
    console.log(tasksSum)

