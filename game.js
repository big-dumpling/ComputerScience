class Game {
  constructor(run, update) {
    this.run = run;
    this.tick = update;
  }
  
  start() {
    this.run();
  }
  
  tick() {
    this.tick();
  }
}