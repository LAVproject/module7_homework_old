// Родительская функция для электроприборов
const ElectricalAppliance = function (name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

// Методы для включения/выключения электроприбора из розетки
ElectricalAppliance.prototype = {
    plugIn: function () {
        if (!this.pluggedIn) {
            console.log(this.name + " включен в розетку.");
            this.pluggedIn = true;
        }
    }, unplug: function () {
        if (this.pluggedIn) {
            console.log(this.name + " выключен из розетки.");
            this.pluggedIn = false;
        }
    }
};

// Настольная лампа
function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
// Регулятор яркости
DeskLamp.prototype.adjustBrightness = function (newBrightness) {
    if (this.pluggedIn && typeof newBrightness === "number") {
        // Максимальная яркость
        const maxBrightness = 100
        // Минимальная яркость
        const minBrightness = 30

        // Отслеживаем разрешенный диапазон яркости
        if (minBrightness <= newBrightness && newBrightness <= maxBrightness) {
            this.brightness = newBrightness;
            this.power = (this.power / 100) * newBrightness
            console.log(this.name + " - яркость изменена на " + this.brightness + "%");
        }
        else {
            console.log(this.name + " - яркость установлена по умолчанию");
        }

    }
    else {
        console.log(this.name + " - Неверные значения яркости, диапазон изменения яркости от 30 до 100%");
    }
};

// Компьютер
function Computer(name, power, cpu) {
    ElectricalAppliance.call(this, name, power);
    this.cpu = cpu;
    this.processes = []
}

Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.runProgram = function (program) {
    if (this.pluggedIn) {
        console.log(this.name + " запускает программу: " + program);
        this.processes.push(program)
    }
};

// Создание экземпляров приборов
let lamp = new DeskLamp("Настольная лампа", 15, 100);
let computer = new Computer("Компьютер", 500, "Intel i7");

// Включение приборов в розетку
lamp.plugIn();
computer.plugIn()

// Изменение яркости лампы
lamp.adjustBrightness(80)
// Запуск программы на компьютере
computer.runProgram('Word')
computer.runProgram('Excel')

// Подсчет суммарной потребляемой мощности
function calculateTotalPowerConsumption(...devices) {
    let totalPower = 0;
    devices.forEach((device) => {
        console.log('device', device)
        if (device.pluggedIn) {
            totalPower += device.power;
        }
    });
    return totalPower;
}

// Вывод суммарной потребляемой мощности
console.log("Суммарная потребляемая мощность: " + calculateTotalPowerConsumption(lamp, computer) + " Вт");