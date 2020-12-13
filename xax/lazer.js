class Lazer extends LivingCreature{
    constructor(x, y, index) {
        super(x,y,index)
        this.energy = 5
    }

    getNewCoordinates(utel) {
        if (utel) {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x - 1, this.y + 1],
                [this.x + 1, this.y - 1],
                [this.x + 1, this.y + 1],
                [this.x - 2, this.y - 2],
                [this.x - 2, this.y + 2],
                [this.x + 2, this.y - 2],
                [this.x + 2, this.y + 2],
            ]
        }
        else {
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
    }

    chooseCell(character, action) {
        if (action == 'qaylel') {
            this.getNewCoordinates(false)
        } else if (action === 'utel') {
            this.getNewCoordinates(true)
        }
        return super.chooseCell(character)
    }

    move() {
        var newvandak = random(this.chooseCell(0, 'qaylel'))
        if (newvandak) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = newvandak[0]
            this.y = newvandak[1]
            --this.energy
        }
    }

    eat() {
        var newvandakXotaker = random(this.chooseCell(2, 'utel'))
        var newvandakGishatich = random(this.chooseCell(3, 'utel'))
        if (newvandakXotaker) {
            var x = newvandakXotaker[0]
            var y = newvandakXotaker[1]
            matrix[newvandakXotaker[1]][newvandakXotaker[0]] = this.index
            matrix[this.y][this.x] = 0
            this.energy += 0.5
            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = x
            this.y = y
        }
        if (newvandakGishatich) {
            var x = newvandakGishatich[0]
            var y = newvandakGishatich[1]
            matrix[newvandakGishatich[1]][newvandakGishatich[0]] = this.index
            matrix[this.y][this.x] = 0
            this.energy += 0.5
            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            this.x = x
            this.y = y
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in lazerArr) {
                if (this.x === lazerArr[i].x && this.y === lazerArr[i].y) {
                    lazerArr.splice(i, 1);
                }
            }
        }
    }


}  
