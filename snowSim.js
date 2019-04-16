function defineSnowSim() { // Cory Nelson
  snowSim = new Game(
    function() {
        
      this.snow = [];
      
      this.total = 500;
      this.gravity = 1;
      this.wind = 0;
      this.windMax = 5;
      
      this.snowSheet = loadImage("https://cdn.glitch.com/de19b75e-faa6-41df-bc1f-3be96b498a1e%2F62cb4e0e-20a3-4b06-b2bc-a12a1351a0d7.png?1551810222079"); // THIS
      
      this.snowTextures;
      
      let WIND = this.wind;
      function SnowFlake(x, y, img, dist, wwind){this.dist=dist;this.wind=wwind;this.x=x;this.y=y;this.img=img}
        Snowflake.prototype.draw=function(){image(this.img,this.x,this.y,100/this.dist,100/this.dist)}
        Snowflake.prototype.move=function(x,y){this.x+=x/this.dist+WIND;this.y+=y/this.dist}
        
      this.rows = 4;
      this.cols = 4;
      for(let x = 0; x < this.cols; x++) {
        for(let y = 0; y < this.rows; y++) {
          this.snowTextures.push(this.snowSheet.get(
            x * this.snowSheet.width / this.cols,
            y * this.snowSheet.height / this.rows,
            this.showSheet.width / this.cols,
            this.snowSheet.height / this.rows
          ));
        }
      }
      
      for(let i = 0; i < this.total; i++) {
        this.snow.push(new SnowFlake(
          random(width),
          random(height),
          this.snowTextures[floor(random(0, this.snowTextures.length))],
          random(1, 10),
          random(-0.5, 0.5)
        ));
      }
    }, // End setup()
    
    function() {
      background(0);
      
      for(let i in this.snow) {
        this.snow[i].move(random(-1, 1) + this.wind, random(this.gravity));
        this.snow[i].draw();
        
        if(this.snow[i].y > height) {
          this.snow[i].y = -100;
        }
        
        if(this.snow[i].x > width) {
          this.snow[i].x = -100;
        }
        
        if(this.snow[i].x < -100) {
          this.snow[i].x = width;
        }
      }
      
      this.wind += random(-0.1, 0.1);
      WIND = this.wind;
      
      if(this.wind > this.windMax) {
        this.wind = this.windMax;
      }
      
      if(this.wind < -this.windMax) {
        this.wind = -this.windMax;
      }
    } // End draw()
  );
}