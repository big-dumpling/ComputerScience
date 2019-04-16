/*class Gem {//this is the original code 
  constructor(color) {
    this.color = color
  }
  draw() {
    if (color == 'green') {  
      fill(0, 0, 255)//<-i noticed this mix up 
      quad(mouseX, mouseY,   0, height/12  ,width/5,height/12,width/5,0)
    }
  }
  update() {
    this.draw();
  }
// - - - - - - - - - - - - -
class Gem {//my second idea
  constructor(color) {//Im trying to make the constructor a variable
     this.color = color  //<-
  }               //            so this.color is a string instead of rgb?
  draw() {
    if (this.color == 'green') {  //yea -- maybe i could make a rgb for each color
      fill(0, 255, 0)
      quad(0,0,   0, height/12  ,width/5,height/12,width/5,0)
    }
  }
  update() {
    this.draw();
  }

}
//--------------------------------i did it woot woot
//this is the working verson -- if you want all of the note stuff in text me or PM me in discord

class Gem {
  constructor(color) {
    this.color = color
  }
  draw() {
    if (this.color == green) {  
      fill(0, 255, 0)
      quad(0, 0,   0, height/12  ,width/5,height/12,width/5,0)
    }
  }
  update() {
    this.draw();
  }

}
//- - - - - - - - - - - - - - - - - 
//making an adjustment to the line -- will have a better verion with taps and notes

// Nice job lol
// IIITTTSSS FIIIIIINNNNIIIISSSHHHHEEEEED!!!!!!



class Gem {
  constructor(color, tap) {
    this.color = color
    this.tap = tap
    this.v =0

  }
  draw() {

    if (this.color == 'green') {
      if (this.tap == 'true') {
        fill(0, 255, 0)
        rect(0, 0 + this.v, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(0, 100, 0)
        rect(0, 0 + this.v, width / 5, height / 12)
      }
    }




    if (this.color == 'red') {
      if (this.tap == 'true') {
        fill(255, 0, 0)
        rect(width / 5, 0 + this.v, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(150, 0, 0)
        rect(width / 5, 0 + this.v, width / 5, height / 12)
      }
    }


    if (this.color == "yellow") {

      if (this.tap == 'true') {
        fill(255, 255, 0)
        rect(2 * width / 5, 0 + this.v, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(150, 150, 0)
        rect(2 * width / 5, 0 + this.v, width / 5, height / 12)
      }

    }



      if (this.color == 'blue') {

              if (this.tap == 'true') {
        fill(0, 0, 255)
        rect(3 * width / 5, 0 + this.v, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(0, 0, 150)
        rect(3 * width / 5, 0 + this.v, width  / 5, height / 12)
      }
    }


    if (this.color == 'orange') {
      if (this.tap == 'true') {
        fill(200, 100, 0);
        rect(4 * width / 5, 0, width + this.v / 5, height / 12)
      }
      if (this.tap == 'false') {
    fill(100, 50, 0);
        rect(4 * width / 5, 0 + this.v , width / 5, height / 12)
      }

    }







    }
    update() {
      this.draw();
           this.v = 0// this resets the note to the top cuz idk how to delete objects
      }
      this.v++
    }

  }
  */

//------------------------------------------------------
//this is the finished class till i come up with something to make notes separate
class Gem {
  constructor(color, tap) {
    this.color = color
    this.tap = tap

  }
  draw() {

    if (this.color == 'green') {
      if (this.tap == 'true') {
        fill(0, 255, 0)
        rect(0, 0, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(0, 100, 0)
        rect(0, 0, width / 5, height / 12)
      }
    }




    if (this.color == 'red') {
      if (this.tap == 'true') {
        fill(255, 0, 0)
        rect(width / 5, 0, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(150, 0, 0)
        rect(width / 5, 0, width / 5, height / 12)
      }
    }


    if (this.color == "yellow") {

      if (this.tap == 'true') {
        fill(255, 255, 0)
        rect(2 * width / 5, 0, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(150, 150, 0)
        rect(2 * width / 5, 0, width / 5, height / 12)
      }

    }



      if (this.color == 'blue') {

              if (this.tap == 'true') {
        fill(0, 0, 255)
        rect(3 * width / 5, 0, width / 5, height / 12)
      }
      if (this.tap == 'false') {
        fill(0, 0, 150)
        rect(3 * width / 5, 0, width / 5, height / 12)
      }
    }


    if (this.color == 'orange') {
      if (this.tap == 'true') {
        fill(200, 100, 0);
        rect(4 * width / 5, 0, width / 5, height / 12)
      }
      if (this.tap == 'false') {
    fill(100, 50, 0);
        rect(4 * width / 5, 0, width / 5, height / 12)
      }

    }







    }
    update() {
      this.draw();
    }

  }