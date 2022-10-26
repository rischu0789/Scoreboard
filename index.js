// Elements from index.html
const guestScore = document.getElementById('guestDisplay')
const meScore =document.getElementById('meDisplay')
const winDisplay = document.getElementById('winnerDisplay')
const timeEl = document.getElementById('time')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resetBtn = document.getElementById('reset')


// for guest and me functions
let meCount = 0
let guestCount = 0

// for timer function
let seconds = 0
let interval = null

//ME //===========================================================
function me1(){
    meCount+=1
    //count += 1 //score count
    meScore.textContent = meCount //score Display  
   console.log(meCount)
}

function me2(){
    meCount +=2 //score count
    meScore.textContent = meCount //score Display
   console.log(meCount)
}
function me3(){
    meCount+= 3 //score count
    meScore.textContent = meCount //score Display
   console.log(meCount)
}

//GUEST //===========================================================
function guest1(){
    guestCount+=1
    //count += 1 //score count
    guestScore.textContent = guestCount //score Display  
   console.log(guestCount)
}

function guest2(){
    guestCount +=2 //score count
    guestScore.textContent = guestCount //score Display
   console.log(guestCount)
}
function guest3(){
    guestCount+= 3 //score count
    guestScore.textContent = guestCount //score Display
   
}


//TIMER //===NOT WORKING NEED TO CHANGE FROM SECOND TO MINUTES!!!=============================================================

function timer(){
    seconds++
    //Format time
    let hrs = Math.floor(seconds/(60*60))
    let mins = Math.floor((seconds - (hrs*3600))/ 60)
    let secs = seconds % 60

    if(secs < 10){secs = '0'+ secs}
    if(mins < 10){mins = '0'+ mins}
    if(hrs < 10){hrs = '0'+ hrs}

    timeEl.innerHTML =`${hrs}:${mins}:${secs}`
}

startBtn.addEventListener('click', function(){
    if(interval){
        return
    }
    interval = setInterval(timer,1000)
})

pauseBtn.addEventListener('click', function pause(){
    clearInterval(interval)
    interval = null
})

resetBtn.addEventListener('click',function(){
    clearInterval(interval)
    interval = null
    seconds = 0
    timeEl.innerHTML = '00:00:00'

    meCount = 0
    meScore.textContent = meCount
    guestCount = 0
    guestScore.textContent = guestCount
})

