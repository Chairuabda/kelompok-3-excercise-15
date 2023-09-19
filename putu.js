module.exports = { oddHalf, getDay, getDaysPassed, ageCalculator };

function oddHalf(arr) {
  let newArr = [];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log(arr[i]);
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function getDay(year, month, n = 0) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = new Date(year, month, n).getDate();
  return `Days in ${months[month]} ${year} is ${day} day`;
}

function getDaysPassed() {
  const date = new Date();
  const thisYear = new Date(String(date.getFullYear()));
  return `This year, days has passed are ${Math.floor(
    (Date.parse(date) - Date.parse(thisYear)) / 86400000
  )} days`;
}

function ageCalculator(yearBorn, monthBorn, dateBorn) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateNow = new Date();
  const born = new Date(yearBorn, monthBorn, dateBorn);
  const actualBorn = new Date(yearBorn, monthBorn - 1, dateBorn);
  let year = Math.floor((dateNow - born) / 86400000 / 12 / 30);
  if (
    dateNow.getMonth() + 1 - born.getMonth() < 0 ||
    dateNow.getDate() - born.getDate() < 0 ||
    born.getMonth() === 0
  ) {
    year--;
  }
  return `Born in ${actualBorn.getDate()} ${
    months[actualBorn.getMonth()]
  } ${actualBorn.getFullYear()}, your age is ${year} year`;
}
