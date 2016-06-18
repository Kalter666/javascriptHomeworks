
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

function toSixteen(a) {//a= 25
    var i = 0, b = [], str = '';
    while ((a > 0) && (i<100)){
       b[i] = a % 16;//Остаток от / 16, b[0] = 9
       switch (b[i]){
           case 10: b[i] = 'A'; break;
           case 11: b[i] = 'B'; break;
           case 12: b[i] = 'C'; break;
           case 13: b[i] = 'D'; break;
           case 14: b[i] = 'E'; break;
           case 15: b[i] = 'F'; break;
       }
      // a = (a / 16).toFixed(0); не работает
        a = Math.floor(a / 16);
        str = b[i].toString() + str;
       i++;
    }
    if (i==100){
        str = 'зациклилось!!'
    }
    return str + '<br>';
}

function getColor() {
    var str = '';
    var param = {};
    for(var k = 1; k<4; k++){
        param[k] = document.getElementById('color'+ k).value;
        if ((param[k] >= 0) && (param[k] <= 255)){
            str += toSixteen(param[k]) + ' ';
        } else {
            str += NaN + ' ';
        }
    }
    document.getElementById("console").innerHTML = str;
}

function GetDiv(a) {
    if ((a >= 0) && (a<=999)){
        this.units = a % 10;
        if (Math.floor(a / 10)>0){
            this.dozens = Math.floor(a / 10) % 10;
        } else {
            this.dozens = 0;
        }
        if (Math.floor(a/100)>0){
            this.hundreds = Math.floor(a/100) % 10;
        }else {
            this.hundreds = 0;
        }
    }
}

function showDiv() {
    var ex2= new GetDiv(document.getElementById("numbfor2").value);
    if (typeof ex2.units == 'undefined'){
        document.getElementById("console").innerHTML = 'числа от 0 до 999';
    }else {
        document.getElementById("console").innerHTML = 'единицы: ' + ex2.units + ', десятки: ' + ex2.dozens + ', сотни: ' + ex2.hundreds;
    }

}

function objectToQueryString(obj) {
    var str = '';
    for(var key in obj)
        if (obj.hasOwnProperty(key)) {
            str += obj[key].replace(/:/g,"=");
        }
    return str.replace(/'/g,"").replace(/ /g,'').replace(/,/g,'&');
}

function show3rd() {
    document.getElementById("console").innerHTML = objectToQueryString(document.getElementById("Query").value);
}