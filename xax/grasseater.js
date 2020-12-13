class GrassEater extends LivingCreature{
    constructor(x, y, index) {
      super(x,y,index)
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

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var newvandak = random(this.chooseCell(0));
        if (newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            --this.energy
            this.x = newvandak[0]
            this.y = newvandak[1]
        }
    }

    eat() {
        var newvandak = random(this.chooseCell(1))
        if (newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.energy += 2
            this.x = newvandak[0]
            this.y = newvandak[1]

            for (var i in grassArr) {
                if (newvandak[0] == grassArr[i].x && newvandak[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
    }

    die() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                }
            }
        }
    }

    mul() {
        var newvandak = random(this.chooseCell(0));
        if (newvandak && this.energy >= 12) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            var gre = new GrassEater(newvandak[0], newvandak[1], this.index)
            grassEaterArr.push(gre)
        }
    }
}
