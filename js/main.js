import { getRandomPair } from "./api.js";
import { saveFavorite } from "./storage.js";
import { setYear } from "./footer.js";
setYear();

const dogImg   = document.getElementById("dog-image");
const adviceEl = document.getElementById("advice");
const statusEl = document.getElementById("status");
const genBtn   = document.getElementById("generate-btn");
const saveBtn  = document.getElementById("save-btn");

let currentPair = null;

async function generate() {
  statusEl.textContent = "";
  statusEl.className = "";
  genBtn.disabled = true;
  saveBtn.disabled = true;
  adviceEl.textContent = "Loading…";

  try {
    currentPair = await getRandomPair();
    dogImg.src = currentPair.image;
    dogImg.alt = "Random dog photo";
    adviceEl.textContent = currentPair.advice;
    saveBtn.disabled = false;
  } catch (err) {
    console.error(err);
    adviceEl.textContent = "Something went wrong. Try again.";
    statusEl.textContent = err.message;
    statusEl.className = "error";
  } finally {
    genBtn.disabled = false;
  }
}

genBtn.addEventListener("click", generate);

saveBtn.addEventListener("click", () => {
  if (!currentPair) return;
  const added = saveFavorite(currentPair);
  statusEl.textContent = added ? "Saved!" : "Already in favorites.";
  statusEl.className = added ? "success" : "error";
});

// load one on page open
generate();