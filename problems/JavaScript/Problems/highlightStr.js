function highlight(str, keywords) {
  const uniqueKeywords = new Set(keywords);
  let words = str.split(" ");

  const result = words.map((word) => {
    let output = "";

    if (uniqueKeywords.has(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i + 1); // Use slice to get substrings
        const suffix = word.slice(i + 1);

        if (uniqueKeywords.has(prefix) && uniqueKeywords.has(suffix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
          break;
        } else if (uniqueKeywords.has(prefix)) {
          output = `<strong>${prefix}</strong>${suffix}`;
          break;
        } else if (uniqueKeywords.has(suffix)) {
          output = `${prefix}<strong>${suffix}</strong>`;
          break;
        }
      }
    }

    return output !== "" ? output : word;
  });

  return result.join(" ");
}

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

console.log(highlight(str, words));
// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"
