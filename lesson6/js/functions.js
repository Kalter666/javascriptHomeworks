
/*
 * Copyright (c) 2016. Created by Iakov Kosyakov.
 * www.iakovk.ru
 */

function arrayToList(arr) {
    if (arr.length > 1){
        return {value: arr[arr.length - 1], rest: arrayToList(arr.deleteCell(arr.length - 1))};
    } else {
        return {value: arr[arr.length - 1], rest: null};
    }
}

function reverseArray(arr) {
    var res = [];
    for (var i = arr.length - 1; i >= 0; i--){
        res.push(arr[i]);
    }
    return res;
}

function reverseArrayInPlace(arr) {
    var a;
    for(var i = 0; i < Math.floor(arr.length / 2); i++){
        a = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i] = a;
    }
    return arr;
}