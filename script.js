// var matrix = [
//     [0, 0, 0, 0, 0, 5, 6],
//     [0, 0, 0, 0, 0, 5, 5],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ];

let matrix = []; // Մատրիցի ստեղծում
let rows = 25; // Տողերի քանակ
let columns = 25; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random() * 100);
if (a >= 0 && a < 70) {
matrix[y][x] = 0; // Մատրիցի 75 տոկոսը կլինի 0
}
if (a >= 70 && a < 83) {
matrix[y][x] = 1; // Մատրիցի 8 տոկոսը կլինի 1
}
else if (a >= 83 && a < 90) {
matrix[y][x] = 2; // Մատրիցի 7 տոկոսը կլինի 2
}
else if (a >= 90 && a < 95) {
matrix[y][x] = 3; // Մատրիցի 5 տոկոսը կլինի 3
}
else if (a >= 95 && a < 98) {
matrix[y][x] = 4; // Մատրիցի 3 տոկոսը կլինի 4
}
else if (a >= 98 && a < 100) {
matrix[y][x] = 6; // Մատրիցի 2 տոկոսը կլինի 6
}
}
}

// stex zangvacnery verjum Arr barov
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var stoneMakerArr = [];
var stoneArr = [];
var manArr = [];
var side = 20;


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    
//pttvum em matrix mejov u stexcum em object

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var et = new GrassEater(x,y,2);
                grassEaterArr.push(et);
                
            }
            else if (matrix[y][x] == 3) {
                var ete = new Predator(x,y,3);
                predatorArr.push(ete);
                
            }
            else if (matrix[y][x] == 4) {
                var se = new StoneMaker(x,y,4);
                stoneMakerArr.push(se);
                
            }
            else if (matrix[y][x] == 5) {
                var st = new Stone(x,y,5);
                stoneArr.push(st);
                
            }
            else if (matrix[y][x] == 6) {
                var mani = new Man(x,y,6);
                manArr.push(mani);
                
            }
        }
    }
 
}
//draw uxaki nerkuma
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
        }
    }

    //kanchum em methodnery
    for (var i in grassArr) {
        grassArr[i].mul();
    }
     for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();        
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();        
    }
    for (var i in stoneMakerArr) {
        stoneMakerArr[i].move();
        stoneMakerArr[i].eat(); 
        stoneMakerArr[i].mul();  
    }
    for (var i in manArr) {
        manArr[i].move();
        manArr[i].eat(); 
        manArr[i].mul();
    }
}