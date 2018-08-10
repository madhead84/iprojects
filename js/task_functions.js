
var getFirstValueOfArray = function (array) {
    return array[0];
};

var  getLastValueOfArray = function (array) {
    return array[array.length-1];
};

var getMinValueOfArray = function (array) {
    var minValueOfArray = array[0];
    for (var i = 0; i<array.length; i++) {
        if (minValueOfArray > array[i]) {
            minValueOfArray = array[i];
        }
    }
    return minValueOfArray
};

var getMaxValueOfArray = function (array) {
    var maxValueOfArray = array[0];
    for (var i = 0; i<array.length; i++) {
        if (maxValueOfArray < array[i]) {
            maxValueOfArray = array[i];
        }
    }
    return maxValueOfArray;
};

var removeUndefinedFromArray = function (array) {
    var arrayWithoutUndefined = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            arrayWithoutUndefined.push(array[i]);
        }
    }
    return arrayWithoutUndefined;
};

var containsNumberInArray = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

var isUndefined = function (value) {
    if (value === undefined) {
        return true;
    }
    return false;
};

var arraySize = function (array) {
    return array.length;
};

var isNull = function (value) {
    if (value === null) {
        return true;
    }
    return false;
};

var isNull = function (value) {
    if (value === null) {
        return true;
    }
    return false;
};

var isBoolean = function (value) {
    if (typeof(value) === "boolean") {
        return true;
    }
    return false;
};

var push = function (array, value) {
    array[array.length] = value;
    return array;
};

var without = function (array, value) {
    var arrayWithoutValue = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] != value) {
            arrayWithoutValue.push(array[i]);
        }
    }
    return arrayWithoutValue;
};

var reverse = function(array) {
    var reverseArray = [];
    for (var i = (array.length - 1); i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
};

var join = function (array, divider) {
    var returnedString = '';
    if (divider === undefined) {
        divider = ",";
    };
    for (var i = 0; i<array.length; i++){
        returnedString = returnedString + array[i] + divider;
    }
    return returnedString;
};

var indexOfString = function (array, value) {
    var returnedString = '';
    for (var i = 0; i<array.length; i++){
        if (array[i] === value) {
            returnedString = returnedString + array[i];
        }
    }
    return returnedString === '' ? -1 : returnedString
};

var indexesOf = function (array, value) {
    var returnedArray = [];
    for (var i = 0; i<array.length; i++){
        if (array[i] === value) {
            returnedArray[returnedArray.length] = array[i];
        }
    }
    return returnedArray === [] ? -1 : returnedArray;
};

var indexOf = function (array, value) {
    var returnedFirstIndexl;
    for (var i = 0; i < array.length; i++){
        if (array[i] === value) {
            returnedFirstIndex = i;
            break;
        }
    }
    return returnedFirstIndex === undefined ? -1 : returnedFirstIndex;
};

var indexOf = function (array, value) {
    var returnedLastIndex;
    for (var i = array.length; i >= 0; i--){
        if (array[i] === value) {
            returnedLastIndex = i;
            break;
        }
    }
    return returnedLastIndex === undefined ? -1 : returnedLastIndex;
};

var concat = function (array1, array2) {
    for (var i = 0; i <array2.length; i++) {
        array1[array1.length] = array2[i];
    }
    return array1;
};

var push = function (array, value) {
    array[array.length] = value;
    return array;
};

var sum = function (array) {
    var arraySum = 0;
    for (var i = 0; i <array.length; i++) {
         arraySum += array[i];
    }
    return arraySum;
};

var multiply = function (array) {
    var arrayMultiply = 1;
    for (var i = 0; i <array.length; i++) {
        arrayMultiply *= array[i];
    }
    return arrayMultiply;
};

var keys = function (object) {
    var returnedArray = [];
    for (var key in object) {
        returnedArray[returnedArray.length] = key;
    }
    return returnedArray;
};

var values = function (object) {
    var returnedArray = [];
    for (var key in object) {
        returnedArray[returnedArray.length] = object[key];
    }
    return returnedArray;
};

var pairs = function (object) {
    var returnedArray = [];
    for (var key in object) {
        var pairArray = [];
        pairArray[pairArray.length] = key;
        pairArray[pairArray.length] = object[key];
        returnedArray[returnedArray.length] = pairArray;
    }
    return returnedArray;
};

var invert = function (object) {
    var returnedObject = {};
    for (var key in object) {
        var toKey = '';
        var toValue = '';
        toKey = object[key];
        toValue = key;
        console.log(toKey);
        console.log(toValue);
        returnedObject[toKey] = toValue;
    }
    return returnedObject;
};

var omit = function(object, removeValue) {
    delete object[removeValue];
    return object;
};

var has = function (object, key) {
    return object[key] !== undefined;
};

var isMatch = function (object1, object2) {
    for (var key in object2) {
        return object1[key] === object2[key];
    }
};

Создать функцию isMatch которая проверяет, содержатся ли ключи-значения в объекте. Если да, то возвращает true иначе false.
Пример работы:
isMatch({name: 'moe', age: 32}, {age: 32});
// => true

var isEmpty = function (collection) {
    var counter = 0;
    for (var key in collection) {
        counter ++;
    }
    return counter === 0;
};

var uniq = function (array) {
    var returnedArray = [];
    goto:
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < returnedArray.length; j++) {
            if ( array[j] === array[i]) continue goto;
        }
        returnedArray[returnedArray.length] = array[i];
    }
    return returnedArray;
};

var sort = function (array) {
    for (var i = 0; i <array.length ; i++) {
        for (var j = 0; j < (array.length - 1); j++) {
            if (array[j] > array[j+1]) {
                var max = array[j];
                var min = array[j+1];
                array[j] = min;
                array[j+1] = max;
            }
        }
    }
    return array;
};

var getMatrixSum = function (array) {
    var returnSum = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j<array[i].length; j++){
            returnSum += array[i][j];
        }
    }
    return returnSum;
};







Создать функцию getMatrixSumByDiagonal которая принимает квадратную матрицу чисел и возвращает сумму чисел по диагонали (слева направо, сверху вниз).
Пример работы:
getMatrixSumByDiagonal([[1, 2, 3], [3, 0, 4], [0, 1, 2]]);
// => 3




Создать функцию each с двумя входными параметрами (массив и функция iteratee). Функция each проходит по всему списку элементов, вызывая для каждого из них функцию iteratee.
При каждом вызове в iteratee будут переданы два аргумента: (element, index).
Пример работы:
each([1, 2, 3], function(element, index) { console.log(element, index); });
// => выведет в консоль все цифры и соответствующие им индексы по очереди




Создать функцию map с двумя входными параметрами (массив и функция iteratee). Функция map возвращает новый массив, полученный преобразованием каждого элемента массива в функции iteratee.
Функция iteratee получает два аргумента: значение value, индекс index.
Пример работы:
map([1, 2, 3], function(value) { return value * 3; });
// => [3, 6, 9]




Создать функцию intersection которая принимает два массива и возвращает массив из элементов, встречающихся в каждом из переданных массивов.
Пример работы:
intersection([1, 2, 3], [101, 2, 1, 10]);
// => [1, 2]




Создать функцию findIndex с двумя входными параметрами (массив и функция predicate). Функция findIndex так же как и indexOf, возвращает первый индекс того значения, для которого функция predicate вернёт true. Если такой элемент не был найден, вернёт -1.
Пример работы:
findIndex([4, 6, 8, 12], function(value) { return value === 8; });
// => 2




Создать функцию find с двумя входными параметрами (массив list и функция predicate). Функция find вызывает для каждого элемента list функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл.
Пример работы:
find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => 2




Создать функцию filter с двумя входными параметрами (массив list и функция predicate) которая проходит через каждое значение list, возвращая массив всех значений, для которых predicate вернул true.
Пример работы:
filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => [2, 4, 6]




Создать функцию reject с двумя входными параметрами (массив list и функция predicate) которая возвращает массив, содержащий все значения list, за исключением элементов, для которых функция predicate вернула значение true. Т.е. reject является «антонимом» filter.
Пример работы:
reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]




Создать функцию every с двумя входными параметрами (массив list и функция predicate). Вернёт true, если для каждого значения из list predicate вернёт true.
Пример работы:
every([2, 4, 5], function(num) { return num % 2 == 0; });
// => false




Создать функцию some с двумя входными параметрами (массив list и функция predicate). Вернёт true, если хотя бы для одного значения из list predicate вернёт true.
Пример работы:
some([2, 4, 5], function(num) { return num % 2 == 0; });
// => true




Создать функцию partition с двумя входными параметрами (массив array и функция predicate). Разобъёт массив array на две части: одна - для элементов которой функция predicate вернёт true, и другая - для всех остальных.
Пример работы:
partition([0, 1, 2, 3, 4, 5], function(num) { return num % 2 == 0; });
// => [[0, 2, 4], [1, 3, 5]]




Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
Пример работы:
extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}




Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined) свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
Пример работы:
defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}




Создать функцию random с двумя (или одним) входными параметрами (min, max). Возвращает случайное целое число, в диапазоне от min до max, включительно. Если вы передали только один агрумент, будет использован диапазон от 0 до переданного числа (т.е. до max).
Пример работы:
random(0, 100);
// => 42