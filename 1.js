// Функция принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
function printOwnProperties(obj) {
    // Перебираем ключи в объекте
    for (let key in obj) {
        // Проверяем на собственные свойства объекта
        if (obj.hasOwnProperty(key)) {
            // Выводим в консоль ключ и значение объекта
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
        }
    }
}

let obj = {
    car: "Toyota", city: "London", fruit: "Apple",
};
printOwnProperties(obj);