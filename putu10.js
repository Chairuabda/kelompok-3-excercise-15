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

console.log(getDay(2022, 1));
