class LivingCreature {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.index = index;
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

class Grass extends LivingCreature{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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
    chooseCell(character) {
        return super.this.chooseCell(character);
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}



class GrassEater extends LivingCreature{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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
        return super.this.chooseCell(character);
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

class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 10;
        this.directions = []
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
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix[1].length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
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



class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 5
        this.directions = []
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
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix[1].length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
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


class Lazer {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = []
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
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix[1].length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
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
