function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 784);
            if (r < 500) r = 0;
            else if (r < 650) r = 1;
            else if (r < 750) r = 2;
            else if (r < 770) r = 3;
            else if (r < 784) r = 4;
            matrix[y][x] = r;
            if (x == y) {
                matrix[y][x] = 5;
            }
        }
    }
    return matrix;
}

var matrix = genMatrix(28, 28)
var hoviv
var side = 22;
var grassArr = []
var grassEaterArr = []
var gishatichArr = []
var bombArr = []
var lazerArr = []

function setup() {
    frameRate(5);
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
            else if (matrix[y][x] = 66) {
                fill("orange")
            }
            else if (matrix[y][x] = 77) {
                fill("brown")
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

function keyPressed() {
    if (keyCode === UP_ARROW) {
        hoviv.move(38)
        console.log("verev")
    } else if (keyCode === DOWN_ARROW) {
        hoviv.move(40)
        console.log("nerqev")
    } else if (keyCode === LEFT_ARROW) {
        hoviv.move(37)
        console.log("dzax")
    } else if (keyCode === RIGHT_ARROW) {
        hoviv.move(39)
        console.log("aj")
    }
}

function guynpoxox(e) {
    document.body.style.background = "gray"
}
var guyn = document.getElementById("body")
guyn.addEventListener("click", guynpoxox)


function refresh(e) {
    document.location.reload()
}
var knopka = document.getElementById("refresh")
knopka.addEventListener('click', refresh)

function traqcnel(e) {
    grassArr.length = 0
    grassEaterArr.length = 0
    gishatichArr.length = 0
    bombArr.length = 0
    lazerArr.length = 0
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++)
            matrix[y][x] = 66
    }
}

//hoviv stexcel

var buttonhoviv = document.getElementById("hovivstexcel")
buttonhoviv.addEventListener("click", function () {
    hovivavelana()
})

function hovivavelana() {
    if (grassArr.length == (matrix.length * matrix[0].length)) {
        randomtex()
        stexcelhoviv()
    }
    else{
        alert("spaseq sax darna xot")
    }
}

function randomtex() {
    var x = Math.floor(Math.random() * matrix[0].length);
    var y = Math.floor(Math.random() * matrix.length);
    matrix[y][x] = 77
}

function stexcelhoviv() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 77) {
                hoviv = new Hoviv(x, y, 77)
            }
        }
    }
}