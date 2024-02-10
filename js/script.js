
var countDownDate = new Date("Dec 20, 2025 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime()
    var distance =  countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24 ))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % ( 1000 * 60 )) / 1000)

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds

    if(distance < 0){
    clearInterval(x);
    document.getElementById('days').innerHTML = "00"
    document.getElementById('hours').innerHTML = "00"
    document.getElementById('minutes').innerHTML = "00"
    document.getElementById('seconds').innerHTML = "00"
    }
},1000)


// 2nd logic


// var sec = 0;
// var min = 0;
// var s;
// var m;


// function startTime(){

// var sec = 0;
// var min = 0;
// var hr = 0;
// var s;
// var m;
// var h;

//   s = setInterval(function(){
   
//     if(sec < 10){
//       seconds.innerHTML = '0' + sec
//     }
//     else{
//       seconds.innerHTML = sec
//     }
//     sec++;

//     if(sec == 60){
//       sec = 0
//     }
//   }, 1000)

//   // for minutes
//   m = setInterval(function(){
   
//     if(min < 10){
//       minutes.innerHTML = '0' + min
//     }
//     else{
//       minutes.innerHTML = min
//     }
//     min++;

//     if(min == 60){
//       min = 0
//     }
//   }, 30000)
//   // for Hours
//   h = setInterval(function(){
   
//     if(hr < 10){
//       hours.innerHTML = '0' + hr
//     }
//     else{
//       hours.innerHTML = hr
//     }
//     hr++;

//     if(hr == 24){
//       hr = 0
//     }
//   }, 3600000)
// }
// function stopTime() {
//   clearInterval(s);
//   clearInterval(m);
// }
//   startTime();

		

// sticky Header
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var nav = document.getElementById("myNav");
// var links = nav.getElementsByTagName("a");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//     ul.classList.add("color");
    
//     var elements = document.getElementsByName('href');
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.color = "#000";
//     }
//     nav.classList.add("scroll-menu");
//     for (var i = 0; i < links.length; i++) {
//       links[i].classList.add("scroll-menu-link");
//     }
//   } else {
//     header.classList.remove("sticky");
//     nav.classList.remove("scroll-menu");
//   }
  
// }

// try

$(document).ready(function () {
  // sticky Header
  var stickyOffset = $(".bottom_header").offset().top;

  $(window).scroll(function () {
      if ($(window).scrollTop() > stickyOffset) {
          $(".bottom_header").addClass("fixed");
          $(".bottom_header").find("a").addClass('scroll-a')
          $(".logo-2").css("opacity","1")
          $(".toggle_icon i").addClass("scroll-a")
      } else {
          // Remove the fixed class if the user scrolls back up
          $(".bottom_header").removeClass("fixed");
          $(".bottom_header").find("a").removeClass('scroll-a')
          $(".logo-2").css("opacity","0")
          $(".toggle_icon i").removeClass("scroll-a")
      }
  });
})
// for other pages
$(document).ready(function () {
  // sticky Header
  var stickyOffset = $(".bottom_header1").offset().top;

  $(window).scroll(function () {
      if ($(window).scrollTop() > stickyOffset) {
          $(".bottom_header1").addClass("fixed");
        //   $(".bottom_header").find("a").addClass('scroll-a')
        //   $(".logo-2").css("opacity","1")
        //   $(".toggle_icon i").addClass("scroll-a")
      } else {
          // Remove the fixed class if the user scrolls back up
          $(".bottom_header1").removeClass("fixed");
        //   $(".bottom_header").find("a").removeClass('scroll-a')
        //   $(".logo-2").css("opacity","0")
        //   $(".toggle_icon i").removeClass("scroll-a")
      }
  });
})

// Modal

// function showDelayedModal() {
//    document.querySelector('.overlay-modal').classList.add('show_overlay')
//   document.querySelector('.modal-sec').classList.add('show_modal-sec')

// }
// function removeDelayedModal() {
//    document.querySelector('.overlay-modal').classList.remove('show_overlay')
//   document.querySelector('.modal-sec').classList.remove('show_modal-sec')
// }
// var remove = document.querySelector('.cross')
// remove.addEventListener('click', removeDelayedModal)
// const delay = 2000;
// setTimeout(showDelayedModal, delay);