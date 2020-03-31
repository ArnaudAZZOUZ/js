
let userInput = prompt('Enter your attack:')
// let userInput
let getUserChoice = function(userattack){

    if(userattack === 'rock' || userattack === 'scissors' || userattack === 'paper'){
        console.log('well done')
        return userattack;
    }else{
        console.log('not asking a lot..')
    }
}

let getComputerChoice = function () {
    let compAttack = Math.floor(Math.random()*3);
    if(compAttack===0){
        return 'rock';
    }
    if(compAttack===1){
        return 'paper';
    }
    if(compAttack===2){
        return 'scissors';
    }else{
        return 'wtf';
    }
}

let determinWinner = function(compAttack,userAttack){
    if(compAttack===userAttack){
        return 'tied';
    }
    // if( userAttack==='rock' && compAttack==='scissors' || userAttack==='paper' && compAttack==='rock' || userAttack==='scissors' && compAttack==='paper'){
    //     return 'you won!'
    // }else{
    //     return 'you lose';
    // }

    if(userAttack==='rock'){
        if(compAttack==='scissors'){
            return 'you won!'
            }else{
                return 'you lose';
            }
        }
    if(userAttack==='paper'){
        if(compAttack==='rock'){
            return 'you won!'
        }else{
            return 'you lose';
        }
    }
    if(userAttack==='scissors'){
        if(compAttack==='paper'){
            return 'you won!'
        }else{
            return 'you lose';
        }
    }

}

// let userInputClean(){




let playGame = function(){
    // let userInputClean=function toLowerCase(userInput);
    let uChoice = getUserChoice(userInput.toLowerCase());
    let computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
   return determinWinner(computerChoice,uChoice);

}
// console.log(toLowerCase(userInput))

// console.log(getUserChoice('rock'));
// console.log(getComputerChoice());
console.log(playGame());

