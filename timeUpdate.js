/* Time Update Function */
            
function addZero(i) { //for single digit minutes
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function updateClock() {
    var date = new Date();
    var hours = date.getHours();
    var hours = (hours+24)%24; 
    var mins = addZero(date.getMinutes());
    var mid='AM';
    
    if(hours==0 || hours==12) { //exception case for 12:00 AM
        hours=12;
        mid='PM';
    }
    else if(hours>12){
        hours=hours%12;
        mid='PM';
    }
   
        //formatting string for display
    var time =  ''.concat('<b> Today </b>', hours, ":", mins, ' ', mid);
    document.getElementById('Time').innerHTML = time;

        //call function every 10 seconds
    setTimeout(updateClock, 10000);
}
updateClock();