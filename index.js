var isToggle = false;

var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var gamePattern = [];
  var userClickedPattern = [];

  $("body").keypress(function(){
      if(isToggle!=true){
        newSequence();
        isToggle=true;
      }

  });


$(".btn").click(function(){
    // var onClick = this.css();
    var selectedColor = $(this).attr("id");
    userClickedPattern.push(selectedColor);
    makesound(selectedColor);

    checkPattern(userClickedPattern.length-1);

});



function newSequence(){
  userClickedPattern = [];
  var a = Math.floor(Math.random() * 4);
  $("h1").text("level "+level);
  level++;

  gamePattern.push(buttonColors[a]);
  makesound(buttonColors[a]);

}


function checkPattern(currlevel){
  if(gamePattern[currlevel]===userClickedPattern[currlevel]){
    console.log("success");
      if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
          newSequence();
        },1000);
      }
  } else {
    makesound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over! Press any key to Restart.")

    setTimeout(function () {
       $("body").removeClass("game-over");
     }, 500);
     startOver();
  }
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 120);
}


function makesound(key){
  animatePress(key);
  var audio = new Audio("sounds/"+key+".mp3");
  audio.play();
}


function startOver(){
  userClickedPattern = [];
  gamePattern = [];
  isToggle = false;
  level = 0;
}
