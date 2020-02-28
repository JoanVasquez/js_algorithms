const removeVowels = arr => {
  // return arr.map(word => word.replace(/[aeiouAEIOU]/g, ""));
  const vowels = ["a", "e", "i", "o", "u"];

  const newArr = [];
  // arr.map(word => {
  for (let f = 0; f < arr.length; f++) {
    for (let i = 0; i < arr[f].length; i++) {
      if (vowels.includes(arr[f].charAt(i))) {
        arr[f] = arr[f].replace(arr[f].charAt(i), "");
      }
    }
    // newArr.push( arr[f]);
    // });
  }
  return arr;
};

console.log(removeVowels(["camisa", "pedro", "caminar"]));
