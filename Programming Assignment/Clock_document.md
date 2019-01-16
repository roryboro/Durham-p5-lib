#Program documentation
The sketch that I decided to use was one of a clock, created by William Broderick, licenses can be seen in the additional document.

* I chose this sketch as I had the thought of how to make it into a reusable component and had some ideas of what to add to it. After creating the class and an instance I discovered that the clock would no longer tick whilst also it interacting with the get and set methods (later explained). But I have adjusted the webpage so that the clock not updating automatically without refreshing makes sense.

* I have a constructor class with the parameters with the same names as the variables in the original code of hr, mn and sc. I also included the colours of the different hands in the constructor and, thus, set them to different colours than the original.


```
class Clock{
    constructor(hr, mn, sc){
        this._hr = hr;
        this._mn = mn;
        this._sc = sc;
        this.bcolour = 'black';
        this.hrcolour = 'green';
        this.mncolour = 'yellow';
        this.sccolour = 'red';
        createCanvas(400, 400);
        angleMode(DEGREES);
    } 
```
The 'createCanvas(400,400)' and 'anglemode(DEGREES)' lines are there as they would be in the setup method when a new instance is created so they are put here so they can be reusable.

* The draw method that is inside the class is as follows:

```
draw(){
        background(this.bcolour);
        translate(200, 200);
        rotate(-90);

        strokeWeight(8);
        stroke(this.sccolour);
        noFill()
        let secondAngle = map(this._sc, 0, 60, 0, 360);
        arc(0, 0, 300, 300, 0, secondAngle);
  
        push();
        rotate(secondAngle);
        stroke(this.sccolour);
        line(0, 0, 100, 0);
        pop();
  
        stroke(this.mncolour);
        let minuteAngle = map(this._mn, 0, 60, 0, 360);
        arc(0, 0, 280, 280, 0, minuteAngle);
  
        push();
        rotate(minuteAngle);
        stroke(this.mncolour);
        line(0, 0, 100, 0);
        pop();
  
        stroke(this.hrcolour);
        let hourAngle = map(this._hr % 12, 0, 12, 0, 360);
        arc(0, 0, 260, 260, 0, hourAngle);
  
        push();
        rotate(hourAngle);
        stroke(this.hrcolour);
        line(0, 0, 100, 0);
        pop();

    }
```
This is quite similar to the original code with the "hr", "mn", and "sc"s all replaced with "this._hr", "this._mn" and "this._sc" respectively as well as the colours being replaced with the colours in the constructor seen above.


* I have also added a setter and a corresponding getter to allow more functionality to the webpage, I have put buttons on the page so that each one could be pressed down and the the time on the clock will change time to whatever city is written on the button

**get and set methods:**

```
*   get newTime(){
        return this._hr;
    }

    set newTime(value){
           this._hr += value; 
    }
```
**settime function:**

```
*   function settime(id){
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
```
Here, the value in the set method is updated in correspondence to which button is being pressed, e.g. when the "newyork" button is pressed, the value of 5 is subtracted (or minus 5 is added) to the hour parameter and this is shown on the sketch of the clock

**Corresponding buttons**

```
<div class="time_group">
      <button class = "button" id="hongkong" onmousedown="settime(id)">Hong Kong</button>
      <button class = "button" id="newyork" onmousedown="settime(id)">New York</button>
      <button class = "button" id="paris" onmousedown="settime(id)">Paris</button>
      <button class = "button" id="cairo" onmousedown="settime(id)">Cairo</button>
      <button class = "button" id="sydney" onmousedown="settime(id)">Sydney</button>
</div>
```


* There is also some interaction between the JavaScript program and the Document Object Model (DOM) as when the button is clicked on the webpage, the date of the day it is clicked is displayed as an alert. I implemented this as it fit with the theme of time.

**displaydate() function**

```
document.addEventListener("DOMContentLoaded", function(){
         var button = document.getElementById("date");
         function displaydate(){
      	     alert("Today's date is: " + date);
            }
         button.addEventListener("click", displaydate);
            });
```
**Declaration of date**

```
var now = new Date();
var date = now.getDate() + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
```
* Finally, I also included some css to make the webpage in which the sketch sits look more aesthetically pleasing. This includes some functionality with the date button so it looks like it is being physically pressed down:

```
.button1{                 /* some of this css has been obtained from 'https://www.w3schools.com/css/css3_buttons.asp'*/
    display: inline-block;
    background-color: royalblue;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-family: fantasy;
    margin: 4px 2px;
    cursor: pointer;
    position: absolute;
    transition: .5s ease;
    left: 625px;
    top: 198px;
}

.button1:active {
    background-color: blue;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
```