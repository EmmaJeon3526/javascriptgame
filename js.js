let height = 6;
let width = 5;

let row = 0;
let col = 0;

let gameOver = false;
let word = "EARTH";


window.onload = function() {
    initialize();
}


function initialize() {

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    // Check if e.code represents a letter key (A-Z)
    if (/^Key[A-Z]$/.test(e.code)) {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter") {
        update();
        row += 1;
        col = 0;
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }

});

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString()); 
        let letter = currTile.innerText;

        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        }
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        }
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        } 
    }
}






// document.addEventListener("keyup", (e) => {
//     if (gameOver) return;

//     if ("keyA" <= e.code && e.code <= "keyZ") {
//         if (col < width) {
//             let currTile = document.getElementById(row.toString() + '-' + col.toString());
//             if (currTile.innerText == "") {
//                 currTile.innerText = e.code[3];
//                 col += 1;
//             }
//         }
//     }
// })
