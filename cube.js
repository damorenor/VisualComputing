const points = [
  [25,25,25],
  [25,25,-25],
  [25,-25,25],
  [25,-25,-25],
  [-25,-25,25],
  [-25,-25,-25],
  [-25,25,25],
  [-25,25,-25]
]

const squares = [
  [0,2,4,6,0],
  [1,3,5,7,1],
  [0,1,3,2,0],
  [4,5,7,6,4],
  [0,1,7,6,0],
  [2,3,5,4,2]
]

function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(220);
  orbitControl();
  squares.forEach((sq,i) => {
    beginShape();
    sq.forEach((p,j) => {
      vertex(points[p][0],
             points[p][1],
             points[p][2])
    });
    endShape();
  });
}
