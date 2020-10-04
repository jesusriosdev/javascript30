var countSeconds = 0;
var degreesSeconds = 0;

var countMinutes = 0;
var degreesMinutes = 0;

var countHours = 0;
var degreesHours = 0;

var firstTime = true;

var timer = setInterval(function() {

    if(firstTime == true) {

        var d = new Date(Date.now());

        countSeconds = d.getSeconds();
        countMinutes = d.getMinutes();
        countHours = d.getHours();

        degreesSeconds = (countSeconds * 6);
        degreesMinutes = (countMinutes * 6);
        degreesHours = (countHours * 30);

        document.getElementById('hand-seconds').style.transform = 'rotate(' + degreesSeconds + 'deg)'; 
        document.getElementById('hand-minutes').style.transform = 'rotate(' + degreesMinutes + 'deg)'; 
        document.getElementById('hand-hours').style.transform = 'rotate(' + degreesHours + 'deg)'; 

        firstTime = false;
    }
    else {

        countSeconds = countSeconds + 1;
        degreesSeconds = degreesSeconds + 6;
        document.getElementById('hand-seconds').style.transform = 'rotate(' + degreesSeconds + 'deg)'; 
        
        if(countSeconds == 60) {
            
            countSeconds = 0;
            degreesSeconds = 0;
    
            countMinutes = countMinutes + 1;
            degreesMinutes = degreesMinutes + 6;
            document.getElementById('hand-minutes').style.transform = 'rotate(' + degreesMinutes + 'deg)'; 
    
            if(countMinutes == 60) {
                
                countMinutes = 0;
                degreesMinutes = 0;
        
                //countHours = countHours + 1;
                degreesHours = degreesHours + 30;
                document.getElementById('hand-hours').style.transform = 'rotate(' + degreesHours + 'deg)'; 
            }
        }
    }

}, 10);