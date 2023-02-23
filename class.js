class Helper {
    constructor(x, y, index){
        this.x = x;
        this.y = y;
        this.index = index;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

}

class  extends Helper{
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
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

    //yntruma shrjaka 8 vandakner
    chooseCell(character) {
        return super.chooseCell(character);
    }

    // bazmanuma azat vandakneri himan vra
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        // console.log(newCell, this.multiply);
        if (this.multiply >= 8 && newCell) {
            console.log()
            // var new = new (newCell[0], newCell[1], this.index);
            // Arr.push(new);
            // matrix[newCell[1]][newCell[0]] = 1;
            // this.multiply = 0;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

class Eater extends Helper {
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
        var newCell = random(this.chooseCell(0));

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
        var newCell = random(this.chooseCell(1));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in Arr) {
                if (newX == Arr[i].x && newY == Arr[i].y) {
                    Arr.splice(i, 1);
                    break;
                }
            }

            this.y = newY;
            this.x = newX;
            this.energy += 2;
        }
    }

    mul() {

        var newCell = random(this.chooseCell(0));

        if (this.energy >= 10 && newCell) {
            var newEater = new Eater(newCell[0], newCell[1], this.index);
            EaterArr.push(newEater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;
        }
    }

    die() {

        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in EaterArr) {
                if (this.x == EaterArr[i].x && this.y == EaterArr[i].y) {
                    EaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

class Eater extends Helper {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 16;
    }
    //vorpes method
    getNewCoordinates() {
        super.getNewCoordinates();
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);    
    }

    move() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;


            this.y = newY;
            this.x = newX;
            this.energy-=2;

        }

    }

    eat() {
        var newCell = random(this.chooseCell(2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in EaterArr) {
                if (newX == EaterArr[i].x && newY == EaterArr[i].y) {
                    EaterArr.splice(i, 1);
                    break;
                }
            }


            this.y = newY;
            this.x = newX;
            this.energy += 6;

        }
    }

    mul() {

        var newCell = random(this.chooseCell(0));

        if (this.energy >= 15 && newCell) {
            var neweater = new Eater(newCell[0], newCell[1], this.index);
            eaterArr.push(neweater);
            matrix[newCell[1]][newCell[0]] = 3;
            this.energy = 12;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in eaterArr) {
                if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
                    eaterArr.splice(i, 1)
                    break;
                }
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

class Maker extends Helper{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 0;
    }

    //vorpes method
    getNewCoordinates() {
        super.getNewCoordinates();
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            this.y = newY;
            this.x = newX;
        }
    }

    eat() {
        var newCell1 = this.chooseCell(2);
        var newCell2 = this.chooseCell(3);
        var newCell = random(newCell1.concat(newCell2));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;

            for (var i in EaterArr) {
                if (newX == EaterArr[i].x && newY == EaterArr[i].y) {
                    EaterArr.splice(i, 1);
                    break;
                }
            }

            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
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

        if (this.energy >= 1 && newCell) {
            var newxot = new xot(newCell[0], newCell[1], this.index);
            xotArr.push(newxot);
            matrix[newCell[1]][newCell[0]] = 5;
            this.energy = 0;
        }
    }
}



class xot extends Helper{
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 0;
    }

    getNewCoordinates() {
        super.getNewCoordinates();
    }
}



class Man extends Helper{
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
                var new = new (this.x, this.y, 1);
                Arr.push(new);
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

            for (var i in xotArr) {
                if (newX == xotArr[i].x && newY == xotArr[i].y) {
                    xotArr.splice(i, 1);
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
            var new = new (newCell[0], newCell[1], this.index);
            Arr.push(new);
            matrix[newCell[1]][newCell[0]] = 1;
            this.energy = 0;
        }
    }
}

////////