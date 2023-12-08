

// chess array

var chess_initial = [['be1', 'bh1', 'bc1', 'bq', 'bk', 'bc2', 'bh2', 'be2'],
['bs1', 'bs2', 'bs3', 'bs4', 'bs5', 'bs6', 'bs7', 'bs8'],
['#', '#', '#', '#', '#', '#', '#', '#'],
['#', '#', '#', '#', '#', '#', '#', '#'],
['#', '#', '#', '#', '#', '#', '#', '#'],
['#', '#', '#', '#', '#', '#', '#', '#'],
['ws8', 'ws7', 'ws6', 'ws5', 'ws4', 'ws3', 'ws2', 'ws1'],
['we2', 'wh2', 'wc2', 'wq', 'wk', 'wc1', 'wh1', 'we1']
]


function findPosition(x) {
    let j = 0;
    let i = 0;
    for (i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            if (chess_initial[i][j] == x) {
                x = [i, j];
                return x;
            }
        }
    }
}

var isvalid = (x) => {
    if (x < 8 && x >= 0) return true;
    else return false;
}

function isBlackPiece(x = 0, y = 0, color = 'b') {
    if (isvalid(x) && isvalid(y)) {
        piece = chess_initial[x][y]
        x = (piece[0] == color) ? true : false;
        return x;
    }
    else return true;
}


function CamelMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let c = 1;
    let oppo = 'w';
    (pieceName[0] == 'w') ? oppo = 'b' : oppo = 'w';
    let color = pieceName[0];
    for (let i = origin[0] + 1; i < 8; i++) {
        pos = [i, origin[1] + c];
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
        c += 1;
    }

    c = 1;
    for (let i = origin[0] + 1; i < 8; i++) {
        pos = [i, origin[1] - c];
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
        c += 1;
    }

    c = 1;
    for (let i = origin[0] - 1; i > -1; i--) {
        pos = [i, origin[1] + c];
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
        c += 1;
    }

    c = 1;
    for (let i = origin[0] - 1; i > -1; i--) {
        pos = [i, origin[1] - c];
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
        c += 1;
    }
    return moves;
}

function ElephantMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let oppo = 'w';
    (pieceName[0] == 'w') ? oppo = 'b' : oppo = 'w';
    let color = pieceName[0];
    for (let i = origin[0] + 1; i < 8; i++) {
        pos = [i, origin[1]];;
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
    }

    for (let i = origin[1] + 1; i < 8; i++) {
        pos = [origin[0], i]
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
    }

    for (let i = origin[0] - 1; i > -1; i--) {
        pos = [i, origin[1]];
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
    }

    for (let i = origin[1] - 1; i > -1; i--) {
        pos = [origin[0], i]
        if (isBlackPiece(...pos, color)) break;
        else {
            if (isBlackPiece(...pos, oppo)) {
                moves.push(pos);
                break;
            }
            else moves.push(pos);
        }
    }

    return moves;
}

function HorseMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let c = 1;
    let oppo = 'w';
    (pieceName[0] == 'w') ? oppo = 'b' : oppo = 'w';
    let color = pieceName[0];
    let shift = [2, -2];
    let turn = [1, -1];
    for (i of shift) {
        for (j of turn) {
            pos = [origin[0] + i, origin[1] + j]
            if (isBlackPiece(...pos, color)) continue;
            else moves.push(pos);
        }
    }
    for (i of turn) {
        for (j of shift) {
            pos = [origin[0] + i, origin[1] + j]
            if (isBlackPiece(...pos, color)) continue;
            else moves.push(pos);
        }
    }

    return moves;
}

function blackSoldierMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let c = 1;
    let turn = [1, -1];
    for (i of turn) {
        pos = [origin[0] + 1, origin[1] + i];
        if (isBlackPiece(...pos)) continue;
        else {
            if (isBlackPiece(...pos, 'w')) moves.push(pos);
        }
    }
    if (chess_initial[origin[0] + 1][origin[1]] == '#') {
        pos = [origin[0] + 1, origin[1]];
        moves.push(pos);
        if (origin[0] == 1 && chess_initial[origin[0] + 2][origin[1]] == '#') {
            pos = [origin[0] + 2, origin[1]]
            moves.push(pos);
        }
    }

    return moves;
}

function whiteSoldierMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let c = 1;
    let turn = [1, -1];
    for (i of turn) {
        pos = [origin[0] - 1, origin[1] + i];
        if (isBlackPiece(...pos, 'w')) continue;
        else {
            if (isBlackPiece(...pos)) moves.push(pos);
        }
    }
    if (chess_initial[origin[0] - 1][origin[1]] == '#') {
        pos = [origin[0] - 1, origin[1]];
        moves.push(pos);
        if (origin[0] == 6 && chess_initial[origin[0] - 2][origin[1]] == '#') {
            pos = [origin[0] - 2, origin[1]]
            moves.push(pos);
        }
    }
    return moves;
}

function QueenMove(pieceName) {
    let moves = [];
    let origin = findPosition(pieceName);
    let oppo = 'w';
    (pieceName[0] == 'w') ? oppo = 'b' : oppo = 'w';
    let color = pieceName[0];

    let xdirmoves = CamelMove(pieceName);
    let plusdirmoves = ElephantMove(pieceName);
    for (m in xdirmoves) {
        moves.push(xdirmoves[m]);
    }
    for (m in plusdirmoves) {
        moves.push(plusdirmoves[m]);
    }
    return moves;
}

function KingMove(pieceName) {
    let oppo = 'w';
    (pieceName[0] == 'w') ? oppo = 'b' : oppo = 'w';
    let color = pieceName[0];
    let moves = [];
    let origin = findPosition(pieceName);

    for (let i = origin[0] - 1; i <= origin[0] + 1; i++) {
        for (let j = origin[1] - 1; j <= origin[1] + 1; j++) {
            let pos = [i, j];
            if (origin == [i, j] || isBlackPiece(...pos, color)) continue;
            else moves.push(pos);
        }
    }
    return moves;
}

// console.log(CamelMove('bc1'));
// console.log(HorseMove('bh1'));
// console.log(HorseMove('wh2'));
// console.log(ElephantMove('be1'));
// console.log(blackSoldierMove('bs1'));
// console.log(whiteSoldierMove('ws4');
// console.log(QueenMove('bq'));
// console.log(KingMove('bk'));

var moves = [];
var turnPieceSelected = true;
var idstr;
const hideDirections = (moves = []) => {
    let disable = document.getElementsByClassName('direct');
    for (const iterator of disable) {
        iterator.style.display = "none";
    }
}
const showDirections = (moves = []) => {
    let highlight;
    for (const pos in moves) {
        let xy = moves[pos];
        highlight = document.querySelector(`.chess-board ul:nth-child(${xy[0] + 1}) li:nth-child(${xy[1] + 1}) div`);
        highlight.style.display = "block";
    }
}

function playTurns() {
    console.log(idstr);
    if (idstr[0] == 'b' && idstr[1] == 's') {
        moves = blackSoldierMove(idstr);
    }
    else if (idstr[0] == 'w' && idstr[1] == 's') {
        moves = whiteSoldierMove(idstr);
    }
    else {
        if (idstr[1] == 'h') {
            moves = HorseMove(idstr);
        }
        else if (idstr[1] == 'e') {
            moves = ElephantMove(idstr);
        }
        else if (idstr[1] == 'c') {
            moves = CamelMove(idstr);
        }
        else if (idstr[1] == 'k') {
            moves = KingMove(idstr);
        }
        else if (idstr[1] == 'q') {
            moves = QueenMove(idstr);
        }
    }
    // console.log(moves)
    hideDirections(moves);
    showDirections(moves);
    turnPieceSelected = true;
}
var active_Piece = 'w';

function changeTurn() {
    if (active_Piece == 'w') {
        $(".white-piece").click(function () {
            idstr = this.id.toString();
            playTurns();
        }
        );
        active_Piece = 'b';
        
    }
    else if (active_Piece == 'b'){
        $(".black-piece").click(function () {
            $("img").off('click', '.white-piece');
            idstr = this.id.toString();
            playTurns();
        }
        );
        active_Piece = 'w';
    }
    console.log('exec');
}

changeTurn();

$(".squares").click(function () {
    let pos = this.id.toString();
    let capture = [+pos[0], +pos[1]];
    if (turnPieceSelected) {
        for (const key of moves) {
            if (capture[0] == key[0] && capture[1] == key[1]) {
                console.log('haspp');
                let check = (document.getElementById(`${key[0]}${key[1]}`));
                let prevpos = findPosition(idstr);
                let mate = (document.getElementById(`${prevpos[0]}${prevpos[1]}`));
                check.innerHTML = mate.innerHTML;
                mate.innerHTML = '<div class="direct"></div>';
                hideDirections(moves);

                chess_initial[key[0]][key[1]] = idstr;
                chess_initial[prevpos[0]][prevpos[1]] = '#';
                turnPieceSelected = false;
                changeTurn();
                break;
            }
        }
    }
    // console.log(pos);
    // console.log(capture);

});