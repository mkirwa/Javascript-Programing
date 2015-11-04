var compare =function (choice1,choice2)
{
    if(choice1===choice2)
    {
        return "The result is a tie!";
    }
    else if(choice1 === "rock")
    {
        
        if(choice2 === "scissors")
        {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
        
    }
    else if(choice1=="paper")
    {
        if (choice2 === "rock")
        {
            return "paper wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    
};

//Using For loops in Javascript plus arrays

var cities = ["Nairobi", "Asia", "Jamaica", "NYC","Mombasa"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}

//Code that checks the text for the first letter of your name and adds then adds the number of character equal to your name


var myName = "Eric";
var hits = [];

// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
    if (text[i] === "E") {
        // If we find it, add characters up to
        // the length of my name to the array
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}



