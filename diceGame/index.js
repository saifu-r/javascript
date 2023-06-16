// document.querySelector('h1').innerHTML= "Refresh Saifur"

var randomNumber1= Math.floor((Math.random()*6)+1);
var randomImage1= "dice" + randomNumber1 + ".png";
var selectImage1= "images/" + randomImage1;


var randomNumber2= Math.floor((Math.random()*6)+1);
var randomImage2= "dice" + randomNumber2 + ".png";
var selectImage2= "images/" + randomImage2;
// console.log(selectImage);



// document.querySelector('h1').innerHTML= randomNumber1;

document.querySelectorAll("img")[0].setAttribute("src", selectImage1);
document.querySelectorAll("img")[1].setAttribute("src", selectImage2);


if(randomNumber1 === randomNumber2){
  document.querySelector('h1').innerHTML= "Draw";
}else if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML= "Player 1 winner";
}else{
  document.querySelector('h1').innerHTML= "Player 2 winner";
}

// document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice5.png"); # works perfectly
