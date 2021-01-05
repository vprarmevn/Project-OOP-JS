class Hoviv {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = []
    }

    verev(){
        this.directions = [this.x, this.y - 1];
    }
    nerqev(){
        this.directions = [this.x, this.y + 1];
    }
    dzax(){
        this.directions = [this.x - 1, this.y];
    }
    aj(){
        this.directions = [this.x + 1, this.y];
    }

    move(keyCode){
        console.log(keyCode)
        if(keyCode == 38){
            this.verev()
        }
        else if(keyCode == 40){
            this.nerqev()
        }
        else if(keyCode == 37){
            this.dzax()
        }
        else if(keyCode == 39){
            this.aj()
        }
        var norx = this.directions[0]
        var nory = this.directions[1]
        console.log(norx, nory)
        matrix[nory][norx] = this.index
        matrix[this.y][this.x] = 1
        this.x = norx
        this.y = nory
    }
}
