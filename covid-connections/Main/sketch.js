let button
function setup() {



  createCanvas(windowWidth, windowHeight)
  textAlign(CENTER)
  rectMode(CENTER)
  background(89, 85, 86)
  noStroke();

  let inp = createInput('Type your needs in this box');
    inp.input(myInputEvent);
    inp.position(width/6,height/4);
    inp.size(500,50);

      inp = createInput('Cell or Home Phone Number');
      inp.input(myInputEvent);
      inp.position(width/6,height/3);
      inp.size(500,50);

      inp = createInput('Email');
      inp.input(myInputEvent);
      inp.position(width/6,height/2.4);
      inp.size(500,50);

  let sub = createButton('Sumbit')
    sub.position(width/1.25,height/2);


}

function draw() {


  //title text
  fill(255)
  textSize(width/18)
  text("I Would Like to Help",windowWidth/2,windowHeight/15)
  //big box
  fill(203, 55, 58)
  rect(windowWidth/2,windowHeight/2, windowWidth/1.1, windowHeight/1.25, 10)
  //subtitle text
  fill(255)
  textSize(width/22)
  text("What do you need help with?",windowWidth/2,windowHeight/6)
  //tasks
}

function myInputEvent() {
  console.log('you are typing: ', this.value());

}
