class Bomb extends LivingCreature{
    constructor(x, y, index) {
      super(x,y,index)
      this.energy = 5
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    move() {
        var newvandak = random(this.chooseCell(0))
        if (this.energy > 0 && newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = newvandak[0]
            this.y = newvandak[1]
            --this.energy
        }
    }

    bmb() {
        var newvandakXot = random(this.chooseCell(1))
        var newvandakXotaker = random(this.chooseCell(2))
        var newvandakGishatich = random(this.chooseCell(3))
        var newvandakLazer = random(this.chooseCell(5))

        if (newvandakXot || newvandakXotaker || newvandakGishatich || newvandakLazer) {
            this.getNewCoordinates()
            for (var i in this.directions) {
                var x = this.directions[i][0]
                var y = this.directions[i][1]
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix[1].length) {
                    if (matrix[y][x] != 0) {
                        matrix[y][x] = 0
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                        for (var i in grassEaterArr) {
                            if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                                grassEaterArr.splice(i, 1);
                                break;
                            }
                        }
                        for (var i in gishatichArr) {
                            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                        for (var i in lazerArr) {
                            if (x == lazerArr[i].x && y == lazerArr[i].y) {
                                lazerArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in bombArr) {
            if (this.x == bombArr[i].x && this.y == bombArr[i].y) {
                bombArr.splice(i, 1);
            }
        }
    }
}