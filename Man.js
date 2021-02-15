var Helper = require("./Helper");

module.exports = class Man extends Helper{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 0;
    }
    getNewCoordinates() {
        super.getNewCoordinates();
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var newCell = random(this.chooseCell(Math.round(random(1))));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (newCell) {
                matrix[this.y][this.x] = 1;
                var newGrass = new Grass(this.x, this.y, 1);
                grassArr.push(newGrass);
            }
            else {
                matrix[this.y][this.x] = 0;
            }
            matrix[newY][newX] = this.index;
            this.y = newY;
            this.x = newX;
        }
    }

    eat() {


        var newCell = random(this.chooseCell(5));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in stoneArr) {
                if (newX == stoneArr[i].x && newY == stoneArr[i].y) {
                    stoneArr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy++;

        }
    }

    mul() {
        var newCell = random(this.chooseCell(0));

        if (this.energy >= 2 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.energy = 0;
        }
    }
}