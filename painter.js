function definePainter() {
  painter = new Game(function() { // first load - like setup() function
                                  // Instead of "let VARIABLE = SOMETHING", do "this.VARIABLE = SOMETHING"
    background(0);
    
    this.bloop = "hi";            
    
    
    
    
    // END OF SETUP()
  }, function() {                 // tick - like draw() function
    
    text(this.bloop, mouseX, mouseY);
    
    
    
    
    
    
    
    
    
    // END OF DRAW()
  });
}