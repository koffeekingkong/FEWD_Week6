//store the breakpoint Celsius value in a variable
var breakpointCelsius = 20;

//write a Celsius-Fahrenheit converter function
//T(°F) = T(°C) × 1.8 + 32
function convertToFahrenheit(celsius){
  return celsius * 1.8 +32;
}

//write an image display function for hot or cold images
//to update the #weatherImage in the HTML
function updateImage(celsius){
  var imgSrc = "";
  if (celsius >= breakpointCelsius){
    imgSrc = "images/hot.jpeg";
  }else if(celsius < breakpointCelsius){
    imgSrc = "images/cold.jpeg";
  }
  $(weatherImage).attr("src",imgSrc);
}

//write a function to update the result message that is displayed below the image
//the message template should be:
// "N°C (N°F). That's (hot OR cold)!"
function updateResultMessage(celsius, fahrenheit){
  var htmlStr = celsius+"°C (" + fahrenheit ")°F." "That's";
  if (celsius >= breakpointCelsius){
    htmlStr += "cold";
  }
  else if (celsius < breakpointCelsius){
    htmlStr += "hot";
  }

  $("resultMessage")
}

//write a click handler function for the submit button that brings everything together
$("#submit").click(function(){


});
