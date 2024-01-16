//1.
//как я поняла из прочитанного, алгоритмов сортировок достаточно много.
//Их подразделяют на стабильные - не меняет порядок с одинаковыми значениями относительно 
// друг друга и нестабильные - меняет, соответственно. Алгоритмы также оцнивают по степени сложности
//Big O notation. Перечислю несколько, коорые встретились чаще всего

//Сортировка пузырьком(Bubble Sort) - стабильный алгоритм. Осуществляется путем перебора всего массива, 
//сравнивает соседние и меняет местами. Элементы с больим значением опускаются вниз, с меньшим - 
//идут наверх, как пузырьки газа. Сложность O(n^2)

//Сортировка выбором(Selection Sort) - может быть стабильным и нестабильным. Осуществляется путем нахождения
//минимального элемента и переноса его в начало, при каждой итерации неотсортированного массива
//сложность O(n^2)

//Циклическая сотировка(Cycle Sort) - нестабильный алгоритм. Осуществляется путем разложения массива на циклы.
//внутри этих циклов происходят перестановки элементов до тех пор, пока все циклы не завершатся и 
//массив не будет отсортирован. Сложность O(n^2)

//Быстрая сортировка(Quick Sort) - нестабильный алгоритм. Осуществляется путем определения «стержень» и 
//разбивает массив на подмассивы относительно «стержня», которые затем сортируются. Сложность варьируется
//2. Done
//3. Создать объект Person несколькими способами после создать объект Person2, чтобы в нём были
//доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.
//с помощью литерала объекта
const person = {
    name: 'Марина',
    age: 36,
    profession: 'Frontend-developer'
};

Object.prototype.logInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`);
};
  
const person2 = Object.create(person);
person2.name = 'Марина';
person2.age = 37;
person2.profession = 'Middle-frontend-developer';

person.logInfo(); 
person2.logInfo();
//с помощью конструктора
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

Person.prototype.logInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`);
};
  
const person = new Person('Марина', 36, 'Frontend-developer');
const person2 = new Person('Марина', 37, 'Middle-frontend-developer');

person.logInfo(); 
person2.logInfo();
//с помощью класса
class Person {
    constructor(name, age, profession) {
      this.name = name;
      this.age = age;
      this.profession = profession;
    }
    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`);
    }
}

  
const person = new Person('Марина', 36, 'Frontend-developer');
const person2 = new Person('Марина', 37, 'Middle-frontend-developer');

person.logInfo(); 
person2.logInfo();
//с помощью метода create
const personPrototype = {
    name: 'Марина',
    age: 36,
    profession: 'Frontend-developer',
    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Profession: ${this.profession}`);
    }
};

  
const person = Object.create(personPrototype);
const person2 = Object.create(personPrototype);
person2.name = 'Марина';
person2.age = 37;
person2.profession = 'Middle-frontend-developer';

person.logInfo(); 
person2.logInfo();

//4. Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
class PersonThree extends Person {
    constructor(name, age, profession) {
      super(name, age, profession);
    }
  
    get name() {
      return this.name;
    }
  
    set name(newName) {
      this.name = newName;
    }
}
//5.Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total 
const firstSum = (arr, total) => {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === total) {
                result.push(arr[i], arr[j]);
                return result;
            }
        }
    }
}    

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
const result = firstSum(arr,total);
console.log(result);
// у данного алгоритма сложность O(n^2) из-за двух вложенных циклов. 