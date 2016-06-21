
/*
 * Copyright (c) 2016. Created by Iakov Kosyakov.
 * www.iakovk.ru
 */

function arrayToList(arr) {
    var list = {
        makeLink: function(arg1,arg2){
            this.arg = arg1;
            this.next = arg2;
        }
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
        arr[i] = arr[arr.length - i];
        arr[arr.length - i] = a;
    }
    return arr;
}