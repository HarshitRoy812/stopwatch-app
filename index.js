let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
var play_pauseBtn = document.querySelector('#play_pause');
var resetBtn = document.querySelector('#reset');

let h = 0;
let m = 0;
let s = 0;


let timer;

function stopWatch()  // Main Logic
{
    if (s == 59)
    {
        s = 0;
    
        if (m == 59)
        {
            h++;
            m = 0;
        }
        else 
        {
            m++;
        }
    }

    if (h < 10)  // If hours,mins,seconds is less than 10 then only change the second digit
    {
        hours.innerText = `0${h}`;
    }
    else 
    {
        hours.innerText = h;
    }

    if (m < 10)
    {
        minutes.innerText = `0${m}`;
    }
    else 
    {
        minutes.innerText = m;
    }

    if (s < 10)
    {
        seconds.innerText = `0${s}`;
    }
    else 
    {
        seconds.innerText = s;
    }
    
    s++;
}

play_pauseBtn.addEventListener('click',() => {

    if (play_pauseBtn.classList.contains('play'))
    {
        play_pauseBtn.innerHTML = 'Pause &nbsp; <i class = "fa-solid fa-pause"> </i>';
        play_pauseBtn.classList.remove('play');
        timer = setInterval(stopWatch,1000); 
    }
    else 
    {
        play_pauseBtn.innerHTML = 'Play &nbsp; <i class = "fa-solid fa-play"> </i>';
        play_pauseBtn.classList.add('play');
        clearInterval(timer);
    }
})

resetBtn.addEventListener('click',() => {
    clearInterval(timer);
    play_pauseBtn.innerHTML = 'Play &nbsp; <i class = "fa-solid fa-play"> </i>';
    play_pauseBtn.classList.add('play');
    
    h = 0;
    m = 0;
    s = 0;
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
})
