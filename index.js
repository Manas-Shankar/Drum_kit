var noOfDrums = document.querySelectorAll('.drum').length;
var count = 0;
for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);
}

document.addEventListener("keypress", handlePress);
document.querySelector('.reset').addEventListener('click',reset);


function handleClick() {
  var alphabetInnerHtml = this.innerHTML;
  makeSound(alphabetInnerHtml);
  buttonAnimation(alphabetInnerHtml);
}

function handlePress(event)
{
  console.log(event);
  var key = event.key;
  makeSound(key);
  if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l')
  {
    count++;
    document.querySelector('.count').innerHTML = count;
  }
  buttonAnimation(key);
}

function makeSound(key) {

  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove('pressed');
  }, 100);
}

function reset()
{
  count=0;
  document.querySelector('.count').innerHTML = "0";
}
