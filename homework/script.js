var matrix = [];
xqanak = 35;
yqanak = 40;
xy = [];
for (var y = 0; y < yqanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xqanak; x++) {
        matrix[y][x] = Math.round(Math.random() * 3);
    }
}
var side = 15;
function mousePressed() {
   xy.push(mouseX,mouseY);
   console.log(xy);
}
console.log(xy);

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw(){
    for (i in xy){
        fill(0,255,0);
        ellipse(i, 80, 80);

    }

}