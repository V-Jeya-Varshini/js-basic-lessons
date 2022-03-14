let rotate = '180';
let rotateMin = '180';
let rotateHours = '180';
let rotateDays = '180';
function timer() {
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  if(rotate == '180') {
    document.getElementById('seconds-bottom').style.transform = `rotateX(${rotate}deg)`;
    rotate = '0';
  } else {
    document.getElementById('seconds-bottom').style.transform = `rotateX(${rotate}deg)`;
    rotate = '180';
  }
  if(seconds == 0) {
    if(rotateMin == '180') {
      document.getElementById('minutes-bottom').style.transform = `rotateX(${rotateMin}deg)`;
      rotateMin = '0';
    } else {
      document.getElementById('minutes-bottom').style.transform = `rotateX(${rotateMin}deg)`;
      rotateMin = '180';
    }
  }
  if(minutes == 0) {
    if(rotateHours == '180') {
      document.getElementById('hours-bottom').style.transform = `rotateX(${rotateHours}deg)`;
      rotateHours = '0';
    } else {
      document.getElementById('hours-bottom').style.transform = `rotateX(${rotateHours}deg)`;
      rotateHours = '180';
    }
  }
  if(hours == 0) {
    if(rotateDays == '180') {
      document.getElementById('days-bottom').style.transform = `rotateX(${rotateDays}deg)`;
      rotateDays = '0';
    } else {
      document.getElementById('days-bottom').style.transform = `rotateX(${rotateDays}deg)`;
      rotateDays = '180';
    }
  }
  if (distance < 0) {
    clearInterval(x);
    
  }
}, 1000);
}

window.onload = () => {
  timer();
}