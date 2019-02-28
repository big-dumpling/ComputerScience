function randomInt(min, max){return round(random(min, max))}
function windowResized(){resizeCanvas(windowWidth,windowHeight)}
class Button{
	constructor(x,y,w,h,t,e){this.x=x;this.y=y;this.width=w;this.height=h;this.text=t;this.event=e;this.setButtonColor(255,255,255);this.setTextColor(0,0,0)}
	setButtonColor(r,g,b){this.buttonR=r;this.buttonG=g;this.buttonB=b}
	setTextColor(r,g,b){this.textR=r;this.textG=g;this.textB=b}
	setText(t){this.text=t}
	draw(){fill(this.buttonR, this.buttonG, this.buttonB);rect(this.x,this.y,this.width,this.height);fill(this.textR,this.textG,this.textB);textAlign(CENTER,CENTER);text(this.text,this.x,this.y,this.width,this.height)}
	mouseInBounds(){return(mouseX>=this.x&&mouseX<=this.x+this.width&&mouseY>=this.y&&mouseY<=this.y+this.height)}
	onClick(){if(this.mouseInBounds()){if(mouseIsPressed){this.clicked=true;}else{if(this.clicked){if(this.event==undefined){}else{this.event()}this.clicked=false;}}}}
	update(){this.onClick();this.draw()}
}
function sum(args){let ans=0;for(let i in args) {ans+=args[i]}return ans}
function average(args){return sum(args)/args.length}
function index(arr,item){if(included(arr,item)){for(let i in arr){if(arr[i]==item){return i}}}else{return -1}}
function included(arr, item){for(let i in arr){if(arr[i]==item){return true}}return false}
function mouseLocate() {text(round(mouseY), mouseX, mouseY-20);text(round(mouseX), mouseX-35, mouseY-20)}