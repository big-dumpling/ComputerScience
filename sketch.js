// ignore errors, doesn't recognise functions from other files

// I think we will need a spot in here for global variables too, I will change the layout of the engine soon, but I don't feel like it atm

// THIS IS A TEST WEEEEEEEEEEEEEEEEEEEEEEEEEE

// Variables for menu vvv

const sliderWidth = 135;
const sliderHeight = 35;

let game = "menu";
let gameStarted;
                                                                                     // Guide how to create games

let painterButton;                                                                   // First, declare the button for the game
let painter;                                                                         // Declare the game

let bigDumplingButton;

let clockButton;
let clock;

let snowSimButton;
let snowSim;

let spaceGame;
let spaceGameButton;

let menuBackground0, menuBackground1, menuBackground2;

function preload() {
  menuBackground0 = loadImage("https://cdn.glitch.com/de19b75e-faa6-41df-bc1f-3be96b498a1e%2Fdownload.png?1551326523739");
  menuBackground1 = loadImage("https://cdn.glitch.com/de19b75e-faa6-41df-bc1f-3be96b498a1e%2Fpainter.png?1551369583204");
  menuBackground2 = loadImage("https://cdn.glitch.com/de19b75e-faa6-41df-bc1f-3be96b498a1e%2Fpainter%20(6).png?1551369863567");
}

function setup() {
  console.log(choose([1,2,3,4,5]))
  console.log(choose([1,2,3,4,5]))
  console.log(choose([1,2,3,4,5]))
  console.log(choose([1,2,3,4,5]))
  console.log(choose([1,2,3,4,5]))
  console.log(random([1,2,3,4,5]));
  
  createCanvas(windowWidth, windowHeight);
  
  gameStarted = false;
  
  painterButton = new Button(0, 0, 100, 60, "Painter - Collab", function() {                  // Then, define the button
    game = "painter";                                                                // Tell the program which game to play
  });
    painterButton.setButtonColor(255, 255, 255);                                       // Set the button's color (optional)
    painterButton.setTextColor(0, 0, 0);                                               // Set the button's text color (optional)
  definePainter();                                                                   // Call function to create game, make sure you cite
  
  clockButton = new Button(0, 0, 100, 60, "Pixel clock - Cory Nelson", function() {
    game = "clock";
  });
    clockButton.setButtonColor(200, 0, 200);
    clockButton.setTextColor(255, 255, 25);
  defineClock();
  
  snowSimButton = new Button(0, 0, 100, 60, "Snow simulation - Cory Nelson", function() {
    game = "snow sim";
  });
    snowSimButton.setButtonColor(100, 100, 0);
    snowSimButton.setTextColor(255, 255, 255);
  defineSnowSim();
  
  bigDumplingButton = new Button(0, 0, 100, 60, "to big-dumpling's site", function() {
    open("https://big-dumpling.glitch.me");
  });
    bigDumplingButton.setButtonColor(255, 0, 0);
    bigDumplingButton.setTextColor(0, 0, 255);
}

spaceGame = new Button(0, 0, 100, 60, "Asteroids", function() {                  // Then, define the button
    game = "spacegame";                                                                // Tell the program which game to play
  });
    spaceGame.setButtonColor(255, 255, 255);                                       // Set the button's color (optional)
    spaceGame.setTextColor(0, 0, 0);                                               // Set the button's text color (optional)
  defineAsteroids();  //*/                                                                 // Call function to create game, make sure you cite
  

function draw() {
  if(game == "menu") {
    background(128);
    image(menuBackground0, 0, -25, width, height);
    image(menuBackground1, width/2, -43, width/2, height/2);
    image(menuBackground2, 0, 0, width / 4, height / 4);
    
    painterButton.setPos(width / 2 - painterButton.width / 2, height / 2 - painterButton.height / 2);
    painterButton.update();                                                            // Draw the button (or anything on the menu screen)
    
    clockButton.setPos(width / 2 - clockButton.width / 2, height / 2 - clockButton.height / 2 - clockButton.height);
    clockButton.update();
    
    snowSimButton.setPos(width / 2 - snowSimButton.width / 2, height / 2 - snowSimButton.height / 2 + snowSimButton.height);
    // snowSimButton.update();
    
    bigDumplingButton.setPos(width * 0.1, height * 0.6);
    bigDumplingButton.update();
  }
  // spaceGameButton.setPos(width / 2 - snowSimButton.width / 2, height / 2 -  snowSimButton.height / 2 - snowSimButton);
  // spaceGameButton.update();
  
  
  
  if(game == "painter") {                                                              // Check to see which game is being played
    if(gameStarted) {                                                                  // Check to see if the game started
      painter.tick();                                                                  // Update the game if it did
    } else {
      gameStarted = true;                                                              // Otherwise, set gameStarted to true, and
      painter.start();                                                                 // start the game
    }
  }
  
  if(game == "clock") {
    if(gameStarted) {
      clock.tick();
    } else {
      gameStarted = true;
      clock.start();
    }
  }
    
  if(game == "snow sim") {
    if(gameStarted) {
      snowSim.tick();
    } else {
      gameStarted = true;
      snowSim.start();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}