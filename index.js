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


// current utc time
setInterval(() => {
  date = new Date();
  const utcMilliseconds = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );

  document.querySelector('[data-testid="currentUTCTime"]').textContent=utcMilliseconds;
}, 1000);
