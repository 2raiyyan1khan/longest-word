const form = document.querySelector("form");
const string = document.querySelector("textarea");
const resultContainer = document.querySelector(".result-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resultContainer.innerHTML = "";
  if (string.value !== "") {
    let result = longestWord(string.value);
    resultContainer.innerHTML = `<p class="result">Longest word is : <span> ${result}</span></p>`;
  } else {
    alert("Please enter Strings");
  }
});

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
