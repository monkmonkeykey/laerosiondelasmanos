let pos;

let colores;
const moveSpeed = 0.532;
const moveScale = 600;
let segundos;
let img, imgT;
let aleatorio;
function preload() {
  img = loadImage("data/2.png");
  imgT = loadImage("data/4.png");
  fontRegular = loadFont('assets/Courier.otf');
}
function setup() {

  createCanvas(500, 577);
  noStroke();
  background(255);

  colores = [color("#000000"), color("#3E3D3D"), color("#8B8B8B"), color("#717171"), color("#000000"), color("#000000"), color("#000000"), color("#000000")];
  pos = [];
  for (let i = 0; i < 1000; i++) { //numero de líneas
    pos.push( {
    x:
      randomW = random(0, 500), 
      y:
      randomH = random(0, 667), 
      c:
      colores[floor(random(colores.length))]
    }
    );
  }
}

function draw() {

  image(img, 0, 0);
  segundos = frameCount/30;
  for (let i = 0; i < pos.length; i++) {
    aleatorio = random(1);
    with(pos[i]) {
      let angle = noise(x / moveScale, y / moveScale) * PI * moveScale;//I never understood why end by multiplying by moveScale
      x += cos(angle) * moveSpeed;
      y += sin(angle) * moveSpeed;
      fill(c);
      ellipse(x, y, 1, 1);

      if (x > width || x < 0 || y > height || y < 0 || (aleatorio) < 0.001 ) {
        x = x;
        y = y;
      }
    }
  }

  if (segundos == 35) {
    image(imgT, 0, 0);
    noLoop();
  } else if (segundos >= 6) {
    loop();
  } else {
  }
}
