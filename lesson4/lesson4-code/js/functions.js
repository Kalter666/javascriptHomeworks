
/*
 * Copyright (c) 2016. Created by Iakov Kosyakov.
 * www.iakovk.ru
 */

function clear() {
    for(var i = 1; i < 5; i++){
        document.getElementById(i).style.display = "none";
    }
}

function showFunc(i) {
    clear();
    document.getElementById(i).style.display = "block";
}

function showMin() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    if (a == b){
        document.getElementById("console").innerHTML = a + " = " + b;
    } else {
        if (a < b){
            document.getElementById("console").innerHTML = a;
        } else {
            document.getElementById("console").innerHTML = b;
        }
    }
}

function countBs(str) {
    var length = str.length;
    var res = 0;
    while (length > 0){
        if (str.charAt(length - 1) === "B"){
            res++;
        }
        length--;
    }
    return res;
}

function showBs() {
    var str = document.getElementById("textFor2.1").value;
    document.getElementById("console").innerHTML = countBs(str);
}

function countChar(str, char) {
    var length = str.length;
    var res = '', k = 0, pos = '';
    if ((char.length > 1) || (char.length > 1)){
        res = 'Только 1 символ';
    } else {
        while (length > 0){
            if (str.charAt(length - 1) === char){
                res += " : " + length;
                k++;
            }
            length--;
        }
    }
    if (k > 1) pos = "позициях"; else pos = "позиции";
    return "символ: " + "&quot" +char+ "&quot" + " встретился " + k + " раз, на " + pos + res;
}

function showCountChar() {
    document.getElementById("console").innerHTML = countChar(document.getElementById("textFor2.2").value,document.getElementById("charFor2.2").value);
}


function isEven(value){
    if (value < 0){
        value *= -1;
    }
    if (value == 0) {
        return true + ', четное';
    }
    if (value == 1) {
        return false + ', нечетное';
    }
    return isEven(value - 2);
}

function showIsEven() {
    document.getElementById("console").innerHTML = isEven(document.getElementById("x").value);
}