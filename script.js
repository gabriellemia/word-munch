let searchBtn = document.querySelector("#search");

async function getWord(newWord) {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + newWord;
  let response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    console.error(response.status);
    console.error(response.text());
    return;
  }
  return await response.json();
}

let displayMeaning = document.querySelector("#displayMeaning");

let displaySynonym = document.querySelector("#displaySynonym");

searchBtn.addEventListener("click", async function () {
  let newWord = document.querySelector("#word").value;
  let definition = await getWord(newWord);
  if (!definition) {
    displayMeaning.textContent = "That tastes a bit off, please feed me the correct spelling";
  }
  displayMeaning.textContent = "💩 " + "Meaning: " + definition[0].meanings[0].definitions[0].definition;
  displaySynonym.textContent = "💩 " + "Synonym: " + definition[0].meanings[0].synonyms;
});
