class GrassEater extends LivingCreature {
  constructor(x, y, index){
      super(x, y, index);
      this.energy = 8;
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

