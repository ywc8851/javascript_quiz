function diffDays(date1, date2) {
  const sec = date2.getTime() - date1.getTime();
  const day = sec / 1000 / 60 / 60 / 24; // 2
  console.log(day);
}
diffDays(new Date("2021/01/01"), new Date("2021/12/31")); // => 364
