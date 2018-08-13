var first = function (array) {
    return array[0];
};

var last = function (array) {
    return array[array.length - 1];
};

var min = function (array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

var max = function (array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

var compact = function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            result[result.length] = array[i];
        }
    }
    return result;
};

var contains = function (array, value) {
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

var size = function (array) {
    return array.length;
};

var isNull = function (value) {
    if (value === null) {
        return true;
    }
    return false;
};

var isBoolean = function (value) {
    if (value === true || value === false) {
        return true;
    }
    return false;
};

var without = function (array, value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            result.push(array[i]);
        }
    }
    return result;
};

var reverse = function (array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
};

var join = function (array, divider) {
    var result = '';
    if (divider === undefined) {
        divider = ',';
    }
    ;
    for (var i = 0; i < array.length; i++) {
        result += array[i] + divider;
    }
    return result;
};

!!!!!
var indexOf = function (array, value) {
    var returnedFirstIndexl;
    for (var i = 0; i < array.length; i++) {
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
    for (var i = array.length; i >= 0; i--) {
        if (array[i] === value) {
            returnedLastIndex = i;
            break;
        }
    }
    return returnedLastIndex === undefined ? -1 : returnedLastIndex;
};
!!!
var concat = function (array1, array2) {
    var result = [];
    for (var i = 0; i < array1.length; i++) {
        result[result.length] = array1[i];
    }
    for (var i = 0; i < array2.length; i++) {
        result[result.length] = array2[i];
    }
    return result;
};

var push = function (array, value) {
    array[array.length] = value;
    //return array;
};

var sum = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

var multiply = function (array) {
    var multiply = 1;
    for (var i = 0; i < array.length; i++) {
        multiply *= array[i];
    }
    return multiply;
};

var keys = function (object) {
    var result = [];
    for (var key in object) {
        result[result.length] = key;
    }
    return result;
};

var values = function (object) {
    var result = [];
    for (var key in object) {
        result[result.length] = object[key];
    }
    return result;
};

var pairs = function (object) {
    var result = [];
    for (var key in object) {
        result[result.length] = [key, object[key]];
    }
    return result;
};

var invert = function (object) {
    var result = {};
    for (var key in object) {
        result[object[key]] = key;
    }
    return result;
};

!!!!!!!
var omit = function (object, removeValue) {
    var result = {};
    for (var key in object) {
        if (key === removeValue) ;
        else {
            result[key] = object[key];
        }
    }
    return result;
};

!!!!
var has = function (object, key) {
    return (key in object);
};

var isMatch = function (object1, object2) {
    for (var key in object2) {
        return object1[key] === object2[key];
    }
};

var isEmpty = function (collection) {
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
                if (array[j] === array[i]) continue goto;
            }
            returnedArray[returnedArray.length] = array[i];
        }
    return returnedArray;
};

//22222222222222222222222222222222222222222222222
var sort = function (array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < (array.length - 1); j++) {
            if (array[j] > array[j + 1]) {
                var max = array[j];
                var min = array[j + 1];
                array[j] = min;
                array[j + 1] = max;
            }
        }
    }
    return array;
};

var getMatrixSum = function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum;
};

var getMatrixSumByDiagonal = function (array) {
    var sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i][i];
    }
    return sum;
};

var each = function (array, iteratee) {
    for (var i = 0; i < array.length; i++) {
        iteratee(array[i], i)
    }
};

var map = function (array, iteratee) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[result.length] = iteratee(array[i]);
    }
    return result;
};

var intersection = function (array1, array2) {
    var returnedArray = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            returnedArray[returnedArray.length] = array1[i];
        }
    }
    return returnedArray;
};

var findIndex = function (array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]) === true) return i;
    }
    return -1;
};

var find = function (list, predicate) {
    //for (var i = 0 ; i < list.length; i++)
    for (var i in list) {
        if (predicate(list[i]) === true) return list[i];
    }
    return undefined;
};

var filter = function (list, predicate) {
    var result = [];
    for (var i in list) {
        if (predicate(list[i]) === true) {
            result[result.length] = list[i];
        }
    }
    return result;
};

var reject = function (list, predicate) {
    var result = [];
    for (var i in list) {
        if (predicate(list[i]) === false) {
            result[result.length] = list[i];
        }
    }
    return result;
};

//что возращать для пустого масива, null, 0?
// Создать функцию every с двумя входными параметрами (массив list и функция predicate). Вернёт true, если для каждого значения из list predicate вернёт true.
// Пример работы:
//  every([2, 4, 5], function(num) { return num % 2 == 0; });
// => false

var every = function (list, predicate) {
    for (var i in list) {
        if (predicate(list[i]) !== true) return false;
    }
    return true;
};

var some = function (list, predicate) {
    for (var i in list) {
        if (predicate(list[i]) === true) return true;
    }
    return false;
};

var partition = function (array, predicate) {
    var paired = [];
    var unpaired = [];
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i]) === true) {
            paired[paired.length] = array[i];
        }
        else {
            unpaired[unpaired.length] = array[i];
        }
    }
    result[0] = paired;
    result[1] = unpaired;
    return result;
};

var extend = function (destination, source) {
    var result = destination;
    for (var key in source) {
        result[key] = source[key];
    }
    return result;
};

var defaults = function (object, defaultO) {
    var result = object;
    for (var key in defaultO) {
        if (key in object === false) {
            result[key] = defaultO[key]
        }
    }
    return result;
};

var random = function (min, max) {
    var result;
    if (max === undefined) {
        max = min;
        min = 0;
    }
    result = Math.round(min - 0.5 + Math.random() * (max - min + 1));
    return result;
};