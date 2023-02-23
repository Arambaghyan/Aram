var Helper = require("./Helper");

module.exports = class GrassEater extends Helper {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;
    }
    //vorpes method
    getNewCoordinates() {
        super.getNewCoordinates();
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    //qayluma
    move() {

        //yntruma vandak
        var newCell = super.random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy--;

        }

    }

    eat() {
        var newCell = super.random(this.chooseCell(1));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in GrassArr) {
                if (newX == GrassArr[i].x && newY == GrassArr[i].y) {
                    GrassArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }
    }

    mul() {

        var newCell = super.random(this.chooseCell(0));

        if (this.energy >= 10 && newCell) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            grassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;
        }
    }

    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in GrassEaterArr) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }
}