var wheel = document.getElementById('wheel');
var pointer = document.getElementById('pointer');
var result = document.getElementById('result');

var spinCount = 0;
var isSpinning = false;

wheel.addEventListener('click', function() {
  if (!isSpinning) {
    spinCount++;
    if (spinCount === 1) {
      rotateWheel(360);
    } else if (spinCount === 2) {
      var randomAngle = Math.floor(Math.random() * 360);
      rotateWheel(720 + randomAngle);
    }
  }
});

function rotateWheel(angle) {
  isSpinning = true;
  wheel.style.transform = 'rotate(' + angle + 'deg)';
  
  setTimeout(function() {
    isSpinning = false;
    
    if (spinCount === 1) {
      result.innerHTML = 'Try again!';
    } else if (spinCount === 2) {
      result.innerHTML = 'Congratulations! You won a gift card!';
    }
  }, 2000);
}