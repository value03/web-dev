var w = window.innerWidth;
var h = window.innerHeight;  





//------
//CIRCLE SECTION
//------

var fade;
var fadeAmount = 3;



let circles = function(p) {

  p.setup = function() {
    p.createCanvas(w, h * 3); 
    fade = 0;
    p.frameRate(60);
  }

  p.draw = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var menuSize = p.map(w, 40, 2000, 80, 40)
    var spacing = p.map(w, 40, 2000, 80, 40);

    if (h > w) {
      var limit = w - 100;
    } else {
      var limit = h - 100;
    }
  
    p.resizeCanvas(w, h*3);

    //p.background("#8969B3");
    p.background(30);
    //getting scrollposition
    var pos = getScrollXY();
    console.log(pos);

    p.translate(w / 2, h / 2);


    //Circle options
    p.strokeWeight(3);
    p.stroke(255, 0, 0);
    p.noFill();

    //draw the static circle
    for (var i = 0;i < limit; i += 10) {
      p.ellipse(0, 0, i);
    }

    //draw moving Circle
    for (var i = 0;i < limit; i += 10) {
      p.ellipse(0, pos * 2, i);
    }

    if (pos > 430) {
      var baseScroll = pos - 430;

      var basePos = Math.floor(pos);

      //setup
      p.noStroke();
      p.textSize(menuSize);
      p.textAlign(p.CENTER);

      //first text
      p.fill(250, 250, 250, baseScroll);
      p.text("Home", 0, basePos - spacing);

      //second text
      p.fill(250, 250, 250, baseScroll - 200);
      p.text("Work", 0, spacing);

      //third text
      p.fill(250, 250, 250, baseScroll - 400);
      p.text("About Me", 0, basePos + spacing);


    }
  }
}

new p5(circles, "container");




var strum = 2;


let sinus = function(p) {

  p.setup = function() {
    var sinc = p.createCanvas(w, 400);
    sinc.id("c2");
  }

  p.draw = function() {

    p.background(220);


    //get parameter
    //var param = (p.width / 10) / p.TWO_PI;

    
    //sine function line
    p.noFill();
    p.stroke(250, 50, 10);
    p.strokeWeight(10);
    
    p.beginShape(p.LINES);
    for(var x = 0; x < p.map(getScrollXY(), 1400, scrollHeight, 0, w) ; x++){
      //var angle = map(x, 0, width, 0, TWO_PI);
      var angle = x * 0.01;
      // map x between 0 and width to 0 and Two Pi
      var y = p.map(p.sin(angle), -strum, strum, 100, 300);
      p.vertex(x, y);
    }
    p.endShape();
  }
}

//new p5(sinus, "bottom container")








function getScrollXY() {
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return scrOfY;
}
