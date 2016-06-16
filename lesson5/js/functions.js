
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