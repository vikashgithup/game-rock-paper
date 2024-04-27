let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice =()=>{
    const options =["rock2","paper1","scissors3"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
   
};

const drawGame =() =>{
    console.log("game was draw.");
    msg.innerText ="Game was Draw. play again.";
    msg.style.backgroundColor ="#081b31"; 
};

const showWinner =(userWin, userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You win");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green"; 
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        // console.log("you lose");
        msg.innerText =` You lose. ${compChoice} your beats ${userChoice}`;
        msg.style.backgroundColor ="red"; 
    }
};

const playGame =(userChoice)=>{
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice === compChoice){
        drawGame(); 
    }else{
        let userWin = true;
        if(userChoice === "rock2"){
            userWin =compChoice ==="paper1"?false :true;
        }else if(userChoice ==="paper1"){
            userWin =compChoice ==="scissors3"?false :true;
        }else{
            userWin =compChoice ==="rock2" ? false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
};



choices.forEach((choice) =>{  
    choice.addEventListener("click",() =>{
        const userChoice =choice.getAttribute("id");
       playGame(userChoice);
    });
});