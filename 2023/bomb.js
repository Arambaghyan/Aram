class bomb{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.bomb = 1;
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
    getNewCordinates(){
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
chooseCell(char) {
    this.getNewCordinates();
      let result = [];

      for (let i = 0; i < this.directions.length; i++) {
          let x = this.directions[i][0];
          let y = this.directions[i][1];

          if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
              if (matrix[y][x] == char) {
                  result.push(this.directions[i]);
              }
          }

      }

      return result;
  }
  destory(){
    

    let found = this.chooseCell(1,2,3,4,5,6,7);
    let exact = random(found)

    if (exact){
        this.bomb -= 1;
        let x = exact[0];
        let y = exact[1];
        for (let i = 0; i < kingkongArr.length; i++) {
            if( kingkongArr[i].x == x && kingkongArr[i].y == y ){
                setTimeout(kingkongArr.splice(i, 1),10000)
            }       
        }
        for (let i = 0; i < eaterArr.length; i++) {
            if( eaterArr[i].x == x && eaterArr[i].y == y ){
                setTimeout(eaterArr.splice(i, 1),10000)
            }
        }
        for (let i = 0; i < predatorArr.length; i++) {
            if( predatorArr[i].x == x && predatorArr[i].y == y ){
                setTimeout(predatorArr.splice(i, 1),10000)
            }
        }
        for(let i = 0; i < peopleArr.length; i++){
            if( peopleArr[i].x == x && peopleArr[i].y == y ){
                setTimeout(peopleArr.splice(i, 1),10000)
            }
        }
        for(let i = 0;i < grasseaterArr.length; i++){
            if( grasseaterArr[i].x == x && grasseaterArr[i].y == y ){
                setTimeout(grasseaterArr.splice(i, 1),10000)
            }
        }
        for(let i = 0;i < grassArr.length; i++){
            if( grassArr[i].x == x && grassArr[i].y == y ){
                setTimeout(grassArr.splice(i, 1),10000)
            }
        }
        

        matrix[y][x] = 7
        matrix[this.y][this.x] = 0

        this.x = x;
        this.y = y
        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 7
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.bomb -= 1;

            if(this.bomb == 0){
                this.giveup()
            }
        }else {
            this.bomb -= 1;
            if(this.bomb == 0){
                this.giveup()
            }
        }
    }

}
giveup(){
    for (let i = 0; i < bombArr.length; i++) {
        if( bombArr[i].x == this.x && bombArr[i].y == this.y ){
            setTimeout(bombArr.splice(i, 1),10000)
        }
    }
    matrix[this.y][this.x] = 0
}
}




