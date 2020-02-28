const removeVowels = arr => {
  // return arr.map(word => word.replace(/[aeiouAEIOU]/g, ""));
  const vowels = ["a", "e", "i", "o", "u"];

  const newArr = [];
  arr.map(word => {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word.charAt(i))) {
        word = word.replace(word.charAt(i), "");
      }
    }
    newArr.push(word);
  });
  return newArr;
};

console.log(removeVowels(["camisa", "pedro", "caminar"]));
