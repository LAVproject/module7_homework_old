// Функция принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
const checkProperty = (string, object) => object.hasOwnProperty(string);

// Объект
let person = {
    firstName: "Геннадий", age: 45, city: "Владивосток"
};

// Выводим результат в консоль
// true
console.log(checkProperty("firstName", person));
// false
console.log(checkProperty("lastName", person));