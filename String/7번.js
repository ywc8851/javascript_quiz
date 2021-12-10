const compress = (string) =>
  [...new Set([...string])].reduce(
    (acc, char) =>
      acc.replace(new RegExp(`(${char}+)`, "g"), (match) =>
        match.length > 1 ? `${match[0]}${match.length}` : match[0]
      ),
    string
  );

console.log(compress("ABBCCCE"));
