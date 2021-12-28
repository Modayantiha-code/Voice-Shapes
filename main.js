var shapex = 0;
var shapey = 0;
var drawcircle = "";
var drawrectangle = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var mySpeechRecognizer = new SpeechRecognition();

function start() {
    document.getElementById("recognizerstatus").innerHTML = " Would you like to draw a CIRCLE or a RECTANGLE? Say it out loud, the system is listening... ";
    mySpeechRecognizer.start();
}

mySpeechRecognizer.onresult = function(resultarray) {
    console.log(resultarray);
    var myspeech = resultarray.results[0][0].transcript;
    document.getElementById("recognizerstatus").innerHTML = "We recognized " + myspeech
    if (myspeech == "Circle.") {
        document.getElementById("recognizerstatus").innerHTML = "Drawing a circle";
        shapex = Math.floor(Math.random() * 900);
        shapey = Math.floor(Math.random() * 600);
        drawcircle = "drawn";
    }

    if (myspeech == "Rectangle.") {
        document.getElementById("recognizerstatus").innerHTML = "Drawing a rectangle";
        shapex = Math.floor(Math.random() * 900);
        shapey = Math.floor(Math.random() * 600);
        drawrectangle = "drawn";
    }
}

function setup() {
    var mycanvas = createCanvas(900, 600);
}

function draw() {
    if (drawcircle == "drawn") {
        radius = Math.floor(Math.random() * 100);
        circle(shapex, shapey, radius);
        drawcircle = "";
    }

    if (drawrectangle == "drawn") {
        side = Math.floor(Math.random() * 100);
        rect(shapex, shapey, side, side);
        drawrectangle = "";
    }
}