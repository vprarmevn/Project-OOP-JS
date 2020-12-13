class Gishatich extends LivingCreature{
     constructor(x, y, index) {
      super(x,y,index)
      this.energy = 10
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
        if (newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = newvandak[0]
            this.y = newvandak[1]
            --this.energy
        }
    }

    eat() {
        var newvandak = random(this.chooseCell(2))
        if (newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = newvandak[0]
            this.y = newvandak[1]
            this.energy += 3
            for (var i in grassEaterArr) {
                if (newvandak[0] == grassEaterArr[i].x && newvandak[1] == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                }
            }
        }
    }

    die() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }

    mul() {
        var newvandak = random(this.chooseCell(0));
        if (newvandak && this.energy >= 16) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            var gre = new Gishatich(newvandak[0], newvandak[1], this.index)
            gishatichArr.push(gre)
        }
    }
}