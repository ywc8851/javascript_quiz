function getLastDateOfMonth(year, month) {
  const lastdate = new Date(year, month + 1, 0).getDate();
  console.log(lastdate);
}

getLastDateOfMonth(2021, 0); // => 31
getLastDateOfMonth(2021, 1); // => 28
