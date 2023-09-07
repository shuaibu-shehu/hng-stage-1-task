const dayOFTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const daysOFtheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();
const currentDay = daysOFtheWeek[date.getUTCDay()];
dayOFTheWeek.textContent = currentDay;

function getTime() {
  date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  let ampm = (document.querySelector(".ampm").innerHTML = "AM");
  if(hrs>12){
    hrs=hrs-12;
  }else if(hrs>=12){
    ampm.innerHTML='PM';
  } else{
    ampm.innerHTML='AM';
  }
  document.querySelector(".hrs").innerHTML = hrs;
  document.querySelector(".mins").innerHTML = mins;
  document.querySelector(".secs").innerHTML = secs;
}

setInterval(() => {
  getTime();
}, 1000);
