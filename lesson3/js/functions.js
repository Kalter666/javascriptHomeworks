/**
 * Created by kalte on 6/7/2016.
 */
function FizzBuzz() {
    var k, str = '';
    for(var i = 1; i < 101; i++){
        if ((i % 3 == 0) && (i % 5 == 0)) {
            k = '<span class="fizzbuzz">FizzBuzz</span>';
        } else {
            k = i;
        }
        str = str + k + '<br>';
    }
    document.getElementById("console").innerHTML= str;
}

function getSharps(i) { //Функция возвращает #  в вол-ве i
    var str = ''; // string accumulator
    while(i > 0){
        str = str + '#';
        i--;
    }
    return str;
}

function triangle() {
    var str = '';
    for (var i = 1; i < 8; i++){
        str = str + getSharps(i) + '\n';
    }
    document.getElementById("console").innerHTML = '<pre>' + str + '</pre>';
}

function oneByOne(i) { // Через 1 первый всегда пробел
    var str = '';
    var PJSharp = false;
    while (i > 0){
        switch (PJSharp){
            case false: str = str + ' '; PJSharp = true; break;
            case true: str = str + '#'; PJSharp = false;
        }
        i--;
    }
    return str;
}

function oneBySecond(i) { // Через 1 первый всегда пробел
    var str = '';
    var PJSharp = true;
    while (i > 0){
        switch (PJSharp){
            case false: str = str + ' '; PJSharp = true; break;
            case true: str = str + '#'; PJSharp = false;
        }
        i--;
    }
    return str;
}

function chessBoard() {
    var boar = true;
    var str = '';
    var i = document.getElementById("x").value;
    var j = document.getElementById("y").value;
    for (; i > 0; i--){
        switch (boar){
            case false: str = str + oneBySecond(j) + '\n'; boar = true; break;
            case true: str = str + oneByOne(j) + '\n'; boar = false;
        }
    }
    document.getElementById("console").innerHTML = '<pre>' + str + '</pre>';
}

function clear() {
    for(var i = 1; i < 4; i++){
        document.getElementById(i).style.display = "none";
    }
}

function showFunc(i) {
    clear();
    switch (i){
        case 1:  document.getElementById(i).style.display = "block"; break;
        case 2:  document.getElementById(i).style.display = "block"; break;
        case 3:  document.getElementById(i).style.display = "block"; break;
    }
}