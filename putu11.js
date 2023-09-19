function getDaysPassed() {
  const date = new Date();
  const thisYear = new Date(String(date.getFullYear()));
  return `This year, days has passed are ${Math.floor(
    (Date.parse(date) - Date.parse(thisYear)) / 86400000
  )} days`;
}

console.log(getDaysPassed());
