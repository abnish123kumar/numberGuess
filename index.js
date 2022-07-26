let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutPut");
let userNumberUpdate = document.getElementById("inputBox");

const init = () =>{
    computerGuess = Math.floor(Math.random() * 100);

    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

};

const  startGame = () =>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

// start new game
  const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
  }

  //reload
  const  newGameBegin = () =>{
    window.location.reload();
  };

//main logic of our app

const compareGuess = () =>{
    const userNumber =Number(document.getElementById("inputBox").value);
      userGuess = [...userGuess,userNumber];
      document.getElementById("guesses").innerHTML = userGuess;
        // check value high or low
       if(userGuess.length< maxGuess){  
        if(userNumber > computerGuess){
             userGuessUpdate.innerHTML = "Your guess is high";
              userNumberUpdate.value = "";
        }else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML= "Your guess is low";
            userNumberUpdate.value = "";
        }else{
            userGuessUpdate.innerHTML = "it's correct";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }else{
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
             userNumberUpdate.value = "";
             startNewGame();
       }else if(userNumber < computerGuess){
           userGuessUpdate.innerHTML= `You Loose!! Correct number was ${computerGuess}`;
           userNumberUpdate.value = "";
           startNewGame();
       }else{
           userGuessUpdate.innerHTML = "it's correct";
           userNumberUpdate.value = "";
           startNewGame();
       }
    }
        document.getElementById("attempts").innerHTML = userGuess.length;
}

const easyMode = () =>{
    maxGuess = 12;
    startGame();
}
const hardMode = () =>{
    maxGuess = 5;
    startGame();
}
const mediumMode = () =>{
    maxGuess = 8;
    startGame();
}
