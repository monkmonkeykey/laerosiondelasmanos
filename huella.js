let pos, colores;
const moveSpeed = 0.5;
const moveScale = 600;
let segundos;
let estado = 0;
let clic;
let actual;
let img;
let respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7;
let presionado;
var pdf;
var ancho = width/3.5;
var alto = height/3.5;
function preload() {
  img = loadImage("data/2.png");
  imgT = loadImage("data/4.png");
  fontRegular = loadFont('assets/Courier.otf');
}
function setup() {
  img.loadPixels();
  createCanvas(ancho, alto, P2D);

  noStroke();
  background(255);


  colores = [color("#000000"), color("#3E3D3D"), color("#8B8B8B"), color("#717171"), color("#000000"), color("#000000"), color("#000000"), color("#000000")];
  pos = [];
  for (let i = 0; i < 1000; i++) { //numero de líneas
    pos.push( {
    x:
      randomW = random(0, alto),
      y:
      randomH = random(0, ancho),
      c:
      colores[floor(random(colores.length))]
    }
    );
  }



  let div1 = createDiv('¿Cuántos años tienes?').size(300, 100);
  div1.position(105, 190);
  radio1 = createRadio();
  radio1.option('10-20', 1);
  radio1.option('21-50', 2);
  radio1.option('51-100', 3);
  radio1.style('heigth', '5px');
  radio1.position(100, 210);

  let div2 = createDiv('¿Lavas tu ropa a mano?').size(300, 100);
  div2.position(105, 240);
  radio2 = createRadio();
  radio2.option('Si', 1);
  radio2.option('No', 2);
  radio2.style('heigth', '5px');
  radio2.position(100, 260);

  let div3 = createDiv('¿Tienes hijos?').size(300, 100);
  div3.position(105, 290);
  radio3 = createRadio();
  radio3.option('Si', 1);
  radio3.option('No', 2);
  radio3.style('heigth', '5px');
  radio3.position(100, 310);

  let div4 = createDiv('¿Cuál horario te gusta más?').size(300, 100);
  div4.position(105, 340);
  radio4 = createRadio();
  radio4.option('Verano', 1);
  radio4.option('Invierno', 2);
  radio4.style('heigth', '5px');
  radio4.position(100, 360);

  let div5 = createDiv('¿Cuántos años llevas trabajando?').size(300, 100);
  div5.position(105, 390);
  radio5 = createRadio();
  radio5.option('0', 1);
  radio5.option('3', 2);
  radio5.option('5', 3);
  radio5.option('Más de 10', 3);
  radio5.style('heigth', '10px');
  radio5.position(100, 430);

  let div6 = createDiv('¿En cuántas casas has vivido?').size(300, 100);
  div6.position(105, 460);
  radio6 = createRadio();
  radio6.option('1', 1);
  radio6.option('2', 2);
  radio6.option('3', 3);
  radio6.option('Más de 3');
  radio6.style('heigth', '5px');
  radio6.position(100, 480);

  let div7 = createDiv('¿Tienes huellas dactilares?').size(300, 100);
  div7.position(105, 510);
  radio7 = createRadio();
  radio7.option('Si', 1);
  radio7.option('No', 2);
  radio7.style('heigth', '5px');
  radio7.position(100, 530);

  textAlign(LEFT);
  fill(255, 0, 0);
  button = createButton('Generar');
  button.position(200, 600);
  button.mousePressed(oraa);
}
function oraa() {
  clic= frameCount/30;
  presionado = 1;
}
function draw() {

  image(img, 0, 0);
  respuesta1 =radio1.selected();
  respuesta2 =radio2.selected();
  respuesta3 =radio3.selected();
  respuesta4 =radio4.selected();
  respuesta5 =radio5.selected();
  respuesta6 =radio6.selected();
  respuesta7 =radio7.selected();


  if ( respuesta1 >= 1 && respuesta2 >= 1 && respuesta3 >= 1 && respuesta4 >= 1 && respuesta5 >= 1 && respuesta6 >= 1 && respuesta7 >= 1 && presionado >= 1) {
    estado = 2;
    console.log("han pasado todas");
  } else {
  }

  if (estado == 0) {
  } else if (estado == 1) {
  } else if (estado == 2) {
    segundos = frameCount/30;
    actual = int(segundos - clic);


    for (let i = 0; i < pos.length; i++) {
      with(pos[i]) {
        let angle = noise(x / moveScale, y / moveScale) * PI * moveScale;
        x += cos(angle) * moveSpeed;
        y += sin(angle) * moveSpeed;
        fill(c);
        ellipse(x, y, 1, 1);
        if (x > width || x < 0 || y > height || y < 0 || (random(1)) < 0.001 ) {
          x = x;//random(width);
          y = y;//random(height);
        }
      }
    }
    if (actual == 35) {


      endRecord();
      //image(imgT, 0, 0);
      //saveCanvas('mihuella', 'png');
      noLoop();
    } else if (segundos >= 6) {
      loop();
    } else {
      console.log('no pasa nada');
    }
  }
}
