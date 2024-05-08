// Класс электроприборы
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    // Методы для включения/выключения электроприбора из розетки
    plugIn() {
        if (!this.pluggedIn) {
            console.log(this.name + " включен в розетку.");
            this.pluggedIn = true;
        }
    }

    unplug() {
        if (this.pluggedIn) {
            console.log(this.name + " выключен из розетки.");
            this.pluggedIn = false;
        }
    }
}

// Класс настольная лампа
class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power)
        this.brightness = brightness;
    }

    // Регулятор яркости
    adjustBrightness(newBrightness) {
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
    }
}

// Класс компьютер
class Computer extends ElectricalAppliance {
    constructor(name, power, cpu) {
        super(name, power);
        this.cpu = cpu;
        this.processes = []
    }

    // Запуск программы
    runProgram(program) {
        if (this.pluggedIn) {
            console.log(this.name + " запускает программу: " + program);
            this.processes.push(program)
        }
    }
}

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