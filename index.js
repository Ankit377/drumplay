for (i = 0; i < (document.querySelectorAll(".drum").length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", drumPlay)
  function drumPlay() {
    this.style.color = "white"
    console.log(this)

    var buttoninnerHtml = this.innerHTML
    console.log(buttoninnerHtml);

    switch (buttoninnerHtml) {
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
        console.log(buttoninnerHtml);

        break;
    }







    // if (this.i == 0) {
    //   var audio = new Audio("./sounds/crash.mp3");
    //   this.audio.play()
    // }
    // else if (this.i == 1) {
    //   var audio = new Audio("./sounds/tom-4.mp3");
    //   audio.play()
    // }
    // else if (this.i == 2) {
    //   var audio = new Audio("./sounds/crash.mp3");
    //   audio.play()
    // }
    // else if (this.i == 3) {
    //   var audio = new Audio("./sounds/crash.mp3");
    //   audio.play()
    // }
    // else if (this.i == 4) {
    //   var audio = new Audio("./sounds/crash.mp3");
    //   audio.play()
    // } else if (this.i == 5) {
    //   var audio = new Audio("./sounds/crash.mp3");
    //   audio.play()
    // }

    // else {
    //   var audio = new Audio("./sounds/tom-1.mp3");
    //   alert("dkgj")
    //   audio.play()

    // }

  }
}

// getting keyboard input

addEventListener("keypress", drumkeyplay)

function drumkeyplay(e) {


  var pressedkey = e.key


  switch (pressedkey) {
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
      console.log(buttoninnerHtml);

      break;
  }

}
