// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function longestStr(lString) {
    let bigWord = lString.split(" ");
    let core = "";
    for(let ord of bigWord) {
        if (ord.length > core.length) {core = ord}
    }
    return core;
}

// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number){
   number += "";
   return number.split("").reverse().join("");
}

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str) {
    let makeArr = str.split("");
    const uniqueArray = [];
    for (i = 0; i < makeArr.length; i++) {
        if (uniqueArray.includes(makeArr[i]) == false) {
            uniqueArray.push(makeArr[i]);
        }
    }
    return uniqueArray.join("");
}

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss){
    return win*3 + draw + loss*0;
}

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

function statisctics(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return {
        Max: Math.max(...arr),
        Min: Math.min(...arr),
        Elements: arr.length,
        AvarageNum: sum / arr.length
    }
}


// 6.Написать функцию которая принимает массив работников компании 

const workers = [
  {name: "Jimm", salary: 40000, department: "IT"},
  {name: "Bob", salary: 60300, department: "HR"},
  {name: "Stacy", salary: 15000, department: "IT"},
  {name: "Tom", salary: 55200, department: "DEVOPS"},
  {name: "Kate", salary: 25000, department: "IT"},
  {name: "John", salary: 40000, department: "HR"},
  {name: "Billy", salary: 60000, department: "DEVOPS"}
];

// Код взят у Влада с Денисом. За что им большое спасибо) 

function stat(workers) {
    const SalDep = workers.reduce((acc, curr) => {
        const {salary, department} = curr;
            if (!acc[department]) {
                acc[department] = {sumSal: 0, employees: 0};   
            }
            acc[department].sumSal += salary;
            acc[department].employees ++;
            return acc; 
    }, {});
    let maxAvg = 0;
    let maxDep= "";
    for (const department in SalDep) {
        const {sumSal, employees} = SalDep[department]
        const avgSal = sumSal / employees;
        if (avgSal > maxAvg) {
            maxAvg = avgSal;
            maxDep = department;
        }
    }
    return {
        department: maxDep,
        average: maxAvg
    }
}
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 
   
