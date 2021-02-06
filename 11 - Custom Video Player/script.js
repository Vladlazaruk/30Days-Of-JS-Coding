const player = document.querySelector('.player'),
    video = document.querySelector('.viewer'),
    progress = document.querySelector('.progress'),
    progressBar = document.querySelector('.progress__filled'),
    toggle = document.querySelector('.toggle'),
    skipBtns = document.querySelectorAll('[data-skip]'),
    ranges = document.querySelectorAll('.player__slider'),
    full = document.querySelector('.player__full-screen');


function togglePlay(){
    if(video.paused){
        video.play();
        toggle.textContent = '❚ ❚';
    } else{
        video.pause();
        toggle.textContent = '►';
    }
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen(){
    if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.webkitRequestFullscreen) { /* Safari */
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) { /* IE11 */
        player.msRequestFullscreen();
      }      
}


video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipBtns.forEach(btn =>{
    btn.addEventListener('click', skip);
});
ranges.forEach(item =>{
    item.addEventListener('change', handleRange);
});
ranges.forEach(item =>{
    item.addEventListener('mousmove', handleRange);
});
progress.addEventListener('click', scrub);
full.addEventListener('click', fullScreen);

