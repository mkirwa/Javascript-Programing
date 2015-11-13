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


// more do while loops
var getToDaChoppa = function(){
  // Write your do/while loop here!
  
  var me= true
  
  do{
    console.log("This is a do while loop!!!");
  }
  while(me=false)
  
};

getToDaChoppa();

//dragon slaying game

var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}
//coding lines

var slaying= true;
var youHit=Math.floor(Math.random()*2);
var damageThisRound= Math.floor(Math.random()*5+1);
var totalDamage=0;
while(slaying)
{
    
    if(youHit==true)
    {
        console.log("Congratulations you hit the dragon!!!"); 
    }
    else
    {
        console.log("The dragon defeated you!!!");   
    }
    
    slaying= false;
}
//Code to check even numbers in javascript
var isEven = function(number) {
  // Your code goes here!
  

  
  if(number%2===0)
  {
      return true;
  }
  else
  {
      return false;
  }
  
};





