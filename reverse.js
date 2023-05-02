const reverse = function(words) {
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
  }
  return reversed;
};
let newWords = process.argv.slice(2);
for (let j = 0; j < newWords.length; j++) {
  console.log(reverse(newWords[j]));
}

