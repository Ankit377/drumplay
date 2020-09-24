// detect click event

for (i = 0; i < (document.querySelectorAll(".drum").length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", drumPlay)
  function drumPlay() {
    //this.style.color = "white"
    console.log(this)

    var buttoninnerHtml = this.innerHTML
    console.log(buttoninnerHtml);
    makeSound(buttoninnerHtml);
  }
}


/// keypress detect

addEventListener("keypress", drumkeyplay)

function drumkeyplay(e) {


  var pressedkey = e.key

  makeSound(pressedkey)

}

// getting keyboard input

function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play()
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play()
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play()
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play()
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play()
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play()
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play()
      break;

    default:
      console.log(e.key + " your pressed wrong key");

      break;
  }
}