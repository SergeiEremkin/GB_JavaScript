'use strict'

/*
1.1 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке).

*/

function Product5(name, price) {
    this.name = name;
    this.price = price;
}

Product5.prototype.make25PercentDiscount = function () {
    this.price = (this.price - (this.price * 0.25))
}

let product1 = new Product5('food', 50);
product1.make25PercentDiscount();

class Product6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = (this.price - (this.price * 0.25))
    }
}
let product2 = new Product6('drink', 100);
product2.make25PercentDiscount();

