video = "";
status = "";
input = ""
function preload(){
    video = createCapture(VIDEO)
    video.hide()
}

function setup() {
    canvas = createCanvas(480,380)
    canvas.center()
}

function draw() {
    image(video,0,0,480,380)
}

function toggle() {
object_detector = ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML = "Carregando objetos"
input = document.getElementById("ot").value
}
function modelLoaded() {
    console.log("Loaded!")
    status = true
}