// class Game {
//   constructor(run, update) {
//     this.run = run;
//     this.tick = update;
//   }
  
//   start() {
//     this.run();
//   }
  
//   tick() {
//     this.tick();
//   }
// } // will keep just in case

function Game(run, update) {
  this.run = run;
  this.tick = update;
  
  Game.prototype.start = function() {
    this.run();
  }
  
  Game.prototype.tick = function() {
    this.tick();
  }
}