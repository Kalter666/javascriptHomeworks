/**
 * Created by kalte on 6/23/2016.
 */
//$('.isBlack').css('color','isBlack');
function isBlack(tr,td) {
    if (tr % 2 == 1) {// нечетная строка
        return td % 2 == 1;
    } else { //четная строка
        return td % 2 != 1;
    }
}

function findLit(j) {
    switch (j){
        case 1: return 'A'; break;
        case 2: return 'B'; break;
        case 3: return 'C'; break;
        case 4: return 'D'; break;
        case 5: return 'E'; break;
        case 6: return 'F'; break;
        case 7: return 'G'; break;
        case 8: return 'H'; break;
        default: return '';
    }
}

function findFigure(i,j) {
    if ( (j == 7)){
        return 'чП';
    } else if (j == 2){
        return 'бП';
    } else if (j == 1){
        switch (i){
            case 1: return 'бТура'; break;
            case 2: return 'бКонь'; break;
            case 3: return 'бСлон'; break;
            case 4: return 'бКинг'; break;
            case 5: return 'бДама'; break;
            case 8: return 'бТура'; break;
            case 7: return 'бКонь'; break;
            case 6: return 'бСлон'; break;
            default: return '';
        }
    } else if(j==8){
        switch (i){
            case 1: return 'чТура'; break;
            case 2: return 'чКонь'; break;
            case 3: return 'чСлон'; break;
            case 4: return 'чКинг'; break;
            case 5: return 'чДама'; break;
            case 8: return 'чТура'; break;
            case 7: return 'чКонь'; break;
            case 6: return 'чСлон'; break;
            default: return '';
        }

    } else return '';
}

function drawChessBoard() {
    jQuery("#container").append('<table id="chessTable"></table>');
    $('#chessTable').append('<tbody id="chessboard"></tbody>');
    for (var i = 0; i<9; i++){
        for (var j = 0; j<9; j++){
            if ( i == 0){
                $('#chessboard').append('<tr id="'+j+'"></tr>');
                $('#' + j).append('<td>'+findLit(j)+'</td>');
            } else if (j==0){
                $('#' + j).append('<td>'+i+'</td>');
            } else {
                if (isBlack(j,i)){
                    $('#' + j).append('<td>'+findFigure(i,j)+'</td>');
                } else {
                    $('#' + j).append('<td style="background-color: #a50000">'+findFigure(i,j)+'</td>');
                }
            }

        }
    }
}
$(document).ready(drawChessBoard());