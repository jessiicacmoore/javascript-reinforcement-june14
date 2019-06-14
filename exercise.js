let words = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let wordLC = word.toLowerCase();
  let wordIsLong = word > 4

  if (wordIsLong && word === wordLC) {
    console.log("long and lowercase");
  } else if (word === wordLC) {
    console.log("lowercase");
  } else if (wordIsLong > 4) {
    console.log("long");
  } else {
    console.log(word)
  }
}

// print "lowercase" if the string is all lowercase
// print "long" if the string is more than 4 characters
// print "long and lowercase" if the string's length is more than 4 characters and it's all lowercase
// otherwise print the string itself
