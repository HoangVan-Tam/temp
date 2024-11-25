// Set the date we're counting down to
var countDownDate = new Date("Dec 7, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("daysMobile").innerHTML = days;
  document.getElementById("hoursMobile").innerHTML = hours;
  document.getElementById("minutesMobile").innerHTML = minutes;
  document.getElementById("secondsMobile").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
    document.getElementById("daysMobile").innerHTML = "0";
    document.getElementById("hoursMobile").innerHTML = "0";
    document.getElementById("minutesMobile").innerHTML = "0";
    document.getElementById("secondsMobile").innerHTML = "0";
  }
}, 1000);

function set_dialForSeconds() {
  var element = document.getElementById("secondsCircle");
  var number = document.getElementById("seconds");
  var seconds = document.getElementById("seconds").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 48));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 48)) - (percentage / 60) * 302;
  number.innerHTML = percentage;
}

set_dialForSeconds();

setInterval(() => set_dialForSeconds(), 1000);

function set_dialForMinutes() {
  var element = document.getElementById("minutesCircle");
  var number = document.getElementById("minutes");
  var seconds = document.getElementById("minutes").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 48));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 48)) - (percentage / 60) * 302;
  number.innerHTML = percentage;
}

set_dialForMinutes();

setInterval(() => set_dialForMinutes(), 1000);

function set_dialForHours() {
  var element = document.getElementById("hoursCircle");
  var number = document.getElementById("hours");
  var seconds = document.getElementById("hours").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 48));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 48)) - (percentage / 24) * 302;
  number.innerHTML = percentage;
}

set_dialForHours();

setInterval(() => set_dialForHours(), 1000);

function set_dialForDays() {
  var element = document.getElementById("daysCircle");
  var number = document.getElementById("days");
  var seconds = document.getElementById("days").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 48));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 48)) - (percentage / 30) * 302;
  number.innerHTML = percentage;
}

set_dialForDays();

setInterval(() => set_dialForDays(), 1000);

function set_dialForSecondsMobile() {
  var element = document.getElementById("secondsCircleMobile");
  var number = document.getElementById("secondsMobile");
  var seconds = document.getElementById("secondsMobile").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 24));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 24)) - (percentage / 60) * 151;
  number.innerHTML = percentage;
}

set_dialForSecondsMobile();

setInterval(() => set_dialForSecondsMobile(), 1000);

function set_dialForMinutesMobile() {
  var element = document.getElementById("minutesCircleMobile");
  var number = document.getElementById("minutesMobile");
  var seconds = document.getElementById("minutesMobile").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 24));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 24)) - (percentage / 60) * 151;
  number.innerHTML = percentage;
}

set_dialForMinutesMobile();

setInterval(() => set_dialForMinutesMobile(), 1000);

function set_dialForHoursMobile() {
  var element = document.getElementById("hoursCircleMobile");
  var number = document.getElementById("hoursMobile");
  var seconds = document.getElementById("hoursMobile").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 24));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 24)) - (percentage / 24) * 151;
  number.innerHTML = percentage;
}

set_dialForHoursMobile();

setInterval(() => set_dialForHoursMobile(), 1000);

function set_dialForDaysMobile() {
  var element = document.getElementById("daysCircleMobile");
  var number = document.getElementById("daysMobile");
  var seconds = document.getElementById("daysMobile").innerHTML;
  var percentage = seconds;
  element.style.strokeDasharray = Math.round(Math.PI * (2 * 24));
  element.style.strokeDashoffset =
    Math.round(Math.PI * (2 * 24)) - (percentage / 30) * 151;
  number.innerHTML = percentage;
}

set_dialForDaysMobile();

setInterval(() => set_dialForDaysMobile(), 1000);

//Toggle mobile menu

document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "block"
      : "none";
});

//Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
  },
  speed: 1000,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
    1440: { slidesPerView: 1 },
  },
});
