// $('h1').css('color','red');
// alert('hello');
gamePattern= [];
userClickedPattern= [];
buttonColours= ["red", "blue", "green", "yellow"];
var level= 0;

function playSound(name){
  var audio= new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function nextSequence(){

  userClickedPattern = [];
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour= buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  level= level + 1;
  $('h1').text("Level :"+ level);
}

function animatePress(currentColour){
  $("."+ currentColour).addClass("pressed");

  setTimeout(function() {
  $("."+ currentColour).removeClass("pressed");
}, 100);
}

$(".btn").on("click", function(event){
  //we have to use this
    var clickedElement = event.target;
    var userChosenColour = $(clickedElement).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    switch (userChosenColour) {
      case "red":
        playSound(userChosenColour);
        break;
      case "blue":
        playSound(userChosenColour);
      break;
      case "green":
        playSound(userChosenColour);
        break;
      case "yellow":
        playSound(userChosenColour);
        break;
      default:
        console.log("hello");
    }
    checkAnswer(userClickedPattern.length - 1);
});

var start= true;
$(document).keypress(function(event){
  while (start==true){
    nextSequence();
    start= false;
  }
})

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]==gamePattern[currentLevel]){
      // alert("correct");
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }else{
      // alert("wrong");
      playSound("wrong");
      $('body').addClass('game-over');

      setTimeout(function() {
      $('body').removeClass("game-over");
    }, 200);
      $('h1').text("Game Over, Press Any Key to Restart");
      startOver();
    }
}

function startOver(){
  level= 0;
  gamePattern= [];
  start= true;
}





// $('h1').text(randomNumber);
