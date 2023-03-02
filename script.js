const generateButton = document.getElementById("generate");
const outputElement = document.getElementById("output");
const explosionText = document.getElementById("explosion-text");
const bingoText = document.getElementById("bingo-text");

const characters = ["て", "ね", "る", "ー"];

function generateRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generateRandomString() {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += generateRandomCharacter();
  }
  return result;
}

generateButton.addEventListener("click", () => {
  const randomString = generateRandomString();
  outputElement.textContent = randomString;

  if (randomString === "てねーる") {
    document.body.style.backgroundImage = "url('./backgrounds/tener.jpg')";
    explosionText.style.display = "block";
    explosionText.textContent = "爆破！";
  } else if (randomString === "てててて" || randomString === "ねねねね" || randomString === "るるるる" || randomString === "ーーーー") {
    document.body.style.backgroundImage = "url('./backgrounds/disney.jpeg')";
    bingoText.style.display = "block";
    bingoText.textContent = "ビンゴ！";
  } else {
    document.body.style.backgroundImage = "url('./backgrounds/default.png')";
    explosionText.style.display = "none";
    bingoText.style.display = "none";
  }
});

