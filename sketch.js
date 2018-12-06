let angle = 0;
let w = 12;
let ma;
let maxD;
let maroon = color(178,34,34);


function setup() {
    createCanvas(400, 400, WEBGL);
    ma = atan(1/sqrt(2));
    maxD = dist(0,0,200,200);
}

function draw() {
    background(0);
    ortho(-400, 400, 400, -400, 0, 1000);

    rotateX(ma);
    rotateY(QUARTER_PI);

    for(let z = 0; z < height; z += w) {
        for(let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, -PI/8, PI);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 50, 300);
            fill(178,34,34);
            normalMaterial(256);
            translate(x - width/2, 0, z - height/2);
            box(w - 2, h, w - 2);
            pop();
        }
    }

    angle += 0.05;
}