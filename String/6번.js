const toggleCase = (str) =>
  str.replace(/[a-zA-Z]/g, (char) =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  );

console.log(toggleCase("StuDY")); // sTUdy
