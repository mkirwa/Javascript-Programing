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

