
window.addEventListener('keydown', function(e) {
    playSound(e.keyCode);
});
function playSound(code) {
    
    const div = document.querySelector(`div[data-key="${code}"]`);
    if(!div) return;

    div.classList.add('keyHover');

    const audio = document.querySelector(`audio[data-key="${code}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    setTimeout(function(){ div.classList.remove('keyHover'); }, 100);
}