let button
function setup() {
  createCanvas(windowWidth, windowHeight)

}
function draw() {
  textAlign(CENTER)
  rectMode(CENTER)
  background(89, 85, 86)
  noStroke();
  //title text
  fill(255)
  textSize(48)
  text("I Want To Help Others",width/2,height/15)
  //big box
  fill(203, 55, 58)
  rect(width/2,height/2, width/1.1, height/1.25, 10)
  //subtitle text
  fill(255)
  textSize(36)
  text("Tasks You Can Help With",width/2,height/6)
  //tasks
  function tasks(posX,posY,fullName,email,phoneNum,city,task) {
    //main box text
    rect(posX,posY,width/1.2,height/7,10)
    //name text
    fill(203, 55, 58)
    textSize(20)
    text(fullName,posX-width/3.25,posY-height/40)
    //help rectangle & button
    button = createButton('Help Out');
    button.position(width/1.32,posY-width/42);
    button.mousePressed();
    button.size(width/9,height/18);
    button.hide()
    rect(posX+width/3.2,posY,width/8,height/16,10)
    //help out text
    fill(255)
    textSize(24)
    text("Help Out",posX+width/3.2,posY+height/85)
  }
  tasks(width/2,height/3.75,"Person Person","Email","1234567890","city","Deliver Groceries")
  tasks(width/2,height/3.75+height/6,"Person Person","Email","1234567890","city","Deliver Groceries")
  tasks(width/2,height/3.75+height/3,"Person Person","Email","1234567890","city","Deliver Groceries")
}
