var s;
function setup(){
    s = new Clock(hour(),minute(),second());
}
function draw(){
    s.draw();
   
}

var now = new Date();
var date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();

function settime(id){
    if(id == "hongkong"){
        s.newTime = 8;
    }else if(id == "newyork"){
        s.newTime = -5;
    }else if(id == "paris"){
        s.newTime = 1;
    }else if(id == "cairo"){
        s.newTime = 2;
    }else if(id == "sydney"){
        s.newTime = 11;
    }
}