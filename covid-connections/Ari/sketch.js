let button
function setup() {
    var firebaseConfig = {
      apiKey: "AIzaSyBM-X8oScpf_a2LGz_nh177lZThuxehBOs",
      authDomain: "covid-connecting.firebaseapp.com",
      databaseURL: "https://covid-connecting.firebaseio.com",
      projectId: "covid-connecting",
      storageBucket: "covid-connecting.appspot.com",
      messagingSenderId: "660927029900",
      appId: "1:660927029900:web:323b3203531aa9162651a9",
      measurementId: "G-MJ753QPMQQ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    console.log(firebase)
}
function draw() {
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
  textSize(width/24)
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
