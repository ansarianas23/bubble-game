let timer = 60;
let score = 0;
let randNo = 0

// Function that created random bubble on the container
function makeBubble() {
let clutter = "";

for (let i=1; i<=168; i++){
    let randomNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNum}</div>`
}
document.querySelector("#panelBottom").innerHTML = clutter;
} 

// Function that starts timer for the given time
function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else if(timer == 0){
            document.querySelector("#modalContainer").style.display = "flex"
            document.querySelector("#ScoreDisplay").textContent += `Your Score is ${score}`
            clearInterval(timerint);
        }
    },1000)
}

// Function that created a random hit number which we have to match with bubble 
function getNewHit(){
    randNo = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = randNo;
}

// Function that increases the score if the hit matches with bubble
function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent = score
}

// event that listen for each bubble
bottomPanel = document.querySelector("#panelBottom")
bottomPanel.addEventListener('click', function(e){
    console.log(e.target.textContent);
    if(Number(e.target.textContent) === randNo){
        getNewHit()
        increaseScore()
        makeBubble();
    }else if(Number(e.target.textContent) !== randNo && score>0){
        score -= 5;
        document.querySelector("#scoreVal").textContent = score
    }
})


// event that closes the modal after game is over
closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener('click', function(){
    document.querySelector("#modalContainer").style.display = "none"
    window.location.reload()
})


// these functions are initially to start the game
runTimer();
makeBubble();
getNewHit()
