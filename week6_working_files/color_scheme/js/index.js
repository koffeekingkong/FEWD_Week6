//How can we refactor the following code to make it much smaller?

// - Look at the CSS as well as this JavaScript file - what is being done in both files?
// - What is being repeated in this JavaScript file?
// - What is being repeated in the CSS file?
// - How can we use $(this) here?
// - What is the difference between .attr() and .addClass() here?


$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}
