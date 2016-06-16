
/*
 * Copyright (c) 2016. Created by Iakov Kosyakov.
 * www.iakovk.ru
 */

function clear() {
    for(var i = 1; i < 4; i++){
        document.getElementById(i).style.display = "none";
    }
}

function showFunc(i) {
    clear();
    document.getElementById(i).style.display = "block";
}

function getSixteen(a) {
    var i = 0, b = [], c = [];
    while (a > 0){
       b[i] = a % 16;
       switch (b[i]){
           case 10: b[i] = 'A'; break;
           case 11: b[i] = 'B'; break;
           case 12: b[i] = 'C'; break;
           case 13: b[i] = 'D'; break;
           case 14: b[i] = 'E'; break;
           case 15: b[i] = 'F';
       }
       c[i] = Math.ceil(a / 16);
    }
}

function getColor() {
    var str = '';
    var param = {};
    for(var k = 1; k<4; k++){
        param[k] = document.getElementById('color'+ k).value;
        if ((param[k] >= 0) && (param[k] <= 255)){
            str += parseInt(param[k],16) + ' ';
        } else {
            str += NaN + ' ';
        }
    }
    document.getElementById("console").innerHTML = str;
}