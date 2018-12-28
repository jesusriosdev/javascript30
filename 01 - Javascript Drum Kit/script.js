
document.onkeypress = function(event) {
    playSound(event.code);
};

function playSound(code) {
    switch(code) {
        case "KeyA":
            document.getElementById("KeyA").classList.add('keyHover');

            var boom = new Audio("sounds/boom.wav");
            boom.play();

            setTimeout(function(){ document.getElementById("KeyA").classList.remove('keyHover'); }, 100);
            break;

        case "KeyS":
            document.getElementById("KeyS").classList.add('keyHover');

            var clap = new Audio("sounds/clap.wav");
            clap.play();

            setTimeout(function(){ document.getElementById("KeyS").classList.remove('keyHover'); }, 100);
            break;
        
        case "KeyD":
            document.getElementById("KeyD").classList.add('keyHover');

            var hiphat = new Audio("sounds/hihat.wav");
            hiphat.play();

            setTimeout(function(){ document.getElementById("KeyD").classList.remove('keyHover'); }, 100);
            break;
        
        case "KeyF":
            document.getElementById("KeyF").classList.add('keyHover');

            var kick = new Audio("sounds/kick.wav");
            kick.play();

            setTimeout(function(){ document.getElementById("KeyF").classList.remove('keyHover'); }, 100);
            break;
    
        case "KeyG":
            document.getElementById("KeyG").classList.add('keyHover');

            var openhat = new Audio("sounds/openhat.wav");
            openhat.play();

            setTimeout(function(){ document.getElementById("KeyG").classList.remove('keyHover'); }, 100);
            break;
        
        case "KeyH":
            document.getElementById("KeyH").classList.add('keyHover');

            var ride = new Audio("sounds/ride.wav");
            ride.play();

            setTimeout(function(){ document.getElementById("KeyH").classList.remove('keyHover'); }, 100);
            break;
    
        case "KeyJ":
            document.getElementById("KeyJ").classList.add('keyHover');

            var snare = new Audio("sounds/snare.wav");
            snare.play();

            setTimeout(function(){ document.getElementById("KeyJ").classList.remove('keyHover'); }, 100);
            break;
        
        case "KeyK":
            document.getElementById("KeyK").classList.add('keyHover');

            var tink = new Audio("sounds/tink.wav");
            tink.play();

            setTimeout(function(){ document.getElementById("KeyK").classList.remove('keyHover'); }, 100);
            break;
    
        case "KeyL":
            document.getElementById("KeyL").classList.add('keyHover');

            var tom = new Audio("sounds/tom.wav");
            tom.play();

            setTimeout(function(){ document.getElementById("KeyL").classList.remove('keyHover'); }, 100);
            break;
          
        default:
        
      }


} 
