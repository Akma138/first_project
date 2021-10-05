// Создайте функцию, которая принимает в качестве аргументов массив из слов, а возвращает созданное из этих слов предложение.  
// Пример: ['I', 'am', 'groot'] => 'I am groot'
// */

let arr = ['I', 'am', 'groot']
const toSentence = (arr) => {
  return arr.join(''); 
}


module.exports = toSentence
---------------------------
/*
Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.
Пример: ({ 'key': 'property' }, 'key') => 'property'
*/

const objValue = (obj, key) => {
  return obj[key];
}

module.exports = objValue
-------------------------
/*
Создайте функцию, которая принимает в качестве аргументов многомерный массив (массив, содержащий другие массивы) чисел и число из одного из вложенных массивов, а возвращает индекс вложенного массива, в котором это число находится.
Пример: ( [[1], [2, 3], [4]], 3 ) => 1
*/

const nestedArr = (arr, number) => {
   for (let i=0; i <arr.length; i++) {
     for (let j=0; j < arr[i].length; j++){
       if (arr[i][j] == number) {
         return i
       }
     }
   }
}

module.exports = nestedArr
_____________________________

Создайте функцию, которая принимает в качестве аргументов три неотрицательных числа, а возвращает значение true («истина»), если три стороны могут сформировать треугольник,
и false («ложь») в противоположном случае.  
Каждое число представляет собой длину стороны треугольника. 
Пример: (3, 4, 5) => true  
  
Для начала пропиши аргументы функции.  
*/

const validTriangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false
  }
}

module.exports = 
___________________________________________________________

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.
Для начала пропиши аргументы функции.  
Пример: [ 'one', 'two', 'three' ] => 'three'
*/

const longestString = (arr) => {
  max = 0;
  Ing = "";
  for (i of arr){
    if (i.length > max) {
      max = i.length;
      Ind = i;
    }
    return Ing 
  }
}

module.exports = longestString
___________________________________________________________

Создайте функцию, которая убирает из строки символ "_", а следующую за "_" букву делает заглавной
  Для начала пропиши аргументы функции.  
  Пример: 'elbrus_bootcamp' => 'elbrusBootcamp'
*/

const camelCase = (str) => {
   str = str.split('_');
   console.log(str[1][0].toUpperCase())
   str[1]=str[1][0].toUpperCase() + str[1].slice(1);
   return str.join('')
}


module.exports = camelCase
___________________________
оздайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.
*/

const logEachLetter = (str) => {
  for (let i=0; i<str.length; i++){
    console.log(str[i]); 
  }
}

module.exports = logEachLetter
___________________________________________________________
Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.
Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]
*/

const randomArr = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    this.apply.append(Math.trunc(Math.random()*10))
  }
  return arr; 
}

module.exports = randomArr
___________________________
/*
Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, а возвращает сумму всех целых чисел в диапазоне между ними.
Первое число может больше второго!
Пример: (5, 3) => 12
*/

const sumOfIntegers = (start, end) => {
  sum = 0;
  for (let i=start+1; i< end; i++) {
    sum +=i;
  }
  return sum; 
}

module.exports = sumOfIntegers
