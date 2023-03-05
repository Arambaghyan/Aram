var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var eaterArr = [];
var peopleArr = [];
var predatorArr = [];
var kingkongArr = [];
var bombArr = []
var start = false
var side = 18;
var socket = io()

function generateMatrix() {
    for (let i = 0; i < 40; i++) {
        matrix.push([])
        for (let j = 0; j < 40; j++) {
            let k = random([1, 2, 3, 4, 5, 6]);
            matrix[i].push(k);
        }
    }
}



function setup() {

    generateMatrix()
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i, 1);
                grassArr.push(gr);
            }
            else if (matrix[i][j] === 2) {
                const greater = new GrassEater(j, i, 2);
                grassEaterArr.push(greater);
            }
            else if (matrix[i][j] === 3) {
                const eater = new Eater(j, i, 3);
                eaterArr.push(eater);
            }
            else if (matrix[i][j] === 4) {
                const people = new People(j, i, 4);
                peopleArr.push(people);

            }
            else if (matrix[i][j] === 5) {
                const predator = new Predator(j, i, 5);
                predatorArr.push(predator);

            }
            else if (matrix[i][j] === 6) {
                const kingkong = new Kingkong(j, i, 6);
                kingkongArr.push(kingkong);

            }
        }
    }
}

function draw() {

    
    if (frameCount % 5 == 0) {
        var stats = {
            "frameCount": Math.round(frameCount/5),
            "eater": eaterArr.length,
            "grassC": grassArr.length,
            "grasseaterC": grassEaterArr.length,
            "kingkongC": kingkongArr.length,
            "peopleC": peopleArr.length,
            "predatorC": predatorArr.length,
            "bombC": bombArr.length,
        }
        socket.emit("send stats", stats);
    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("aqua")
            }
            else if (matrix[y][x] == 5) {
                fill("purple")
            }
            else if (matrix[y][x] == 6) {
                fill("teal")
            }

            else if (matrix[y][x] == 7) {
                fill("black")
            }




            rect(x * side, y * side, side, side);
            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)


            



            
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }

    for (let i in eaterArr) {
        eaterArr[i].mul();
        eaterArr[i].eat();
        /*eaterArr[i].die();*/
    }

    for (let i in peopleArr) {
        peopleArr[i].mul();
        peopleArr[i].eat();
        peopleArr[i].die();
    }

    for (let i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
        predatorArr[i].die();
    }

    for (let i in kingkongArr) {
        kingkongArr[i].mul();
        kingkongArr[i].eat();
        kingkongArr[i].die();
    }

    // for (let i in bombArr) {
    //     kingkongArr[i].mul();
    //     kingkongArr[i].eat();
    //     kingkongArr[i].die();
    // }
}

function mouseClicked() {
   let y = Math.floor(mouseY/side)
   let x = Math.floor(mouseX/side)
   if (x>= 0, y >= 0){
    matrix[y][x] = 7
   }
}





function setupControlButtons() {
    // button to start
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;

    // button to clear
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;
}






function startButtonHandler() {
    if (playing) {
        console.log("Pause the game");
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        console.log("Continue the game");
        playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

    





















//////////////////////////////////////////////////////////////////////////*  */











var rows = 38;
var cols = 100;

var playing = false;

var grid = new Array(rows);
var nextGrid = new Array(rows);

var timer;
var reproductionTime = 100;

function initializeGrids() {
    for (var i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
        nextGrid[i] = new Array(cols);
    }
}

function resetGrids() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = 0;
            nextGrid[i][j] = 0;
        }
    }
}

function copyAndResetGrid() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            grid[i][j] = nextGrid[i][j];
            nextGrid[i][j] = 0;
        }
    }
}

// Initialize
function initialize() {
    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();
}

// Lay out the board
function createTable() {
    var gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        // Throw error
        console.error("Problem: No div for the drid table!");
    }
    var table = document.createElement("table");

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {//
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

function cellClickHandler() {
    var rowcol = this.id.split("_");
    var row = rowcol[0];
    var col = rowcol[1];

    var classes = this.getAttribute("class");
    if (classes.indexOf("live") > -1) {
        this.setAttribute("class", "dead");
        grid[row][col] = 0;
    } else {
        this.setAttribute("class", "live");
        grid[row][col] = 1;
    }

}

function updateView() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead");
            } else {
                cell.setAttribute("class", "live");
            }
        }
    }
}

function setupControlButtons() {
    // button to start
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;

    // button to clear
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;

    // button to set random initial state
    var randomButton = document.getElementById("random");
    randomButton.onclick = randomButtonHandler;
}

function randomButtonHandler() {
    if (playing) return;
    clearButtonHandler();
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var isLive = Math.round(Math.random());
            if (isLive == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
        }
    }
}

// clear the grid
function clearButtonHandler() {
    console.log("Clear the game: stop playing, clear the grid");

    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";
    clearTimeout(timer);

    var cellsList = document.getElementsByClassName("live");
    // convert to array first, otherwise, you're working on a live node list
    // and the update doesn't work!
    var cells = [];
    for (var i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }

    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetGrids;
}

// start/pause/continue the game
function startButtonHandler() {
    if (playing) {
        console.log("Pause the game");
        playing = false;
        this.innerHTML = "Continue";
        clearTimeout(timer);
    } else {
        console.log("Continue the game");
        playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

// run the life game
function play() {
    computeNextGen();

    if (playing) {
        timer = setTimeout(play, reproductionTime);
    }
}

function computeNextGen() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            applyRules(i, j);
        }
    }

    // copy NextGrid to grid, and reset nextGrid
    copyAndResetGrid();
    // copy all 1 values to "live" in the table
    updateView();
}

// Start everything
window.onload = initialize;