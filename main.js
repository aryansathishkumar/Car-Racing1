var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width_car_1 = 100
var width_car_2 = 100

var car1_x = 10
var car1_y = 10

var car2_x = 10
var car2_y = 140

var height_car_1 = 65
var height_car_2 = 65

var background_img = "Racetrack.jpg"
var car_img_1 = "images.jpg"
var car_img_2 = "images1.jpg"

function add() 
{
    background_Img = new Image();
    background_Img.onload = show_background;
    background_Img.src = background_img;

    car_1_Img = new Image();
    car_1_Img.onload = show_car1;
    car_1_Img.src = car_img_1;

    car_2_Img = new Image();
    car_2_Img.onload = show_car2;
    car_2_Img.src = car_img_2;
}

function show_background()
{
    ctx.drawImage(background_Img, 0, 0, canvas.width, canvas.height);
}

function  show_car1()
{
    ctx.drawImage(car_1_Img, car1_x, car1_y, width_car_1, height_car_1);
}

function  show_car2()
{
    ctx.drawImage(car_2_Img, car2_x, car2_y, width_car_2, height_car_2);
}

window.addEventListener("keydown", keydown)

function keydown(e)
{
    var keyPressed = e.keyCode;

    if(keyPressed == "38")
    {
        console.log("up for car 1")
        up();
    }
    if(keyPressed == "40")
    {
        console.log("down for car 1")
        down();
    }
    if(keyPressed == "37")
    {
        console.log("left for car 1")
        left();
    }
    if(keyPressed == "39")
    {
        console.log("right for car 1")
        right();
    }
    if(keyPressed == "65")
    {
        console.log("up for car 2")
        a();
    }
    if(keyPressed == "70")
    {
        console.log("down for car 2")
        f();
    }
    if(keyPressed == "68")
    {
        console.log("right for car 2")
        d();
    }
    if(keyPressed == "83")
    {
        console.log("left for car 2")
        s();
    }
}
function up()
{
  if(car1_y <= 0){
    car1_x;car1_y - 10;
    console.log("car 1 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function a()
{
  if(car2_y <= 0){
    car2_x;car2_y - 10;
    console.log("car 2 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function down()
{
  if(car1_y <= 500){
    car1_x;car1_y + 10;
    console.log("car 1 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function f()
{
  if(car2_y <= 500){
    car2_x;car2_y + 10;
    console.log("car 2 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function right()
{
  if(car1_x <= 0){
    car1_x - 10;car1_y;
    console.log("car 1 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function d()
{
  if(car2_x <= 0){
    car2_x - 10;car2_y;
    console.log("car 2 moves")
    show_background();
    show_car1();
    show_car2();
    }
}
function left()
{
  if(car1_x <= 500)
  {
    car1_x + 10;car1_y;
    console.log("car 1 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
function s()
{
  if(car1_x <= 500){
    car2_x + 10;car2_y;
    console.log("car 2 moves")
    show_background();
    show_car1();
    show_car2();
  }
}
