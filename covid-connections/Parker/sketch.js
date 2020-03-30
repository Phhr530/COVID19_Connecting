let button;
let CanvasX = 1920
let CanvasY = 1080
function setup() {
  createCanvas(CanvasX, CanvasY);
  background(89, 85, 86);
  fill("white");
  textSize(30)
  text("Welcome to the COVID-19 Connections Website", 10, 10, 500);

  fill("white");
  textSize(15)
  text("This is a platform that allows people in need to contact others who want to help around their community", 10, 90, 490);
  fill("white");
  textSize(15)
  text("Select the box that applies to your situation", 100, 200, 490);


  button = createButton('Need Help');
  button.position(40, 250);
  button.mousePressed(changeBG);
  button.size(200,100);

  button = createButton('Want to Help Others');
  button.position(260, 250);
  button.mousePressed(changeBG);
  button.size(200,100);
}

function changeBG() {
//take to next page
}
