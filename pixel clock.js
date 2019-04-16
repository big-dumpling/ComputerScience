function defineClock() { // This one will be a solo game made by cory, you should do a solo game too, id be excited to see what youve learned in this collab :P
  clock = new Game(function() {
    textAlign(CENTER, CENTER);
    
    this.exitButton = new Button(width - 40, 0, 40, 20, "Exit", function() {
      game = "menu";
      gameStarted = false;
    });
      this.exitButton.setButtonColor(255, 100, 100);
  },
  
  function() {
    background(map(hour(), 0, 23, 0, 255), map(minute(), 0, 59, 0, 255), map(second(), 0, 59, 0, 255));
    
    noStroke();
    
    stroke(0);
    strokeWeight(3);
    
    fill(map(hour(), 0, 23, 0, 255), 0, 0);
    rect(0, 0, width / 3, map(hour(), 0, 23, 0, height));
    
    fill(255);
    text(hour(), 0, 0, width / 3, map(hour(), 0, 23, 0, height));

    fill(0, map(minute(), 0, 59, 0, 255), 0);
    rect(width / 3, 0, width / 3, map(minute(), 0, 59, 0, height));
    fill(255);
    text(minute(), width / 3, 0, width / 3, map(minute(), 0, 59, 0, height));

    fill(0, 0, map(second(), 0, 59, 0, 255));
    rect(2 * width / 3, 0, width / 3, map(second(), 0, 59, 0, height));
    fill(255);
    text(second(), 2 * width / 3, 0, width / 3, map(second(), 0, 59, 0, height));
    
    this.exitButton.setPos(width - 40, 0);
    this.exitButton.update();
  });
}