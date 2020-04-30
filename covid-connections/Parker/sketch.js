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
  button.mousePressed(page1);
  button.size(200,100);

  button2 = createButton('Want to Help Others');
  button2.position((width/2 -200), 300);
  button2.mousePressed(page2);
  button2.size(200,100);
}


function page1() {
    console.log("1");
    button.hide();
    button2.hide();
    createCanvas(windowWidth, windowHeight)
    textAlign(CENTER)
    rectMode(CENTER)
    background(89, 85, 86)
    noStroke();
    //title text
    fill(255)
    textSize(width/18)
    text("I Want To Help Others",windowWidth/2,windowHeight/15)
    //big box
    fill(203, 55, 58)
    rect(windowWidth/2,windowHeight/2, windowWidth/1.1, windowHeight/1.25, 10)
    //subtitle text
    fill(255)
    textSize(width/22)
    text("Tasks You Can Help With",windowWidth/2,windowHeight/6)
    //tasks
    function tasks(posX,posY,fullName,email,phoneNum,city,task) {
      //main box text
      rect(posX,posY,windowWidth/1.2,windowHeight/7,10)
      //name text
      fill(203, 55, 58)
      textSize(width/40)
      text(fullName,posX-windowWidth/3.25,posY-windowHeight/40)
      //help rectangle & button
      button = createButton('Help Out');
      button.position(windowWidth/1.32,posY-windowWidth/42);
      button.mousePressed();
      button.size(windowWidth/9,windowHeight/18);
      button.hide()
      rect(posX+windowWidth/3.2,posY,windowWidth/8,windowHeight/16,10)
      //help out text
      fill(255)
      textSize(width/38)
      text("Help Out",posX+windowWidth/3.2,posY+windowHeight/85)
    }
    tasks(windowWidth/2,windowHeight/3.75,"Person Person","Email","1234567890","city","Deliver Groceries")
    tasks(windowWidth/2,windowHeight/3.75+windowHeight/6,"Person Person","Email","1234567890","city","Deliver Groceries")
    tasks(windowWidth/2,windowHeight/3.75+windowHeight/3,"Person Person","Email","1234567890","city","Deliver Groceries")
  }



function page2() {

    console.log("2")
    button.hide();
    button2.hide();
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

  function myInputEvent() {
    console.log('you are typing: ', this.value());
}
