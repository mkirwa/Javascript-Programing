//code academy projects
// using while loops
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


//Using bool in Javascript

var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}

//Using while loops

var count =0;
var loop = function(){
	while(count<3){
		//Your code goes here!
		
		console.log("I'm looping!");
		count++;
	}
};

loop();
//

//Do while loops
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
