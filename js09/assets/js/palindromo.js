const isPalindrome = (word) => {
    word = word.toLowerCase().split(" ").join("");
    console.log(word)
    return word === word.split("").reverse().join("")
  }