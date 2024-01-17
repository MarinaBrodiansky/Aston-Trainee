//1
//Массивы в JS могут быть менее строгими, чем массивы в других языках программирования, и 
//позволяют динамическое изменение их длины, т. е. не имеют предопределенной длины. 
//Массивы в JS могут использовать как числовые индексы, так и произвольные строки в качестве ключей. 
//Массивы в JS могут иметь разные типы данных: каждый элемент массива может иметь свой 
//собственный тип данных, то есть в дном массиве можно хранить числа, строки, объекты. 
//Массивы в JS совмещают в себе несколько структур данных, таких как 
//упорядоченные списки, очереди и ассоциативные массивы.

//2.Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value
//(Привязать через bind, call, apply)

//bind
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
const boundLogger = logger.bind(obj);
boundLogger();

//call
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.call(obj);

//apply
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.apply(obj);
