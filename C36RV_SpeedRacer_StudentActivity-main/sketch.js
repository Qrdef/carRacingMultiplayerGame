var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var game
var car1_img,car2_img
var car1,car2
var cars=[]
var allPlayers=[]
function preload() {
  backgroundImage=loadImage("assets/background.png")
  car1_img=loadImage("assets/car1.png")
  car2_img=loadImage("assets/car2.png")
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database=firebase.database()
//.ref is for collecting the value
//.on is to read the value and stores the value in it
//.val will collect the value from .on and comes out of the 
//firebase and gives the value to the node in the database of 
//the game
game = new Game()
  game.start()
  //form=new Form()

  bgImg=backgroundImage
}

function draw() {
  background(bgImg)
  //form.display()
}


