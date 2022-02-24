'use strict'

/*
1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по 
аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования), 
а) конструктор Post, который принимает параметры author, text, date и сохраняет
их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет 
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.
*/

function Post5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post5.prototype.edit = function (text) {
    this.text = text;
};

function AttachedPost5(author, text, date) {
    Post5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

AttachedPost5.prototype = Object.create(Post5.prototype);
AttachedPost5.prototype.constructor = AttachedPost5;

let apost = new AttachedPost5('sdd', 'sdsd', '12.12');
apost.makeTextHighlighted();
apost.edit('другой текст');
console.log(apost);

class Post6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text
    }
}

class AttachedPost6 extends Post6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let obj1 = new AttachedPost6('ivanoff', 'что-то написал', 'какое-то число');
obj1.makeTextHighlighted();
obj1.edit('Исправил, что написал');