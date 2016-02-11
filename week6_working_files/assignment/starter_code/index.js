//handler that changes the background
$('form').change(submitCity);

//define all the cities in the array
var city = ["NYC", "LA", "SF", "ATX", "SYD"];

// allow all the options to appear on the dropdown
for (var i = 0; i < 5; ++i) {
    $("select").append( new Option(city[i]));
}

function submitCity() {

//the value of current city that has been selected
  var currentCity = $("#city-type").val();

  if (currentCity === "NYC") {
    $("body").attr("class", "nyc");
  } else if(currentCity === "LA") {
      $("body").attr("class", "la");
  } else if (currentCity === "SF") {
      $("body").attr("class", "sf");
  }else if (currentCity === "ATX") {
      $("body").attr("class", "austin");
  }else if (currentCity === "SYD") {
      $("body").attr("class", "sydney");
  }
};
