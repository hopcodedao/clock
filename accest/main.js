const $ = document.querySelector.bind(document);

var time;
var hour;
var minute;
var second;

var clockHour = $(".hours");
var clockMinutes = $(".minutes");
var clockSecons = $(".secons");
var digitalClock = $(".clock-digital");

function clock() {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  hour = hour % 12;

  var SeconDeg = second * 6;
  var MinuteDeg = minute * 6 + SeconDeg / 60;
  var HourDeg = hour * 30 + (minute * 30) / 60;
  clockHour.style.transform = "rotate(" + HourDeg + "deg)";
  clockMinutes.style.transform = "rotate(" + MinuteDeg + "deg)";
  clockSecons.style.transform = "rotate(" + SeconDeg + "deg)";
}
function hvn() {
  time = new Date();
  hour = time.getHours();
  minute = time.getMinutes();
  second = time.getSeconds();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var now = hour + " : " + minute + " : " + second;
  digitalClock.innerHTML = now;
  clock();
}
setInterval("hvn()", 1000);

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("mode-switch").checked = true;
} else {
  document.body.classList.remove("dark-mode");
  document.getElementById("mode-switch").checked = false;
}

document.getElementById("mode-switch").addEventListener("click", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  }
});
