const compress = (str) =>
  (str = str
    .replace(/([A-Za-z])(\1*)/g, `$& `)
    .trim()
    .split(" ")
    .map((alphabet) =>
      alphabet.length > 1 ? alphabet[0] + `${alphabet.length}` : alphabet
    )
    .join(""));

console.log(compress("ABBCCCE")); //  AB2C3E
