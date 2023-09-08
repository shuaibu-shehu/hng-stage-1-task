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
  const hrs = date.getUTCHours();
  const mins = date.getUTCMinutes();
  const secs = date.getUTCSeconds();
  const ampm =document.querySelector(".ampm");
  if(hrs>12){
    hrs=hrs-12;
  }else if(hrs>=12){
    ampm.innerHTML='PM';
  } else{
    ampm.innerHTML='AM';
  }
  
  document.querySelector(".hrs").textContent = formatToTwoDigits(hrs);
  document.querySelector(".mins").textContent= formatToTwoDigits(mins);
  document.querySelector(".secs").textContent = formatToTwoDigits(secs);
}

setInterval(() => {
  getTime();
}, 1000);

// converts to two digits
function formatToTwoDigits(number) {
    return number.toString().padStart(2, '0');
}