function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 900);
            if (r < 150) r = 0;
            else if (r < 400) r = 1;
            else if (r < 790) r = 2;
            else if (r < 850) r = 3;
            else if (r < 970) r = 4;
            // else if (r < 64 && x == y) r = 5; 
            matrix[y][x] = r;
            if (x == y) {
                matrix[y][x] = 5;
            }
        }
    }
    return matrix;
}

var matrix = genMatrix(30, 30)

var side = 25;
var grassArr = []
var grassEaterArr = []
var gishatichArr = []
var bombArr = []
var lazerArr = []

function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)

            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y, 3)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var bm = new Bomb(x, y, 4)
                bombArr.push(bm)
            }
            else if (matrix[y][x] == 5) {
                var lz = new Lazer(x, y, 5)
                lazerArr.push(lz)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move()
        grassEaterArr[i].eat()
        grassEaterArr[i].mul()
        grassEaterArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].mul()
        gishatichArr[i].die()
    }
    for (var i in bombArr) {
        bombArr[i].move()
        bombArr[i].bmb()
    }
    for (var i in lazerArr) {
        lazerArr[i].move()
        lazerArr[i].eat()
        lazerArr[i].die()
    }
}

//dom

var ktcneluqanak = 0
function ktcnel(e){
    ++ktcneluqanak
    console.log(e.target.innerText)
    var tox = "shnorhakalutyun ktcnelu hamar" + ktcneluqanak
    this.innerText = tox
}

var p = document.getElementById("Xax")
console.log(p)
p.addEventListener("click", ktcnel)
