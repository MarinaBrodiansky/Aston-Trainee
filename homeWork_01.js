// 1.Создать объект counter всеми возможными способами;
// литеральная форма создания объектов:
const counter = {};

// с помощью ключевого слова new:
const counter = new Object();

// с помощью встроенного метода Object:
// create
const counter = Object.create(null);

const counter = Object.create({});

const counter = Object.create ({}, {
    property1: {
        value: 1,                
        writable: true,
        configurable: true,
        enumerable: true,
    },
});

// 2.Скопировать объект counter всеми возможными способами;
// с помощью встроенного метода Object
// assign
const newCounter = Object.assign({}, counter);

// с помощью оператора spread
const newCounter = { ...counter};

// с помощью методов JSON.stringify() и JSON.parse()
const newCounter = JSON.parse(JSON.stringify(counter));

// с помощью собственной функции для глубокого копирования
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    let copy;
    if (Array.isArray(obj)) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy.push(deepCopy(obj[i]));
      }
    } else {
      copy = {};
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = deepCopy(obj[key]);
        }
      }
    }
  
    return copy;
  }
  
  const newCounter = deepCopy(counter);

  // Реализация паттерна проектирования прототип для классов, экземпляры которых нужно копировать
  class Counter {
    constructor(property) {
      this.property = property;
    }
  
    clone() {
      return new Counter(this.property);
    }
  }
  
  const counter = new Counter('counter');
  const newCounter = counter.clone();

  // 3. Создать функцию makeCounter всеми описанными и возможными способами
  // function declaration
  function makeCounter (){
    // код функции
  };

  // function expression
  const makeCounter = function() {
    // код функции
  };

  // named function expressions
  const makeCounter = function makeCounter() {
    // код функции
  };

  // arrow function
  const makeCounter = () => {
    // код функции
  };

  // callback function
  function makeCounter(callback) {
    // код функции
    callback();
  };

  // Immediately Invoked Function Expression
  const makeCounter = (function () {
    // код функции    
  })();

  // constructor functions
  function MakeCounter() {
    // код функции
  }
  
  const counter = new MakeCounter();

  //4. Написать функцию глубокого сравнения двух объектов

  const obj1 = { 
    here: { 
        is: "on", 
        other: "3" }, 
    object: Z 
  };
  const obj2 = { 
    here: { 
        is: "on", 
        other: "2" }, 
    object: Z 
  };
    
  const deepEqual = (obj1, obj2) => {    
    if (
        (typeof obj1 !== 'object' && obj1 !== null) ||
        (typeof obj2 !== 'object' && obj2 !== null) 
    ) {
        return false;
    }

    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);

      if(objKeys1.length !== objKeys2.length) {
        return false;
      }
    
      for(let key of objKeys1) {
        if(!deepEqual(obj1[key], obj2[key])) {
          return false
        }
      } 
    return true
  };
  console.log(deepEqual(obj1, obj2)); //false

  // 5. Развернуть строку в обратном направлении при помощи методов массивов
  function reverseStr(str) {
    return str.split('').reverse().join('');
  }

//   6. объяснить почему почему 
//   console.log(+[6]) вернет 6, 
//   console.log(+[6, 5, 7, 8 ]) вернет Nan
//   Оператор "+" используется для преобразования значения в число. 
//   При использовании оператора "+" с массивом, он сначала вызывает метод Array.prototype.toString() 
//   для преобразования массива в строку, а затем пытается преобразовать эту строку в число.
//   В случае console.log(+[6]), массив [6] преобразуется в строку "6" с помощью метода Array.prototype.toString(), 
//   а затем эта строка успешно преобразуется в число 6, потому что "6" представляет собой допустимое число.
//   Но в случае console.log(+[6, 5, 7, 8 ]), массив [6, 5, 7, 8 ] преобразуется в строку "6,5,7,8" 
//   с помощью метода Array.prototype.toString(). Эта строка не может быть преобразована в число,
//   потому что в ней содержатся запятые, которые не являются допустимыми символами для чисел. 
//   Поэтому результат преобразования равен NaN (Not a Number).
  

