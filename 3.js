// Функция создает пустой объект без прототипа
const createEmptyObject = () => Object.create(null);

// Создаем объект
let obj = createEmptyObject();

// Выводим результат в консоль
console.log('obj', obj);