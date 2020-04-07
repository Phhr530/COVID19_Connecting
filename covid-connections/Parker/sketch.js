let button
let button2

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER)
  background(89, 85, 86);
  fill("white");
  textSize(30)
  text("Welcome to the COVID-19 Connections Website", width/2, 50);

  fill("white");
  textSize(15)
  text("This is a platform that allows people in need to contact others who want to help around their community", width/2, 90);
  fill("white");
  textSize(15)
  text("Select the box that applies to your situation", width/2, 200);


  button = createButton('Need Help');
  button.position((width/2) +40, 300);
  button.mousePressed(changeBG);
  button.size(200,100);

  button2 = createButton('Want to Help Others');
  button2.position((width/2 -200), 300);
  button2.mousePressed(changeBG);
  button2.size(200,100);
}

function draw() {

button.mousePressed(console.log("1"))

  }


function changeBG() {

}
