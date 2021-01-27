const handSeconds = document.querySelector('.sec-hand'),
    handMinutes = document.querySelector('.min-hand'),
    handHours = document.querySelector('.hour-hand');
    

function timeSet(){
    const time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hour = time.getHours(), 
        secDeg = ((seconds / 60) * 360) + 90,
        minDeg = ((minutes / 60) * 360) + 90,
        hourDeg = ((hour / 60) * 360) + 90,
        sound = document.querySelector('.sound');
        sound.currentTime = 0;
        sound.play();
    handSeconds.style.transform = `rotate(${secDeg}deg)`;
    handMinutes.style.transform = `rotate(${minDeg}deg)`;
    handHours.style.transform = `rotate(${hourDeg}deg)`;
}

timeSet();
setInterval(timeSet, 1000);
