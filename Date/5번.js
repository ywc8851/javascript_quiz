function getLastDayOfMonth(year, month) {
  const lastdate = new Date(year, month + 1, 0).getDate();
  let day = new Date(year, month, lastdate).getDay();
  console.log(day);
}
// 2021년 1월 말일은 일요일
getLastDayOfMonth(2021, 0); // => 0

// 2021년 12월 말일은 금요일
getLastDayOfMonth(2021, 11); // => 5
