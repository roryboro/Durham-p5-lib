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
    get newTime(){
        return this._hr;
    }

    set newTime(value){
           this._hr += value; 
        }
        

    }
