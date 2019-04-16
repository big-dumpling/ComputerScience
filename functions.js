// This library is dependant on the p5.js library

// - - - - - Button stuff - - - - - - - -
class Button{
/* useful */	constructor(x,y,w,h,t,e){this.x=x;this.y=y;this.width=w;this.height=h;this.text=t;this.event=e;this.setButtonColor(255,255,255);this.setTextColor(0,0,0)}
/* useful */  setPos(x,y){this.x=x;this.y=y}
/* useful */	setButtonColor(r,g,b){this.buttonR=r;this.buttonG=g;this.buttonB=b}
/* useful */	setTextColor(r,g,b){this.textR=r;this.textG=g;this.textB=b}
/* useful */	setText(t){this.text=t}
/* useful */	mouseInBounds(){return(mouseX>=this.x&&mouseX<=this.x+this.width&&mouseY>=this.y&&mouseY<=this.y+this.height)}
/* useful */	update(){this.onClick();this.draw()}
/* not useful */	draw(){stroke(0);fill(this.buttonR,this.buttonG,this.buttonB);strokeWeight(1);rect(this.x,this.y,this.width,this.height);fill(this.textR,this.textG,this.textB);textAlign(CENTER,CENTER);noStroke();text(this.text,this.x,this.y,this.width,this.height)}
/* not useful */	onClick(){if(this.mouseInBounds()){if(mouseIsPressed){this.clicked=true;}else{if(this.clicked){if(this.event==undefined){}else{this.event()}this.clicked=false;}}}}
}

// - - - - - Array stuff - - - - - - - - - - - - - - - - - - -
function randomInt(min,max){return round(random(min,max))}
function sum(args){let ans=0;for(let i in args){ans+=args[i]}return ans}
function average(args){return sum(args)/args.length}
function index(arr,item){if(included(arr,item)){for(let i in arr){if(arr[i]==item){return i}}}else{return -1}}
function included(arr,item){for(let i in arr){if(arr[i]==item){return true}}return false}
function listWithout(arr,item){let removeID="rQDWJOengAW7i9wayoa342ESNHoASnaSon";let old_array=arr;let new_array=[];old_array[item]=removeID;for(let i in old_array){if(old_array[i]!=removeID){new_array.push(old_array[i])}}return new_array}
function choose(arr){return arr[randomInt(0,arr.length-1)]}

// - - - - - Mouse stuff - - - - - - - - - - - - - - - - - - -
function mouseLocate(){text(round(mouseY),mouseX,mouseY-20);text(round(mouseX),mouseX-35,mouseY-20)}