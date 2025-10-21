let textArea = document.getElementById("textArea");
let counter = document.getElementById("counter");
let warning = document.getElementById("warning");
let loadingBarContainer = document.getElementById("loadingBarContainer");

let MAX_CHARS = 200;
let PIXELS = 50;

// Create pixel blocks dynamically
for (let i = 0; i < PIXELS; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  loadingBarContainer.appendChild(pixel);
}

let pixels = document.querySelectorAll(".pixel");

textArea.addEventListener("input", () => {
  let textLength = textArea.value.length;

  if (textLength > MAX_CHARS) {
    textArea.value = textArea.value.substring(0, MAX_CHARS);
    textLength = MAX_CHARS;
    warning.textContent = "You have reached the maximum character limit!";
  } else {
    warning.textContent = "";
  }

  counter.textContent = `${textLength}/${MAX_CHARS} characters`;

  let filledPixels = Math.round((textLength / MAX_CHARS) * PIXELS);
  pixels.forEach((pixel, index) => {
    if (index < filledPixels) {
      pixel.classList.add("filled");
    } else {
      pixel.classList.remove("filled");
    }
  });
});
