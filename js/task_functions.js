var first  = function(array) {
    return array[0];
};

var last = function(array) {
    return array[array.length-1];
};

var min = function(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

var max = function(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

var compact = function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            result[result.length] = array[i];
        }
    }
    return result;
};

var contains = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

var isUndefined = function(value) {
    if (value === undefined) {
        return true;
    }
    return false;
};

var size = function(array) {
    return array.length;
};

var isNull = function(value) {
    if (value === null) {
        return true;
    }
    return false;
};

var isBoolean = function(value) {
    if (value === true || value === false) {
        return true;
    }
    return false;
};

var without = function(array, value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            result.push(array[i]);
        }
    }
    return result;
};

var reverse = function(array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
};

var join = function(array, divider) {
    var result = '';
    if (divider === undefined) {
        divider = ',';
    };
    for (var i = 0; i < array.length; i++){
        result +=  array[i] + divider;
    }
    return result;
};

!!!!!
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
!!!!!!
var lastIndexOf = function (array, value) {
    var returnedLastIndex;
    for (var i = array.length; i >= 0; i--){
        if (array[i] === value) {
            returnedLastIndex = i;
            break;
        }
    }
    return returnedLastIndex === undefined ? -1 : returnedLastIndex;
};
!!!
var concat = function(array1, array2) {
    var result = [];
    for (var i = 0; i <array1.length; i++) {
        result[result.length] = array1[i];
    }
    for (var i = 0; i <array2.length; i++) {
        result[result.length] = array2[i];
    }
    return result;
};

var push = function(array, value) {
    array[array.length] = value;
    //return array;
};

var sum = function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
         sum += array[i];
    }
    return sum;
};

var multiply = function(array) {
    var multiply = 1;
    for (var i = 0; i < array.length; i++) {
        multiply *= array[i];
    }
    return multiply;
};

var keys = function(object) {
    var result = [];
    for (var key in object) {
        result[result.length] = key;
    }
    return result;
};

var values = function(object) {
    var result = [];
    for (var key in object) {
        result[result.length] = object[key];
    }
    return result;
};

var pairs = function(object) {
    var result = [];
    for (var key in object) {
        result[result.length] = [key, object[key]];
    }
    return result;
};

var invert = function(object) {
    var result = {};
    for (var key in object) {
        result[object[key]] = key;
    }
    return result;
};

!!!!!!!
var omit = function(object, removeValue) {
    var result = {};
    for (var key in object) {
        if (key === removeValue);
        else {
            result[key] = object[key];
        }
    }
    return result;
};

!!!!
var has = function(object, key) {
    return (key in object);
};

var isMatch = function(object1, object2) {
    for (var key in object2) {
        return object1[key] === object2[key];
    }
};

var isEmpty = function(collection) {
    for (var key in collection) {
        return false;
    }
    return true;
};

//22222222222222222222222222222222222
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

//22222222222222222222222222222222222222222222222
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

var getMatrixSum = function(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
            sum += array[i][j];
        }
    }
    return sum;
};

var getMatrixSumByDiagonal = function(array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i][i];
    }
    return sum;
};

var each = function(array, iteratee) {
    for (var i = 0; i < array.length; i++) {
        iteratee(array[i], i)
    }
};

var map = function(array, iteratee) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[result.length] = iteratee(array[i]);
    }
    return result;
};

var intersection = function (array1, array2) {
    var returnedArray = [];
        for (var i = 0; i < array1.length; i++) {
            if ( array1[i] === array2[i]) {
                    returnedArray[returnedArray.length] = array1[i];
                }
            }
    return returnedArray;
};

var findIndex = function(array, predicate){
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]) === true) return i;
    }
    return -1;
};




Создать функцию find с двумя входными параметрами (массив list и функция predicate). Функция find вызывает для каждого элемента list
функцию сравнения predicate, возвращая первый элемент, для которого predicate вернула true, или undefined, если ни один элемент не подошёл.
Пример работы:
find([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => 2




Создать функцию filter с двумя входными параметрами (массив list и функция predicate) которая проходит через каждое значение list,
    возвращая массив всех значений, для которых predicate вернул true.
Пример работы:
filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// => [2, 4, 6]




Создать функцию reject с двумя входными параметрами (массив list и функция predicate) которая возвращает массив, содержащий все значения list,
за исключением элементов, для которых функция predicate вернула значение true. Т.е. reject является «антонимом» filter.
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




Создать функцию partition с двумя входными параметрами (массив array и функция predicate). Разобъёт массив array на две части:
одна - для элементов которой функция predicate вернёт true, и другая - для всех остальных.
Пример работы:
partition([0, 1, 2, 3, 4, 5], function(num) { return num % 2 == 0; });
// => [[0, 2, 4], [1, 3, 5]]




Создать функцию extend с двумя входными параметрами (объект destination и объект source). Скопирует все свойства из объекта
source в объект destination. Если объект source имеет одноименные свойства с объектом destination, то значения destination будут затёрты значениями из source.
Пример работы:
extend({name: 'moe'}, {age: 50});
// => {name: 'moe', age: 50}




Создать функцию defaults с двумя входными параметрами (объект object и объект default). Функция defaults проинициализирует неопределённые (undefined)
свойства объета значениями одноимённых свойств из default. Если же какие-то свойства объекта уже определены, то они не будут изменены.
Пример работы:
defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"});
// => {flavor: "chocolate", sprinkles: "lots"}




Создать функцию random с двумя (или одним) входными параметрами (min, max). Возвращает случайное целое число, в диапазоне от min до max,
включительно. Если вы передали только один агрумент, будет использован диапазон от 0 до переданного числа (т.е. до max).
Пример работы:
random(0, 100);
// => 42