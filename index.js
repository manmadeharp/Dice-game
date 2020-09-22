// TODO: Generate a dice roll... a RANDOM number from 1-6
// TODO: Rule 1: if you score a 1, you lose... what happens IF that occurs?
// TODO: Rule 2: Score of 21 or more will win the game for you... what will happen IF I score 21 or more?
const h1score = document.getElementById("score");
const diceButton = document.getElementById("roll");
const diceimage = document.getElementById("dice")
const game = document.getElementById("note")
let roll = 0;
let score = 0;


document.getElementById("dice").style.backgroundImage  = "url('./img/dice2.png')";
diceButton.addEventListener("click", () =>{
    roll = Math.floor(Math.random() * (7 - 1) + 1);
    switch (roll) {
        case roll = 1:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice1.png')";
            break;
        case roll = 2:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice2.png')";
            break
        case roll = 3:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice3.png')";
            break
        case roll = 4:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice4.png')";
            break
        case roll = 5:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice5.png')";
            break
        case roll = 6:
            document.getElementById("dice").style.backgroundImage  = "url('./img/dice6.png')";
            break
        default:
            break;
    }
    
    score += roll;
    h1score.textContent = score;
    if (roll == 1) {
    game.textContent = "You lose, Manchester Dan.";
    score = 0;
    h1score.textContent = 0;;
    }
    else if (score >= 21) {
    game.textContent = "Somehow, Man-like Dan, you win.";
    score = 0;
    h1score.textContent = 0;;
    }
    else {
    game.textContent = "press button to continue"
    }
})


