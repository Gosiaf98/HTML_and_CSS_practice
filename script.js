//SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // 2 seconds
}

//TABS
document.getElementById("historia").style.display = "block";
function tabs(evt, tabsName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabsName).style.display = "block";
  evt.currentTarget.className += " active";
}

// MODAL IMAGE
var modal = document.getElementById("modalModule");

var img = document.getElementById("image");
var modalImg = document.getElementById("modalImg");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var exit = document.getElementsByClassName("close")[0];

exit.onclick = function() {
  modal.style.display = "none";
}
