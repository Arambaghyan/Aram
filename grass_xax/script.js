genMatrix = (n, m) => {
  var matrix = [];
  for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {
      var r = Math.floor(Math.random() * 100);
      if (r < 20) r = 0;
      else if (r < 40) r = 1;
      else if (r < 55) r = 2;
      else if (r < 75) r = 3;
      else if (r < 85) r = 4;
      matrix[y][x] = r;
    }
  }
  return matrix;
};

var grassArr = [];
var grassEaterArr = []
var kendaniArr = []
var mardArr = []

var side = 30;
matrix = genMatrix(35, 35);

function setup() {
  frameRate(5);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[j][i] === 1) {
        const gr = new Grass(i, j, 1);
        grassArr.push(gr);
      }
      else if (matrix[j][i] === 2) {
        const great = new GrassEater(i, j, 2);
        grassEaterArr.push(great);
      }
      else if (matrix[j][i] === 3) {
        const knd = new Kendani(i, j, 3);
        kendaniArr.push(knd);
      }
      else if (matrix[j][i] === 4) {
        const mrd = new Mard(i, j, 4);
        mardArr.push(mrd);
      }

    }

  }
}

function draw() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
      }
      else if (matrix[y][x] == 3) {
        fill("black");
      }
      else if (matrix[y][x] == 4) {
        fill("#FBCB7B");
      }
      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }

      rect(x * side, y * side, side, side);
    }
  }
  for (const i in grassArr) {
    grassArr[i].mul();
  }
  for (const i in grassEaterArr) {
    grassEaterArr[i].eat();
    grassEaterArr[i].move();
    grassEaterArr[i].mul();
    grassEaterArr[i].die();
  }
  for (const i in kendaniArr) {
    kendaniArr[i].eat();
    kendaniArr[i].move();
    kendaniArr[i].mul();
    kendaniArr[i].die();

  }
  for (const i in mardArr) {
    mardArr[i].eat();
    mardArr[i].move();
    mardArr[i].mul();
    mardArr[i].die();
  }
};

