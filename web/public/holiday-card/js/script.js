
/*
var holidayGif = document.getElementById("holidayGif");
var holidayVideo = document.getElementById('holidayVideo');
var playbutton = document.getElementById('playbutton');
var windowWidth = window.windowWidth;
*/
/*
function playVideoFromButton() {
  var playbutton = document.getElementById('playbutton');
  var holidayGif = document.getElementById("holidayGif");
  var holidayVideo = document.getElementById('holidayVideo');
  holidayGif.style.display = "none";
  holidayVideo.style.display = 'block';
  holidayVideo.play();
  // playbutton.style.display = 'none'
}*/


var playable = false;
var holidayGif = $('#holidayGif');
var holidayVideo = $('#holidayVideo');


function hideGifAndPlayVideo() {

  // add gtm event

  // play the video if you can
  if(playable) {
    holidayGif.style.display = 'none';
    holidayVideo.style.display = 'block';
    holidayVideo.play();
  }
  else {
    // do nothing, keep loading stuff
  }


}


$(document).ready(function(){

  // add "canplay" listener to enable video to be played
  holidayVideo.oncanplay(function() {
    playable = true;
  });

  holidayGif.click(function() {
    hideGifAndPlayVideo();
  });

  holidayVideo.click(function(){
    this.paused?this.play():this.pause();
  });

  if($(window).width() < 475) {

    holidayGif.attr('src','unnamed.gif').animate({
      "position": "absolute",
      "minHeight": "inherit",
      "padding": "0",
      "margin": "0 auto",
      "width": "100%",
      "height": "auto",
      "backgroundSize": "cover",
      zIndex: "1"
    },10);



  }

});
