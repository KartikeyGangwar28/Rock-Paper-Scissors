<script>
   
   const score = JSON.parse(localStorage.getItem('score'))||{ //created a top to save the score after we run function every time 
        
    wins:0,
    loses:0,
    ties:0
};
let computerMove = ''; //declare them globally to use in all functions
    let result='';
    // let move = '';
document.title =`ROCK PAPER SCISSOR`
//declaring dom outside to use in both function
 
 const displayresult = document.querySelector('.displayresult');
    const displaymove = document.querySelector('.displaymoves');
    const displayscore = document.querySelector('.scoredisplay');
const autoButton = document.querySelector('.auto')
const rockButton = document.querySelector('.btrock')
const paperButton = document.querySelector('.btpaper')
const scissorsButton = document.querySelector('.btscissors')
const resetButton = document.querySelector('.reset')


function playerMove(move){
   
   const random = Math.random();
    //console.log(random) use return statement instead 
    if (random>0 && random<= 1/3){
      computerMove = 'rock'
    }
    else  if (random> 1/3 && random<= 2/3){
        computerMove='paper'
    }
    else {
       computerMove = 'scissors'
    }
    
 if (computerMove === move){
result = `<img class="butImg2" src="tie.jpg" alt="">`
}
//we can alos write a grouped up el se if statement for all loses and wins and ties in 3 lines each
if (move==='rock'){
    if (computerMove==='paper'){
        result = `<img class="butImg2" src="images.png" alt="">`
        // instead of text you lose we added image
    }
    else if (computerMove==='scissors'){
        result = `<img class="butImg2" src="win.png" alt="">`
    }
}
if (move==='paper'){
    if (computerMove==='rock'){
        result = `<img class="butImg2" src="win.png" alt="">`
    }
    else if (computerMove==='scissors'){
        result = `<img class="butImg2" src="images.png" alt="">`
    }
}
if (move==='scissors'){
    if (computerMove==='paper'){
        result=`<img class="butImg2" src="win.png" alt="">`
    }
    else if (computerMove==='rock'){
        result = `<img class="butImg2" src="images.png" alt="">`
    }
}
if (result === `<img class="butImg2" src="win.png" alt="">`){
score.wins+=1
}
else if (result ===`<img class="butImg2" src="images.png" alt="">`){
    score.loses+=1
}
else if (result===`<img class="butImg2" src="tie.jpg" alt="">`){score.ties+=1}
//instead of comparing else if statements go through a different approach
// const resultImage{
//     'You Win': 'win.png',

// }
updateScore(move)

 localStorage.setItem('score',JSON.stringify(score));//stores only string so convert object into string and again into parse while loading

return computerMove; //just to see the value
};
rockButton.addEventListener('click',()=>{
    playerMove('rock'
    )
});
paperButton.addEventListener('click' , ()=>{
    playerMove('paper')
});
scissorsButton.addEventListener('click' , ()=>{
    playerMove('scissors')
})
autoButton.addEventListener('click',()=>{
autoPlay()
})
resetButton.addEventListener('click',()=>{
    resetScore()
})
document.body.addEventListener('keydown' , 
(event)=>{
    if(event.key === 'r'){
        playerMove('rock')
    }
    else if(event.key === 'p'){
        playerMove('paper')
    }
    else if(event.key === 's'){
        playerMove('scissors');
    }
})

function updateScore(move){
//as this was repeating so just make a function and call it wherever we were repeating
displayresult.innerHTML = result;
displaymove.innerHTML = `YOUR CHOICE: <img class="butImg2" src="${move}-emoji.png">- System Choice: <img class="butImg2" src="${computerMove}-emoji.png">`

console.log(move)
displayscore.innerHTML = `Wins:${score.wins}, Losses:${score.loses},Ties:${score.ties}`
///////////////////////////////////////////we can also write above function using ternery


}
//console.log(playerMove()) //this wil give 5 in console 
  function resetScore(){
score.wins =0;
score.loses = 0;
score.ties=0
// displayscore.innerHTML = `Wins:${score.wins}, Losses:${score.loses},Ties:${score.ties}` we have function to update
localStorage.removeItem('score');
// alert('scorereset')
updateScore()
displayresult.innerHTML = 'PICK A MOVE'
displaymove.innerHTML =`MOVES RESET`
 //ELSE IT WILL GIVE YOU CHOSE UNDEFINED

}
let isAutoPlaying = false;
let setId;
 function autoPlay(){
    if(isAutoPlaying===false){
 setId=setInterval(()=>{
    const moves = ['rock' , 'paper' , 'scissors']
    const move = moves[Math.floor(Math.random()*3)];
     // or  //const move = computerMove;
playerMove(move)
    },1000) 
autoButton.innerText = 'STOP AUTO PLAYING'
  


   isAutoPlaying=true;
    }

else{
    clearInterval(setId);
    isAutoPlaying = false
   autoButton.innerText = 'START AUTO PLAYING'
 
}


 }

autoButton.addEventListener

 
</script>
