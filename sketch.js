var w = window.innerWidth;
var h = window.innerHeight;  

if (h > w) {
    var limit = w - 100;
} else {
    var limit = h - 100;
}

//------
//CIRCLE SECTION
//------


let circles = function(p) {

  p.setup = function() {
   p.createCanvas(w, 2000); 
  }

  p.draw = function() {
    p.background("#8969B3");

    //getting scrollposition
    var pos = getScrollXY();

    p.translate(w / 2, h / 2);


    //Circle options
    p.strokeWeight(3);
    p.stroke(255, 0, 0);
    p.noFill();

    //draw the static circle
    for (var i = 0;i < getLimit(); i += 10) {
      p.ellipse(0, 0, i);
    }

    //draw moving Circle
    for (var i = 0;i < getLimit(); i += 10) {
      p.ellipse(0, pos * 2, i);
    }
  }
}

new p5(circles, "container");



var strum = 3;


let sinus = function(p) {

  p.setup = function() {
    p.createCanvas(w, 400);
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
    for(var x = 0; x < p.map(getScrollXY(), 1400, 1900, 0, w) ; x++){
      //var angle = map(x, 0, width, 0, TWO_PI);
      var angle = x * 0.01;
      // map x between 0 and width to 0 and Two Pi
      var y = p.map(p.sin(angle), -strum, strum, 100, 300);
      p.vertex(x, y);
    }
    p.endShape();
  }
}

new p5(sinus, "bottom container")



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



function windowResized() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  
  resizeCanvas(w, h);

}

function getLimit() {
  var w = window.innerWidth;
  var h = window.innerHeight;  

  if (h > w) {
    var limit = w - 100;
  } else {
    var limit = h - 100;
  }
  return limit
}