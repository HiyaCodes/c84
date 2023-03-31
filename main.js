canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var background_image = "mars.jpg"
var rover_image = "rover.png"
rover_X = 10
rover_Y = 10


function add() {
    background_img_tag = new Image()
    background_img_tag.onload = uploadBackground
    background_img_tag.src = background_image

    rover_img_tag = new Image()
    rover_img_tag.onload = uploadRover
    rover_img_tag.src = rover_image

}
function uploadBackground() {
    ctx.drawImage(background_img_tag, 0, 0, canvas.width, canvas.height)

}
function uploadRover() {
    ctx.drawImage(rover_img_tag, roverX, roverY, rover_width, rover_height)
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == '38') {
        //up()
        console.log("up")
    }

    if (keyPressed == '40') {
        //up()
        console.log("down")
    }

    if (keyPressed == '37') {
        //up()
        console.log("left")
    }

    if (keyPressed == '39') {
        //up()
        console.log("right")
    }
}



