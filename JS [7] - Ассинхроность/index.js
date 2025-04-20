


// 🧠 Практика
// 1. Напиши функцию delay(ms), которая возвращает промис и выполняется через ms миллисекунд:
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  delay(1000).then(() => console.log("Прошла 1 секунда"));
  delay(1000).then(() => console.log("Прошло 5 секунд"));
  delay(1000).then(() => console.log("Прошло 10 секунд"));

// 2. Напиши async функцию, которая:
//      • ждёт 2 секунды
//      • выводит "Готово" в консоль

async function exmp() {
    console.log("Проверка, начало работы!");
    await delay(2000);
    console.log("Готово!");
    await delay(5000);
    alert("Прошло 5 секунд, Завершено!");
}
  
exmp();


// 3. Напиши функцию, которая последовательно выводит числа 1, 2 и 3 с задержкой 1 секунда между ними (используй async/await и delay() из задания выше).
function ordinalNumber(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  ordinalNumber(1000).then(() => console.log(1));
  ordinalNumber(1000).then(() => console.log(2));
  ordinalNumber(1000).then(() => console.log(3));


  async function numberOrdinal() {
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(2);
    await delay(1000);
    console.log(3);
}
  
numberOrdinal();  