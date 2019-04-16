function definePainter() {
  painter = new Game(function() {                        // first load - like setup() function
                                                         // Instead of "let VARIABLE = SOMETHING", do "this.VARIABLE = SOMETHING"    
    this.objects = [];
    
    this.CDX = 10;
    this.CDY = 10;
    
    this.red = createSlider(0, 255, 0);
    this.green = createSlider(0, 255, 0);
    this.blue = createSlider(0, 255, 0);
    this.sizeX = createSlider(5, 50, 10);
    this.sizeY = createSlider(5, 50, 10);
    
    this.clearButton = new Button(0, 0, 40, 20, "Clear", function() {
      painter.objects = [];
    });
      this.clearButton.setButtonColor(100, 100, 100);
    
    this.exitButton = new Button(width - 40, 0, 40, 20, "Exit", function() {
      painter.red.remove();
      painter.green.remove();
      painter.blue.remove();
      painter.sizeX.remove();
      painter.sizeY.remove();
      game = "menu";
      gameStarted = false;
    });
      this.exitButton.setButtonColor(255, 100, 100);
    
    this.saveButton = new Button(40, 0, 40, 20, "Save", function() {
      this.image = get(0, 21, width, height - 21 - sliderHeight);
      save(this.image, "painter.png");
    });
      this.saveButton.setButtonColor(100, 100, 100);
  },                                                    // End of setup()
  
  function() {                                          // tick - like draw() function
    background(255);
    
    noStroke();
    if(mouseIsPressed && mouseButton === LEFT && !this.exitButton.mouseInBounds() && !this.saveButton.mouseInBounds() && !this.clearButton.mouseInBounds() && mouseY < windowHeight - sliderHeight) {
      this.objects.push(["ellipse", mouseX, mouseY, this.CDX, this.CDY, this.red.value(), this.green.value(), this.blue.value()]);
    }
    
    for(let i in this.objects) {
      if(this.objects[i][0] == "ellipse") {
        fill(this.objects[i][5], this.objects[i][6], this.objects[i][7]);
        ellipse(this.objects[i][1], this.objects[i][2], this.objects[i][3], this.objects[i][4]);
      }
    }
    
    fill(this.red.value(), this.green.value(), this.blue.value());
    ellipse(mouseX, mouseY, this.CDX, this.CDY);
    
    this.exitButton.setPos(width - 40, 0);
    
    this.saveButton.update();
    this.clearButton.update();
    this.exitButton.update();
    
    noStroke();
    
    fill(this.red.value(), 0, 0);
    rect(0, windowHeight - sliderHeight, sliderWidth, sliderHeight)
    
    fill(0, this.green.value(), 0);
    rect(sliderWidth, windowHeight - sliderHeight, sliderWidth, sliderHeight);
    
    fill(0, 0, this.blue.value());
    rect(2 * sliderWidth, windowHeight - sliderHeight, sliderWidth, sliderHeight);
    
    fill(this.red.value(), this.green.value(), this.blue.value());
    rect(3 * sliderWidth, windowHeight - sliderHeight, windowWidth - 3 * sliderWidth, sliderHeight);
    
    strokeWeight(1);
    stroke(0);
    fill(255);
    // text("Size", windowWidth - 130, windowHeight - 30, 130, 30);
    
    this.red.position(0, windowHeight - sliderHeight);
    this.green.position(sliderWidth, windowHeight - sliderHeight);
    this.blue.position(2 * sliderWidth, windowHeight - sliderHeight);
    this.sizeX.position(windowWidth - sliderWidth, windowHeight - sliderHeight);
    this.sizeY.position(windowWidth - sliderWidth, windowHeight - 2 * sliderHeight);
    
    /*
    Shortcuts:
    
      Shift + X - Make shape thicker in Y direction
      Shift + Z - Make shape thicker in X direction
      Shift + C - Make shape larger
      Control + X - Make shape thinner in Y direction
      Control + Z - Make shape thinner in X direction
      Control + C - Make shape smaller
      Tab + Q - Increment Red ++
      Tab + W - Increment Green ++
      Tab + E - increment Blue ++
      Tab + A - Decrement Red --
      Tab + S - Decrement Green 
      
      
      
      
      
      \--
      Tab + D - Decrement Blue -- <-- done
    */
    
    //increase size //Shift + modifier (z-y  x-x c-x and y)
    if (keyIsDown(16)){ // Shift + Modifier
      if (keyIsDown(88)){//   Modifiers = "X" Key --- grow in the X direction so < and >
        this.CDX++
      }
      if(keyIsDown(90)){//    Modifiers = "Z" Key --- grow in the Y direction so ^ and v
        this.CDY++
      }
      if (keyIsDown(67)){//   Modifiers = "C" Key --- Full grow
        this.CDX++
        this.CDY++
      }

    }
      //decrease size //Control + modifier (z-y  x-x c-x and y)
    if (keyIsDown(17)){ //  Control

      if (keyIsDown(88) && this.CDX >= 0){ //   "X" Key --- shrink in the X direction so < and >
    3
      this.CDX--
      }
      if(keyIsDown(90) && this.CDY >= 0){ //    "Z" Key --- shrink in the Y direction so ^ and v
        this.CDY--
      }
      if (keyIsDown(67)){ //   "C" Key --- Full shrink
        this.CDX--;
        this.CDY--;
        this.CDX = abs(this.CDX);
        this.CDY = abs(this.CDY);
      }
    }
    
    if (keyIsDown(9)){ // Tab + Modifier
      if (keyIsDown(81)){//   Modifiers = "Q" Key --- Increment Red
        this.red.value(this.red.value() + 1);
      }
      if(keyIsDown(87)){//    Modifiers = "W" Key --- Increment Green
        this.green.value(this.green.value() + 1);
      }
      if (keyIsDown(69)){//   Modifiers = "E" Key --- Increment Blue
        this.blue.value(this.blue.value() + 1);
      }

    }
    if (keyIsDown(9)){ // Tab + Modifier
      if (keyIsDown(65)){//   Modifiers = "A" Key --- Decrement Red 
        this.red.value(this.red.value() - 1);
      }
      if(keyIsDown(83)){//    Modifiers = "S" Key --- Decrement Blue
        this.green.value(this.green.value() - 1);
      }
      if (keyIsDown(68)){//   Modifiers = "D" Key --- Decrement Green
        this.blue.value(this.blue.value() - 1);
 
      }
    
    }
    
    
    
    //a temp clearing idea input is Space
  //  if (KeyIsDown(32)){
  //  clear();
  //  }
    
    
    
  });                                                   // End of draw()
}