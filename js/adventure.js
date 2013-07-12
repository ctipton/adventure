
var user = prompt("You see a troll in the forest. He looks very strong! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(user){
    //first case FIGHT
    case 'FIGHT':
        var strong = prompt("Are you strong? (yes or no)").toUpperCase();
        var smart = prompt("Are you smart? (yes or no)").toUpperCase();
        //start the if testing for strong and smart
        //if strong and smart.. or and death
        if (strong === "YES" && smart === "YES"){
            console.log("You Win, you smart strongman!");
            break;
        } else if (strong === 'YES' || smart === 'YES'){
            console.log("You only need one. You win!");
            break;
        } else {
            console.log("You are crushed");
        }
        break;
        
    case 'PAY':
        break;
    case 'RUN':
        break;
    default:
        console.log("You answered unwisely. The troll has evidently eaten your brain");
        break;
}
