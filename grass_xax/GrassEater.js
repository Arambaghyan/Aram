class GrassEater {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.energy = 10;
    this.multiply = 0;
    this.index = index;
    this.directions = [];
  }

  getNewCoordinates() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }


  chooseCell(character) {
    this.getNewCoordinates();
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[x][y] == character) {
          found.push(this.directions[i]);
        }
      }

    }
    return found;

  }


  move() {
    var newCell = random(this.chooseCell(0));
    if (newCell) {
      var newX = newCell[0];
      var newY = newCell[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = this.index;
      this.x = newX;
      this.y = newY;
      this.energy--;
    }
  }
  mul() {
    var newCell = random(this.chooseCell(0));
    if (this.energy >= 10 && newCell) {
      var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
      grassEaterArr.push(newGrassEater);
      matrix[newCell[1]][newCell[0]] = this.index;
      this.energy = 0;
    }
  }


  eat() {
    var grass = random(this.chooseCell(1));
    if (grass) {
      var newX = grass[0];
      var newY = grass[1];
      matrix[newY][newX] = this.index;
      matrix[this.y][this.x] = 0;
      for (var i in grassArr) {
        if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          break;
        }
      }
      this.x = newX;
      this.y = newY;
      this.energy++;
    }
  }
 
  die() {
    if (this.energy <= 2) {
      matrix[this.y][this.x] = 0;
      for (var i in grassEaterArr) {
        if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
          grassEaterArr.splice(i, 1);
          
        }
        break;
      }
    }
  }
}

