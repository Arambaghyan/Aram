// class Mard {
//     constructor(x,y,index) {
//         this.x = x;
//         this.y = y;
//         this.energy = 100;
//         this.multiply = 0;
//         this.index = index;
//         this.directions = [];
//     }



//   getNewCoordinates(){
//         this.directions = [
//        [this.x - 1, this.y - 1],
//        [this.x    , this.y - 1],
//        [this.x + 1, this.y - 1],
//        [this.x - 1, this.y    ],
//        [this.x + 1, this.y    ],
//        [this.x - 1, this.y + 1],
//        [this.x    , this.y + 1],
//        [this.x + 1, this.y + 1]
//     ];
//   }


//     chooseCell(character) {
//       this.getNewCoordinates();
//       var found = [];
//       for (var i in this.directions) {
//           var x = this.directions[i][0];
//           var y = this.directions[i][1];
//           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
//               if (matrix[x][y] == character) {
//                   found.push(this.directions[i]);
//               }
//           }

//       }
//       return found;

//     }

//     move() {
//       var newCell = random(this.chooseCell(0));
//       if (newCell) {
//         var newX = newCell[0];
//         var newY = newCell[1];
//         matrix[newX][newY] = 0;
//         this.x = newX;
//         this.y = newY;
//         this.energy++;
//       }
//     }


//     mul() {
//       var newCell = random(this.chooseCell(0));
//       if (this.energy >= 5 && newCell) {
//         var newmard = new Mard (newCell[0], newCell[1], 4);
//         mardArr.push(newmard);
//         matrix[newCell[1]][newCell[0]] = this.index;
//         this.energy = 0;
//       }
//     }

//     eat() {
//         const grCells =  this.chooseCell(1)
//         const greatCells = this.chooseCell(2)
//         const kndCells = this.chooseCell(3)
//         const allCells = [... grCells, ... greatCells, ... kndCells];
//         const newCell = random (allCells);

//         if (newCell) {
//         var newX = kendaniArr[0];
//         var newY = kendaniArr [1];
//         // matrix[newY][newX] = this.index;
//         matrix[this.y][this.x] = 0;
//         for (var i in kendaniArr) {
//           if (newX == kendaniArr[i].x && newY == kendaniArr[i].y) {
//             kendaniArr.splice(i, 1);
//             break;
//           }
//         }
//         this.x = newX;
//         this.y = newY;
//         this.energy++;
//       }
//     }



//     die() {
//       if (this.energy < -1) {
//         matrix[this.y][this.x] = 0;
//         for (var i in mardArr) {
//           if (this.x == mardArr[i].x && this.y == mardArr[i].y ) {
//            mardArr.splice(i, 1);

//         }
//       }
//   }
//   }
// }









class Mard {
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
      this.energy-=2
    }
  }
  mul() {
    var newCell = random(this.chooseCell(0));
    if (this.energy >= 30 && newCell) {
      var newmard = new Mard(newCell[0], newCell[1], 4);
      mardArr.push(newmard);
      matrix[newCell[1]][newCell[0]] = this.index;
      this.energy++;
    }
  }


  eat() {
    var kendani = random(this.chooseCell(3));
    if (kendani) {
      var newX = kendani[0];
      var newY = kendani[1];
      matrix[newY][newX] = this.index;
      matrix[this.y][this.x] = 0;
      for (var i in kendaniArr) {
        if (newX == kendaniArr[i].x && newY == kendaniArr[i].y) {
          kendaniArr.splice(i, 1);
          break;
        }
      }
      this.x = newX;
      this.y = newY;
      this.energy += 2;
    }
  }



  die() {
    if (this.energy < 0) {
      matrix[this.y][this.x] = 0;
      for (var i in mardArr) {
        if (mardArr[i].x == this.x && mardArr[i].y == this.y) {
          mardArr.splice(i, 1);
        }
      }
    }
  }
}